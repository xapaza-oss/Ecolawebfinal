import React, { useEffect, useRef } from 'react';

interface ShaderBackgroundProps {
  isDark?: boolean;
}

export const ShaderBackground: React.FC<ShaderBackgroundProps> = ({ isDark = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId: number;
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    const syncSize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.floor((rect.width || 1280) * dpr);
      const h = Math.floor((rect.height || 720) * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    syncSize();
    window.addEventListener('resize', syncSize);

    if (!gl) {
      // 2D Canvas Fallback
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let t = 0;
      const render2D = () => {
        t += 0.01;
        const w = canvas.width;
        const h = canvas.height;
        ctx.fillStyle = isDark ? '#041b47' : '#e0eaff';
        ctx.fillRect(0, 0, w, h);

        // Draw flowing data grid lines
        ctx.strokeStyle = isDark ? 'rgba(224, 234, 255, 0.12)' : 'rgba(4, 27, 71, 0.1)';
        ctx.lineWidth = 1;

        const cols = 20;
        const rows = 12;
        for (let i = 0; i <= cols; i++) {
          const x = (w / cols) * i;
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
          ctx.stroke();
        }

        // Draw sine waves
        ctx.strokeStyle = isDark ? 'rgba(255, 195, 0, 0.5)' : 'rgba(4, 27, 71, 0.4)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let x = 0; x < w; x += 10) {
          const y = h * 0.5 + Math.sin(x * 0.005 + t) * 60 + Math.cos(x * 0.003 - t * 0.8) * 30;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        animationFrameId = requestAnimationFrame(render2D);
      };
      render2D();

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', syncSize);
      };
    }

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fs = `
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_is_dark;

      void main() {
        vec2 uv = v_texCoord;
        
        // Lab grid pattern
        float gridX = step(0.985, fract(uv.x * 24.0));
        float gridY = step(0.985, fract(uv.y * 14.0));
        float grid = max(gridX, gridY);
        
        // Economic trends data flow waves
        float wave1 = sin(uv.x * 8.0 + u_time * 0.6) * 0.08;
        float wave2 = cos(uv.x * 12.0 - u_time * 0.4 + uv.y * 2.0) * 0.05;
        float wave3 = sin(uv.x * 4.0 + u_time * 0.2) * 0.12;
        
        float distToLine1 = abs(uv.y - 0.5 - wave1 - wave2);
        float line1 = smoothstep(0.015, 0.0, distToLine1);
        
        float distToLine2 = abs(uv.y - 0.42 - wave3);
        float line2 = smoothstep(0.012, 0.0, distToLine2);

        // Mouse reactive glow ripple
        vec2 mouseNorm = u_mouse / u_resolution;
        float mouseDist = length(uv - mouseNorm);
        float mouseGlow = smoothstep(0.35, 0.0, mouseDist) * 0.25;
        
        vec3 bgColorDark = vec3(0.016, 0.106, 0.278); // #041b47
        vec3 bgColorLight = vec3(0.878, 0.918, 1.0);   // #e0eaff
        vec3 baseBg = mix(bgColorLight, bgColorDark, u_is_dark);

        vec3 labYellow = vec3(1.0, 0.765, 0.0);       // #ffc300
        vec3 labLightBlue = vec3(0.878, 0.918, 1.0);  // #e0eaff
        vec3 labDeepBlue = vec3(0.016, 0.106, 0.278);  // #041b47

        vec3 color = baseBg;
        
        // Add subtle lab grid
        color += labLightBlue * grid * (u_is_dark > 0.5 ? 0.08 : 0.04);
        
        // Add waves
        color = mix(color, labYellow, line1 * (u_is_dark > 0.5 ? 0.65 : 0.45));
        color = mix(color, labLightBlue, line2 * 0.5);
        
        // Add interactive mouse glow
        color += labYellow * mouseGlow * 0.5;
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const compileShader = (type: number, src: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.warn('Shader compile failed', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertShader = compileShader(gl.VERTEX_SHADER, vs);
    const fragShader = compileShader(gl.FRAGMENT_SHADER, fs);
    if (!vertShader || !fragShader) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vertShader);
    gl.attachShader(prog, fragShader);
    gl.linkProgram(prog);

    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.warn('Program link failed', gl.getProgramInfoLog(prog));
      return;
    }

    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');
    const uIsDark = gl.getUniformLocation(prog, 'u_is_dark');

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    const onMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      mouse.x = (event.clientX - rect.left) * dpr;
      mouse.y = (rect.height - (event.clientY - rect.top)) * dpr;
    };

    window.addEventListener('mousemove', onMouseMove);

    const render = (t: number) => {
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      if (uIsDark) gl.uniform1f(uIsDark, isDark ? 1.0 : 0.0);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', syncSize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [isDark]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
      {/* Soft gradient overlay so text remains razor sharp and contrast is perfect */}
      <div className={`absolute inset-0 pointer-events-none ${
        isDark 
          ? 'bg-gradient-to-b from-[#041b47]/60 via-[#041b47]/40 to-[#041b47]' 
          : 'bg-gradient-to-b from-[#e0eaff]/70 via-[#e0eaff]/40 to-white'
      }`} />
    </div>
  );
};

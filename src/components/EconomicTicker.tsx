import React from 'react';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

interface EconomicTickerProps {
  isDark: boolean;
  lang: 'es' | 'en';
}

export const EconomicTicker: React.FC<EconomicTickerProps> = ({ isDark, lang }) => {
  const indicators = [
    { label: 'PIB Latam (YoY)', value: '+3.6%', change: '+0.3%', positive: true, spark: ' ▂▃▅▆▇' },
    { label: 'Inflación IPC', value: '2.7%', change: '-0.4%', positive: true, spark: '▇▆▅▃▂ ' },
    { label: 'Tasa Referencia (TPM)', value: '4.50%', change: '-25 bps', positive: true, spark: '▇▆▅▄▃▂' },
    { label: 'Desempleo Urbano', value: '6.0%', change: '-0.2%', positive: true, spark: '▅▅▄▃▂ ' },
    { label: 'Saldo Cta. Corriente', value: '+$3.5B', change: '+$400M', positive: true, spark: '▂▃▄▅▆▇' },
    { label: 'Índice de Gini', value: '0.448', change: '-0.005', positive: true, spark: '▇▆▅▄▃▂' },
  ];

  return (
    <div className={`w-full border-y overflow-hidden py-2.5 transition-colors ${
      isDark ? 'bg-[#041b47]/80 border-[#e0eaff]/15' : 'bg-[#e0eaff]/40 border-[#041b47]/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center gap-4">
        <div className="flex items-center gap-1.5 shrink-0 pr-4 border-r border-[#e0eaff]/20 text-xs font-mono-code font-bold uppercase tracking-wider text-[#ffc300]">
          <Activity className="w-4 h-4 animate-pulse text-[#ffc300]" />
          <span className="hidden sm:inline">{lang === 'es' ? 'EcoLab Observatorio' : 'EcoLab Observatory'}</span>
        </div>

        <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar py-0.5 text-xs font-mono-code whitespace-nowrap">
          {indicators.map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-2">
              <span className={isDark ? 'text-[#e0eaff]/80' : 'text-[#041b47]/80'}>
                {item.label}:
              </span>
              <span className={`font-bold ${isDark ? 'text-white' : 'text-[#041b47]'}`}>
                {item.value}
              </span>
              <span className={`inline-flex items-center text-[11px] px-1.5 py-0.2 rounded font-medium ${
                item.positive
                  ? isDark ? 'text-[#ffc300] bg-[#ffc300]/15' : 'text-[#041b47] bg-[#ffc300]/25'
                  : isDark ? 'text-rose-400 bg-rose-950/40' : 'text-rose-700 bg-rose-50'
              }`}>
                {item.positive ? <TrendingUp className="w-3 h-3 mr-0.5 text-[#ffc300]" /> : <TrendingDown className="w-3 h-3 mr-0.5" />}
                {item.change}
              </span>
              <span className="text-[10px] tracking-tighter opacity-40 select-none text-[#ffc300]">
                {item.spark}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

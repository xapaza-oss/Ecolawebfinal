import React from 'react';
import { NEWS_DATA } from '../../data/mockData';
import { Newspaper, ImageIcon, Video, FileImage } from 'lucide-react';
import fondoNoticias from '../../../assets/fondo.jpeg';

interface NoticiasEcoLabViewProps {
  isDark: boolean;
  lang: 'es' | 'en';
}

export const NoticiasEcoLabView: React.FC<NoticiasEcoLabViewProps> = ({ isDark, lang }) => {
  const typeLabel = (type: string) => {
    if (type === 'foto') return lang === 'es' ? 'Foto' : 'Photo';
    if (type === 'video') return 'Video';
    return lang === 'es' ? 'Flyer' : 'Flyer';
  };

  const typeIcon = (type: string) => {
    if (type === 'foto') return <ImageIcon className="w-3.5 h-3.5" />;
    if (type === 'video') return <Video className="w-3.5 h-3.5" />;
    return <FileImage className="w-3.5 h-3.5" />;
  };

  return (
    <div
      style={{ backgroundImage: `url(${fondoNoticias})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
      className="relative min-h-screen"
    >
      <div className={`absolute inset-0 ${isDark ? 'bg-[#041b47]/85' : 'bg-white/85'}`} />

      <div className="relative py-12 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffc300]/15 border border-[#ffc300]/40 text-[#ffc300] font-mono-code text-xs uppercase tracking-widest mb-4 font-semibold">
            <Newspaper className="w-3.5 h-3.5" />
            <span>{lang === 'es' ? 'Novedades del Programa' : 'Program Updates'}</span>
          </div>
          <h2 className={`font-serif-display text-3xl sm:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#041b47]'}`}>
            {lang === 'es' ? 'Noticias EcoLab' : 'EcoLab News'}
          </h2>
          <p className={`font-sans text-base sm:text-lg ${isDark ? 'text-[#e0eaff]/85' : 'text-[#041b47]/85'}`}>
            {lang === 'es' ? 'Fotos, videos y flyers de las actividades del programa.' : 'Photos, videos and flyers from program activities.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS_DATA.map((post) => (
            <div
              key={post.id}
              className={`rounded-2xl border overflow-hidden transition-all ${
                isDark ? 'glass-panel border-[#e0eaff]/15 hover:border-[#ffc300]/50' : 'bg-white border-[#041b47]/15 shadow-md'
              }`}
            >
              <div className="w-full aspect-video bg-black/20">
                {post.type === 'video' ? (
                  <iframe
                    src={post.mediaUrl}
                    title={post.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img src={post.mediaUrl} alt={post.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                )}
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono-code uppercase px-2 py-0.5 rounded bg-[#ffc300]/15 text-[#ffc300] border border-[#ffc300]/30 font-semibold">
                    {typeIcon(post.type)}
                    {typeLabel(post.type)}
                  </span>
                  <span className="text-[11px] font-mono-code text-[#e0eaff]/60">{post.date}</span>
                </div>
                <h3 className={`font-serif-display text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-[#041b47]'}`}>
                  {post.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-[#e0eaff]/85' : 'text-[#041b47]/80'}`}>
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import { useEffect, useState } from 'react';
import Icon from './Icon';

const SLIDES = [
  { title: 'Desert Bloom', place: 'Atacama, Chile', bg: 'linear-gradient(160deg, #fcd34d 0%, #f97316 45%, #7c2d12 100%)' },
  { title: 'Northern Glass', place: 'Tromsø, Norway', bg: 'linear-gradient(160deg, #a5f3fc 0%, #0891b2 45%, #164e63 100%)' },
  { title: 'Moss Cathedral', place: 'Yakushima, Japan', bg: 'linear-gradient(160deg, #bef264 0%, #4d7c0f 50%, #1a2e05 100%)' },
  { title: 'Violet Hour', place: 'Santorini, Greece', bg: 'linear-gradient(160deg, #f5d0fe 0%, #a855f7 45%, #3b0764 100%)' },
];

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setIndex(i => (i + 1) % SLIDES.length), 3500);
    return () => clearTimeout(t);
  }, [index, paused]);

  const go = d => setIndex(i => (i + d + SLIDES.length) % SLIDES.length);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} style={{ width: '600px', height: '400px', background: '#0c0a09', position: 'relative', overflow: 'hidden', fontFamily: "'Inter', sans-serif" }}>
      <style>{`@keyframes uaKen { from { transform: scale(1.12); } to { transform: scale(1); } } @keyframes uaBarFill { from { width: 0; } to { width: 100%; } }`}</style>
      <div style={{ display: 'flex', height: '100%', transform: `translateX(-${index * 100}%)`, transition: 'transform 0.8s cubic-bezier(0.77,0,0.18,1)' }}>
        {SLIDES.map((s, i) => (
          <div key={s.title} aria-hidden={i !== index} style={{ minWidth: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: s.bg, animation: i === index ? 'uaKen 4s ease-out both' : 'none' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.6))' }} />
            <div style={{ position: 'absolute', left: '28px', bottom: '46px', color: '#fff' }}>
              <div style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.75, display: 'flex', alignItems: 'center', gap: '5px' }}><Icon name="pin" size={12} /> {s.place}</div>
              <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '46px', lineHeight: 1.05 }}>{s.title}</div>
            </div>
          </div>
        ))}
      </div>

      {[[-1, 'chevronLeft', { left: '16px' }], [1, 'chevronRight', { right: '16px' }]].map(([d, icon, pos]) => (
        <button key={icon} onClick={() => go(d)} aria-label={d < 0 ? 'Previous slide' : 'Next slide'} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', ...pos }}>
          <Icon name={icon} size={18} />
        </button>
      ))}

      <div style={{ position: 'absolute', left: '28px', right: '28px', bottom: '20px', display: 'flex', gap: '6px' }}>
        {SLIDES.map((s, i) => (
          <button key={s.title} onClick={() => setIndex(i)} aria-label={`Go to slide ${i + 1}`} style={{ flex: 1, height: '3px', padding: 0, border: 'none', borderRadius: '2px', background: 'rgba(255,255,255,0.3)', cursor: 'pointer', overflow: 'hidden' }}>
            <span key={`${index}-${paused}`} style={{ display: 'block', height: '100%', background: '#fff', width: i < index ? '100%' : 0, animation: i === index && !paused ? 'uaBarFill 3.5s linear forwards' : 'none' }} />
          </button>
        ))}
      </div>
    </div>
  );
}

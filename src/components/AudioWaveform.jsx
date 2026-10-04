import { useEffect, useState } from 'react';
import Icon from './Icon';

const BARS = Array.from({ length: 64 }, (_, i) => 0.25 + Math.abs(Math.sin(i * 0.55) * Math.cos(i * 0.13)) * 0.75);
const DURATION = 2820;
const fmt = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

export default function AudioWaveform() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0.34);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setProgress(p => (p >= 1 ? 0 : p + 0.002)), 60);
    return () => clearInterval(t);
  }, [playing]);

  const seek = e => {
    const r = e.currentTarget.getBoundingClientRect();
    setProgress(Math.min(Math.max((e.clientX - r.left) / r.width, 0), 1));
  };

  return (
    <div style={{ width: '600px', height: '400px', background: '#f5f0e8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ width: '480px', padding: '22px', borderRadius: '22px', background: '#1c1917', color: '#fafaf9', boxShadow: '0 30px 60px rgba(28,25,23,0.3)' }}>
        <div style={{ display: 'flex', gap: '14px', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ width: '58px', height: '58px', borderRadius: '12px', background: 'linear-gradient(135deg, #f97316, #db2777)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Instrument Serif', serif", fontSize: '26px' }}>Ep</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#f97316', fontWeight: 600 }}>Episode 42 · Design Matters</div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: '18px', fontWeight: 600, marginTop: '2px' }}>The quiet power of whitespace</div>
          </div>
        </div>

        <div onClick={seek} role="slider" aria-label="Seek" aria-valuemin={0} aria-valuemax={DURATION} aria-valuenow={Math.round(progress * DURATION)} tabIndex={0}
          onKeyDown={e => { if (e.key === 'ArrowRight') setProgress(p => Math.min(1, p + 0.02)); if (e.key === 'ArrowLeft') setProgress(p => Math.max(0, p - 0.02)); }}
          style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '64px', cursor: 'pointer', outline: 'none' }}>
          {BARS.map((h, i) => {
            const played = i / BARS.length < progress;
            return <span key={i} style={{ flex: 1, height: `${h * 100}%`, borderRadius: '2px', background: played ? 'linear-gradient(180deg, #fb923c, #db2777)' : '#44403c', transition: 'background 0.2s' }} />;
          })}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'DM Mono', monospace", fontSize: '11px', color: '#a8a29e', margin: '8px 0 16px' }}>
          <span>{fmt(progress * DURATION)}</span><span>-{fmt((1 - progress) * DURATION)}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '22px' }}>
          <button onClick={() => setProgress(p => Math.max(0, p - 15 / DURATION))} style={ctrl} aria-label="Back 15 seconds"><span style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px' }}>-15</span></button>
          <button onClick={() => setPlaying(p => !p)} aria-label={playing ? 'Pause' : 'Play'} style={{ width: '52px', height: '52px', borderRadius: '50%', border: 'none', background: '#fafaf9', color: '#1c1917', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name={playing ? 'pause' : 'play'} size={20} fill="#1c1917" style={{ marginLeft: playing ? 0 : '3px' }} />
          </button>
          <button onClick={() => setProgress(p => Math.min(1, p + 30 / DURATION))} style={ctrl} aria-label="Forward 30 seconds"><span style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px' }}>+30</span></button>
        </div>
      </div>
    </div>
  );
}

const ctrl = { width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #44403c', background: 'transparent', color: '#d6d3d1', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' };

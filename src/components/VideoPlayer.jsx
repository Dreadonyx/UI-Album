import { useEffect, useState } from 'react';
import Icon from './Icon';

const DURATION = 214;
const CHAPTERS = [0, 48, 120, 176];
const fmt = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

export default function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(73);
  const [hoverX, setHoverX] = useState(null);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setTime(v => (v + 0.25 * speed >= DURATION ? 0 : v + 0.25 * speed)), 250);
    return () => clearInterval(t);
  }, [playing, speed]);

  const seek = e => {
    const r = e.currentTarget.getBoundingClientRect();
    setTime(Math.min(Math.max((e.clientX - r.left) / r.width, 0), 1) * DURATION);
  };

  return (
    <div style={{ width: '600px', height: '400px', background: '#000', position: 'relative', overflow: 'hidden', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 40%, #0e7490 0%, transparent 55%), radial-gradient(ellipse at 75% 65%, #7c2d12 0%, transparent 50%), #020617' }} />
      <div style={{ position: 'absolute', left: '50%', top: '42%', width: '180px', height: '180px', borderRadius: '50%', transform: 'translate(-50%, -50%)', background: 'radial-gradient(circle, #fde68a 0%, #f97316 40%, transparent 70%)', opacity: 0.55, filter: 'blur(4px)' }} />

      <div style={{ position: 'absolute', top: '16px', left: '18px', right: '18px', display: 'flex', justifyContent: 'space-between', color: '#fff' }}>
        <div>
          <div style={{ fontSize: '14px', fontWeight: 600 }}>Designing for Motion</div>
          <div style={{ fontSize: '11px', opacity: 0.6 }}>Chapter 2 · Easing curves</div>
        </div>
        <span style={{ alignSelf: 'flex-start', fontSize: '10px', fontWeight: 700, padding: '3px 7px', borderRadius: '5px', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}>4K</span>
      </div>

      {!playing && (
        <button onClick={() => setPlaying(true)} aria-label="Play" style={{ position: 'absolute', left: '50%', top: '45%', transform: 'translate(-50%, -50%)', width: '68px', height: '68px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(12px)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="play" size={26} fill="#fff" style={{ marginLeft: '4px' }} />
        </button>
      )}

      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '40px 18px 14px', background: 'linear-gradient(transparent, rgba(0,0,0,0.85))' }}>
        <div onClick={seek} onMouseMove={e => { const r = e.currentTarget.getBoundingClientRect(); setHoverX((e.clientX - r.left) / r.width); }} onMouseLeave={() => setHoverX(null)}
          style={{ position: 'relative', height: '14px', display: 'flex', alignItems: 'center', cursor: 'pointer', marginBottom: '8px' }}>
          {hoverX != null && (
            <span style={{ position: 'absolute', bottom: '18px', left: `${hoverX * 100}%`, transform: 'translateX(-50%)', fontSize: '10px', fontFamily: "'DM Mono', monospace", color: '#fff', padding: '3px 6px', borderRadius: '5px', background: 'rgba(0,0,0,0.8)' }}>{fmt(hoverX * DURATION)}</span>
          )}
          <div style={{ position: 'relative', width: '100%', height: hoverX != null ? '6px' : '4px', borderRadius: '3px', background: 'rgba(255,255,255,0.2)', transition: 'height 0.15s' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '62%', background: 'rgba(255,255,255,0.3)', borderRadius: '3px' }} />
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${(time / DURATION) * 100}%`, background: '#ef4444', borderRadius: '3px' }} />
            {CHAPTERS.slice(1).map(c => <span key={c} style={{ position: 'absolute', left: `${(c / DURATION) * 100}%`, width: '3px', top: 0, bottom: 0, background: '#000' }} />)}
            <span style={{ position: 'absolute', left: `${(time / DURATION) * 100}%`, top: '50%', width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444', transform: 'translate(-50%, -50%)', boxShadow: '0 0 0 3px rgba(239,68,68,0.3)' }} />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', color: '#fff' }}>
          <button onClick={() => setPlaying(p => !p)} aria-label={playing ? 'Pause' : 'Play'} style={ctrl}><Icon name={playing ? 'pause' : 'play'} size={18} fill="#fff" /></button>
          <button onClick={() => setTime(t => Math.min(DURATION, t + 10))} aria-label="Skip forward 10 seconds" style={ctrl}><Icon name="skipForward" size={17} fill="#fff" /></button>
          <Icon name="volume" size={18} />
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', opacity: 0.85 }}>{fmt(time)} / {fmt(DURATION)}</span>
          <button onClick={() => setSpeed(s => (s === 2 ? 0.5 : s + 0.5))} style={{ ...ctrl, marginLeft: 'auto', fontSize: '11px', fontWeight: 700, fontFamily: "'DM Mono', monospace", padding: '3px 7px', borderRadius: '5px', border: '1px solid rgba(255,255,255,0.3)' }}>{speed}×</button>
          <Icon name="maximize" size={17} />
        </div>
      </div>
    </div>
  );
}

const ctrl = { display: 'flex', alignItems: 'center', border: 'none', background: 'none', color: '#fff', cursor: 'pointer', padding: 0 };

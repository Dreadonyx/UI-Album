import { useState } from 'react';
import Icon from './Icon';

export default function NotFound404() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = e => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos({ x: ((e.clientX - r.left) / r.width - 0.5) * 2, y: ((e.clientY - r.top) / r.height - 0.5) * 2 });
  };

  return (
    <div onMouseMove={onMove} style={{ width: '600px', height: '400px', position: 'relative', overflow: 'hidden', background: 'radial-gradient(ellipse at 50% 30%, #1e1b4b 0%, #05040d 70%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: "'Space Grotesk', sans-serif" }}>
      {Array.from({ length: 28 }, (_, i) => (
        <span key={i} style={{ position: 'absolute', left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%`, width: i % 5 ? '2px' : '3px', height: i % 5 ? '2px' : '3px', borderRadius: '50%', background: '#fff', opacity: 0.15 + (i % 4) * 0.15, transform: `translate(${pos.x * (i % 3 + 1) * 4}px, ${pos.y * (i % 3 + 1) * 4}px)`, transition: 'transform 0.3s ease-out' }} />
      ))}
      <div style={{
        fontSize: '150px', fontWeight: 700, lineHeight: 0.9, letterSpacing: '-8px',
        background: 'linear-gradient(180deg, #e0e7ff 0%, #6366f1 60%, #312e81 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
        transform: `translate(${pos.x * -12}px, ${pos.y * -8}px)`, transition: 'transform 0.3s ease-out',
        filter: 'drop-shadow(0 10px 40px rgba(99,102,241,0.45))',
      }}>404</div>
      <div style={{ fontSize: '20px', fontWeight: 600, color: '#e0e7ff', marginTop: '14px' }}>Lost in space</div>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(224,231,255,0.5)', margin: '6px 0 22px' }}>The page you’re looking for drifted out of orbit.</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 18px', borderRadius: '10px', border: 'none', background: '#6366f1', color: '#fff', fontSize: '13px', fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer', boxShadow: '0 8px 24px rgba(99,102,241,0.4)' }}><Icon name="home" size={14} /> Back home</button>
        <button style={{ padding: '10px 18px', borderRadius: '10px', border: '1px solid rgba(224,231,255,0.15)', background: 'transparent', color: '#c7d2fe', fontSize: '13px', fontFamily: 'inherit', cursor: 'pointer' }}>Report a broken link</button>
      </div>
    </div>
  );
}

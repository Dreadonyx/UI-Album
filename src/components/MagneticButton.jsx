import { useState } from 'react';

const STRENGTH = 0.4;
const RADIUS = 110;

export default function MagneticButton() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [spot, setSpot] = useState({ x: 300, y: 200 });

  const onMove = e => {
    const r = e.currentTarget.getBoundingClientRect();
    const scale = r.width / 600;
    const x = (e.clientX - r.left) / scale;
    const y = (e.clientY - r.top) / scale;
    setSpot({ x, y });
    const dx = x - 300;
    const dy = y - 200;
    const dist = Math.hypot(dx, dy);
    setOffset(dist < RADIUS ? { x: dx * STRENGTH, y: dy * STRENGTH } : { x: 0, y: 0 });
  };

  const active = offset.x !== 0 || offset.y !== 0;

  return (
    <div onMouseMove={onMove} onMouseLeave={() => setOffset({ x: 0, y: 0 })} style={{
      width: '600px', height: '400px', position: 'relative', overflow: 'hidden', background: '#0a0a0a',
      display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Space Grotesk', sans-serif",
    }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: `radial-gradient(260px circle at ${spot.x}px ${spot.y}px, rgba(190,242,100,0.10), transparent 70%)` }} />
      <div style={{ position: 'absolute', width: `${RADIUS * 2}px`, height: `${RADIUS * 2}px`, borderRadius: '50%', border: '1px dashed rgba(190,242,100,0.15)', pointerEvents: 'none' }} />
      <button style={{
        position: 'relative', width: '130px', height: '130px', borderRadius: '50%', border: 'none', cursor: 'pointer',
        background: active ? '#bef264' : '#f5f5f5', color: '#0a0a0a', fontFamily: 'inherit', fontSize: '15px', fontWeight: 700,
        transform: `translate(${offset.x}px, ${offset.y}px) scale(${active ? 1.08 : 1})`,
        transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), background 0.3s',
        boxShadow: active ? '0 0 60px rgba(190,242,100,0.35)' : '0 10px 30px rgba(0,0,0,0.4)',
      }}>
        <span style={{ display: 'inline-block', transform: `translate(${offset.x * 0.35}px, ${offset.y * 0.35}px)`, transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1)' }}>Let’s talk ↗</span>
      </button>
      <div style={{ position: 'absolute', bottom: '24px', fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '2px', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>Move your cursor near the button</div>
    </div>
  );
}

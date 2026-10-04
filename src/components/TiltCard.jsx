import { useState } from 'react';

export default function TiltCard() {
  const [tilt, setTilt] = useState({ x: 0, y: 0, gx: 50, gy: 50, active: false });

  const onMove = e => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setTilt({ x: (0.5 - py) * 22, y: (px - 0.5) * 22, gx: px * 100, gy: py * 100, active: true });
  };

  return (
    <div style={{
      width: '600px', height: '400px', background: 'radial-gradient(circle at 50% 120%, #312e81 0%, #0c0a1d 60%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: '900px',
      fontFamily: "'Space Grotesk', sans-serif",
    }}>
      <div
        onMouseMove={onMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0, gx: 50, gy: 50, active: false })}
        style={{
          width: '240px', height: '320px', borderRadius: '20px', position: 'relative', overflow: 'hidden',
          background: 'linear-gradient(145deg, #1e1b4b, #4c1d95 55%, #be185d)',
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.active ? 1.04 : 1})`,
          transition: tilt.active ? 'transform 0.08s linear' : 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
          boxShadow: `${-tilt.y * 1.2}px ${tilt.x * 1.2 + 24}px 50px rgba(0,0,0,0.5)`,
          border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer', transformStyle: 'preserve-3d',
        }}
      >
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', mixBlendMode: 'overlay',
          background: `radial-gradient(circle at ${tilt.gx}% ${tilt.gy}%, rgba(255,255,255,0.55), transparent 55%)`,
          opacity: tilt.active ? 1 : 0.35, transition: 'opacity 0.3s',
        }} />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.25,
          background: `linear-gradient(${105 + tilt.y * 3}deg, transparent 30%, #22d3ee 45%, #f0abfc 55%, transparent 70%)`,
          mixBlendMode: 'color-dodge',
        }} />
        <div style={{ position: 'relative', height: '100%', padding: '22px', display: 'flex', flexDirection: 'column', transform: 'translateZ(40px)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', letterSpacing: '2px', color: 'rgba(255,255,255,0.6)' }}>
            <span>HOLO · 07</span><span>★ RARE</span>
          </div>
          <div style={{
            margin: '28px auto 0', width: '110px', height: '110px', borderRadius: '50%',
            background: 'conic-gradient(from 0deg, #22d3ee, #a855f7, #f472b6, #facc15, #22d3ee)',
            boxShadow: '0 0 50px rgba(168,85,247,0.6)', filter: 'saturate(1.2)',
          }} />
          <div style={{ marginTop: 'auto' }}>
            <div style={{ fontSize: '24px', fontWeight: 700, color: '#fff', letterSpacing: '-0.5px' }}>Prism Core</div>
            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)', marginTop: '4px' }}>Hover to tilt · parallax depth</div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';

export default function NeonNavbar() {
  const [active, setActive] = useState(1);
  const links = ['Home', 'Projects', 'About', 'Contact'];
  return (
    <div style={{
      width: '600px', height: '400px',
      background: 'linear-gradient(180deg, #0a0a1a 0%, #0d0f1a 100%)',
      display: 'flex', flexDirection: 'column',
      fontFamily: "'DM Mono', monospace",
    }}>
      <nav style={{
        width: '100%', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '20px 32px',
        borderBottom: '1px solid rgba(0,255,136,0.08)',
        background: 'rgba(0,0,0,0.3)',
      }}>
        <div style={{
          fontSize: '18px', fontWeight: 700,
          fontFamily: "'Playfair Display', serif",
          color: '#00ff88',
          textShadow: '0 0 20px rgba(0,255,136,0.5)',
        }}>◈ NEON</div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {links.map((l, i) => (
            <button key={l} onClick={e => { e.stopPropagation(); setActive(i); }} style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '12px', padding: '8px 18px',
              background: active === i ? 'rgba(0,255,136,0.12)' : 'transparent',
              border: active === i ? '1px solid rgba(0,255,136,0.4)' : '1px solid transparent',
              borderRadius: '6px', color: active === i ? '#00ff88' : 'rgba(255,255,255,0.4)',
              cursor: 'pointer', transition: 'all 0.3s ease',
              boxShadow: active === i ? '0 0 15px rgba(0,255,136,0.15)' : 'none',
              position: 'relative',
            }}>
              {l}
              {active === i && <div style={{
                position: 'absolute', bottom: '-1px', left: '20%', right: '20%',
                height: '2px', background: '#00ff88',
                boxShadow: '0 0 10px #00ff88, 0 0 20px rgba(0,255,136,0.3)',
                borderRadius: '2px',
              }} />}
            </button>
          ))}
        </div>
        <div style={{
          width: '36px', height: '36px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #00ff88 0%, #00aa55 100%)',
          boxShadow: '0 0 15px rgba(0,255,136,0.3)',
        }} />
      </nav>
      <div style={{
        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', gap: '12px',
      }}>
        <div style={{
          fontSize: '32px', fontFamily: "'Playfair Display', serif",
          fontWeight: 700, color: '#f0eef5',
        }}>{links[active]}</div>
        <div style={{
          width: '60px', height: '3px', background: '#00ff88',
          borderRadius: '3px', boxShadow: '0 0 12px #00ff88',
        }} />
        <div style={{
          fontSize: '11px', color: 'rgba(255,255,255,0.25)',
          letterSpacing: '3px', textTransform: 'uppercase',
        }}>Active Section</div>
      </div>
    </div>
  );
}

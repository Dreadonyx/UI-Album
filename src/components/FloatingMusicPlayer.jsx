import { useState } from 'react';

export default function FloatingMusicPlayer() {
  const [playing, setPlaying] = useState(false);
  
  return (
    <div style={{
      width: '600px', height: '400px',
      background: 'linear-gradient(45deg, #0f172a, #1e293b)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{
        width: '320px', background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(30px)', border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '32px', padding: '24px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
        display: 'flex', alignItems: 'center', gap: '20px',
      }}>
        <div style={{
          width: '80px', height: '80px', borderRadius: '16px',
          background: 'linear-gradient(135deg, #f472b6, #8b5cf6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 10px 20px rgba(139, 92, 246, 0.3)',
          animation: playing ? 'spinVinyl 8s linear infinite' : 'none',
        }}>
          <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.5)' }} />
        </div>
        
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', color: '#f0eef5', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>Midnight City</div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>M83 — Hurry Up, We're Dreaming</div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '14px' }}>
            <span style={{ cursor: 'pointer', opacity: 0.6 }}>⏮</span>
            <span 
              onClick={() => setPlaying(!playing)}
              style={{ cursor: 'pointer', fontSize: '24px', color: '#f472b6' }}
            >
              {playing ? '⏸' : '▶'}
            </span>
            <span style={{ cursor: 'pointer', opacity: 0.6 }}>⏭</span>
          </div>
        </div>
      </div>
    </div>
  );
}

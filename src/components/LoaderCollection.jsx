export default function LoaderCollection() {
  return (
    <div style={{ width: '600px', height: '400px', background: '#0f0d1a', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', fontFamily: "'DM Mono', monospace" }}>
      <style>{`
        @keyframes uaLSpin { to { transform: rotate(360deg); } }
        @keyframes uaLBounce { 0%, 80%, 100% { transform: scale(0.4); opacity: 0.4; } 40% { transform: scale(1); opacity: 1; } }
        @keyframes uaLBars { 0%, 100% { transform: scaleY(0.35); } 50% { transform: scaleY(1); } }
        @keyframes uaLPulse { 0% { transform: scale(0.6); opacity: 0.9; } 100% { transform: scale(2.2); opacity: 0; } }
        @keyframes uaLOrbit { to { transform: rotate(360deg); } }
        @keyframes uaLProgress { 0% { left: -40%; } 100% { left: 100%; } }
        .ua-loader-cell { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; border-right: 1px solid rgba(255,255,255,0.04); border-bottom: 1px solid rgba(255,255,255,0.04); }
        .ua-loader-label { font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,0.3); }
      `}</style>

      <div className="ua-loader-cell">
        <div role="progressbar" aria-label="Loading" style={{ width: '44px', height: '44px', borderRadius: '50%', border: '4px solid rgba(167,139,250,0.15)', borderTopColor: '#a78bfa', animation: 'uaLSpin 0.8s linear infinite' }} />
        <span className="ua-loader-label">Ring</span>
      </div>

      <div className="ua-loader-cell">
        <div style={{ display: 'flex', gap: '8px' }}>
          {[0, 1, 2].map(i => <span key={i} style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f472b6', animation: `uaLBounce 1.2s ${i * 0.16}s infinite ease-in-out both` }} />)}
        </div>
        <span className="ua-loader-label">Dots</span>
      </div>

      <div className="ua-loader-cell">
        <div style={{ display: 'flex', gap: '5px', height: '40px', alignItems: 'center' }}>
          {[0, 1, 2, 3, 4].map(i => <span key={i} style={{ width: '6px', height: '40px', borderRadius: '3px', background: '#22d3ee', animation: `uaLBars 1s ${i * 0.1}s infinite ease-in-out` }} />)}
        </div>
        <span className="ua-loader-label">Equalizer</span>
      </div>

      <div className="ua-loader-cell">
        <div style={{ position: 'relative', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {[0, 1].map(i => <span key={i} style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '2px solid #34d399', animation: `uaLPulse 1.6s ${i * 0.8}s infinite ease-out` }} />)}
          <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#34d399' }} />
        </div>
        <span className="ua-loader-label">Pulse</span>
      </div>

      <div className="ua-loader-cell">
        <div style={{ position: 'relative', width: '48px', height: '48px', animation: 'uaLOrbit 1.6s linear infinite' }}>
          {[0, 1, 2, 3].map(i => (
            <span key={i} style={{ position: 'absolute', width: '12px', height: '12px', borderRadius: '3px', background: ['#fbbf24', '#f472b6', '#a78bfa', '#22d3ee'][i], top: i < 2 ? 0 : 'auto', bottom: i >= 2 ? 0 : 'auto', left: i % 2 === 0 ? 0 : 'auto', right: i % 2 === 1 ? 0 : 'auto' }} />
          ))}
        </div>
        <span className="ua-loader-label">Orbit</span>
      </div>

      <div className="ua-loader-cell">
        <div style={{ position: 'relative', width: '120px', height: '4px', borderRadius: '4px', background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
          <span style={{ position: 'absolute', top: 0, height: '100%', width: '40%', borderRadius: '4px', background: 'linear-gradient(90deg, transparent, #fbbf24)', animation: 'uaLProgress 1.2s infinite ease-in-out' }} />
        </div>
        <span className="ua-loader-label">Indeterminate</span>
      </div>
    </div>
  );
}

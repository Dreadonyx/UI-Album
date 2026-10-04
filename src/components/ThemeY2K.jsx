import useFocusSession from './useFocusSession';

const CHROME = 'linear-gradient(180deg, #ffffff 0%, #c9d1dc 35%, #7d8897 50%, #e8edf3 65%, #9aa4b3 100%)';

export default function ThemeY2K() {
  const { progress, running, toggleRunning, dnd, toggleDnd } = useFocusSession();

  return (
    <div style={{ width: '600px', height: '400px', position: 'relative', overflow: 'hidden', background: 'radial-gradient(circle at 20% 20%, #ffc6f1 0%, transparent 40%), radial-gradient(circle at 80% 80%, #a6e3ff 0%, transparent 45%), #e9e4ff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '34px', fontFamily: "'Syne', 'Inter', sans-serif", color: '#2b1b5a' }}>
      <style>{`@keyframes uaTwinkle { 0%,100% { transform: scale(0.6) rotate(0deg); opacity: 0.5; } 50% { transform: scale(1.1) rotate(45deg); opacity: 1; } }`}</style>
      {[[40, 60, 0], [540, 50, 0.6], [520, 330, 1.1], [80, 340, 0.3], [300, 30, 0.9]].map(([x, y, d], i) => (
        <span key={i} style={{ position: 'absolute', left: x, top: y, fontSize: '22px', color: '#fff', textShadow: '0 0 10px #ff8bd8', animation: `uaTwinkle 2.4s ${d}s infinite` }}>✦</span>
      ))}

      <div style={{ position: 'relative', width: '280px', padding: '3px', borderRadius: '30px', background: 'linear-gradient(135deg, #ff9ce6, #9be7ff, #c3a6ff, #ff9ce6)' }}>
        <div style={{ borderRadius: '27px', padding: '20px', background: 'linear-gradient(180deg, rgba(255,255,255,0.92), rgba(240,236,255,0.92))' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, fontStyle: 'italic', background: CHROME, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', WebkitTextStroke: '1px #6b6f8a' }}>Deep Work</div>
            <span style={{ fontSize: '10px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px', background: 'linear-gradient(90deg, #ff6ad5, #8c6bff)', color: '#fff' }}>★ FOCUS</span>
          </div>
          <div style={{ fontSize: '52px', fontWeight: 800, lineHeight: 1, letterSpacing: '-2px', background: 'linear-gradient(90deg, #ff6ad5, #8c6bff, #3fd0ff)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{progress}%</div>
          <div style={{ height: '16px', borderRadius: '16px', background: '#e3e0f5', boxShadow: 'inset 0 2px 4px rgba(43,27,90,0.2)', margin: '10px 0 16px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${progress}%`, borderRadius: '16px', background: 'linear-gradient(180deg, #b8f0ff 0%, #3fd0ff 50%, #1aa7e0 51%, #7fe2ff 100%)', transition: 'width 0.4s' }} />
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button role="switch" aria-checked={dnd} aria-label="Do not disturb" onClick={toggleDnd} style={{ width: '56px', height: '48px', borderRadius: '24px', border: '1px solid #9aa4b3', background: dnd ? 'linear-gradient(180deg, #ffd1f3, #ff6ad5)' : CHROME, cursor: 'pointer', fontSize: '18px', boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.8), 0 4px 10px rgba(43,27,90,0.2)' }}>{dnd ? '☾' : '☀'}</button>
            <button onClick={toggleRunning} style={{ flex: 1, height: '48px', borderRadius: '24px', border: '1px solid #6b6f8a', background: running ? 'linear-gradient(180deg, #ffd1f3, #ff6ad5)' : CHROME, cursor: 'pointer', fontFamily: 'inherit', fontSize: '15px', fontWeight: 800, fontStyle: 'italic', color: '#2b1b5a', boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.9), 0 6px 14px rgba(43,27,90,0.25)' }}>
              {running ? 'pause ♥' : 'start session ✧'}
            </button>
          </div>
        </div>
      </div>

      <div style={{ position: 'relative', width: '160px' }}>
        <div style={{ fontSize: '46px', fontWeight: 800, fontStyle: 'italic', lineHeight: 1, background: CHROME, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', WebkitTextStroke: '1.5px #4a4e6a' }}>Y2K</div>
        <p style={{ fontSize: '12px', lineHeight: 1.5, marginTop: '8px', fontFamily: "'Inter', sans-serif" }}>Millennium optimism: liquid chrome, iridescent gradients, bubbly pills, sparkles and cyber pastels.</p>
      </div>
    </div>
  );
}

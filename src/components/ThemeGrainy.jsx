import useFocusSession from './useFocusSession';

const NOISE = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function ThemeGrainy() {
  const { progress, running, toggleRunning, dnd, toggleDnd } = useFocusSession();

  return (
    <div style={{ width: '600px', height: '400px', position: 'relative', overflow: 'hidden', background: 'radial-gradient(circle at 15% 20%, #ffb36b, transparent 50%), radial-gradient(circle at 85% 80%, #ff5e8a, transparent 55%), linear-gradient(135deg, #ff8a5c, #c2457a)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '34px', fontFamily: "'Fraunces', serif", color: '#2a0f1c' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: NOISE, opacity: 0.45, mixBlendMode: 'overlay', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', width: '270px', padding: '24px', borderRadius: '24px', overflow: 'hidden', background: 'linear-gradient(160deg, #fff1e6, #ffd8c7)', boxShadow: '0 20px 40px rgba(80,10,40,0.3)' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: NOISE, opacity: 0.35, mixBlendMode: 'multiply', pointerEvents: 'none' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px', color: '#a0405f' }}>DAILY FOCUS</div>
          <div style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-0.5px', marginBottom: '6px' }}>Deep Work</div>
          <div style={{ fontSize: '56px', fontWeight: 300, fontStyle: 'italic', lineHeight: 1, marginBottom: '12px' }}>{progress}%</div>
          <div style={{ height: '10px', borderRadius: '10px', background: 'rgba(42,15,28,0.12)', marginBottom: '16px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${progress}%`, borderRadius: '10px', background: `${NOISE}, linear-gradient(90deg, #ff8a5c, #c2457a)`, backgroundBlendMode: 'overlay', transition: 'width 0.4s' }} />
          </div>
          <button role="switch" aria-checked={dnd} onClick={toggleDnd} style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', marginBottom: '12px', borderRadius: '14px', border: '1px solid rgba(42,15,28,0.15)', background: 'rgba(255,255,255,0.45)', cursor: 'pointer', fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#2a0f1c' }}>
            Do not disturb <b>{dnd ? 'On' : 'Off'}</b>
          </button>
          <button onClick={toggleRunning} style={{ width: '100%', height: '46px', borderRadius: '14px', border: 'none', cursor: 'pointer', fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, color: '#fff1e6', background: `${NOISE}, ${running ? '#c2457a' : '#2a0f1c'}`, backgroundBlendMode: 'overlay' }}>
            {running ? 'Pause session' : 'Start session'}
          </button>
        </div>
      </div>

      <div style={{ position: 'relative', width: '170px', color: '#fff1e6' }}>
        <div style={{ fontSize: '32px', fontWeight: 600, fontStyle: 'italic', lineHeight: 1 }}>Grainy</div>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', lineHeight: 1.6, marginTop: '8px' }}>Film-grain noise layered over soft gradients with blend modes. Tactile, analog and warm.</p>
      </div>
    </div>
  );
}

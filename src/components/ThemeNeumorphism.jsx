import useFocusSession from './useFocusSession';

const BG = '#e0e5ec';
const RAISED = '9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff';
const RAISED_SM = '5px 5px 10px #a3b1c6, -5px -5px 10px #ffffff';
const INSET = 'inset 5px 5px 10px #a3b1c6, inset -5px -5px 10px #ffffff';
const INK = '#44476a';
const ACCENT = '#6d5dfc';

export default function ThemeNeumorphism() {
  const { progress, running, toggleRunning, dnd, toggleDnd } = useFocusSession();

  return (
    <div style={{ width: '600px', height: '400px', background: BG, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '44px', fontFamily: "'Inter', sans-serif", color: INK }}>
      <div style={{ width: '270px', padding: '26px', borderRadius: '28px', background: BG, boxShadow: RAISED }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '1px', opacity: 0.6 }}>DAILY FOCUS</div>
            <div style={{ fontSize: '20px', fontWeight: 700 }}>Deep Work</div>
          </div>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', boxShadow: INSET, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 700, color: ACCENT }}>{progress}%</div>
        </div>

        <div style={{ height: '12px', borderRadius: '12px', boxShadow: INSET, padding: '3px', marginBottom: '22px' }}>
          <div style={{ height: '100%', width: `${progress}%`, borderRadius: '10px', background: `linear-gradient(90deg, #8f84ff, ${ACCENT})`, transition: 'width 0.4s' }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px' }}>
          <span style={{ fontSize: '13px', fontWeight: 500 }}>Do not disturb</span>
          <button role="switch" aria-checked={dnd} aria-label="Do not disturb" onClick={toggleDnd} style={{ width: '56px', height: '30px', borderRadius: '30px', border: 'none', background: BG, boxShadow: INSET, padding: '4px', cursor: 'pointer' }}>
            <span style={{ display: 'block', width: '22px', height: '22px', borderRadius: '50%', background: dnd ? ACCENT : BG, boxShadow: dnd ? '2px 2px 5px #a3b1c6' : RAISED_SM, transform: `translateX(${dnd ? 26 : 0}px)`, transition: 'all 0.3s ease' }} />
          </button>
        </div>

        <button onClick={toggleRunning} style={{ width: '100%', height: '48px', borderRadius: '16px', border: 'none', background: BG, boxShadow: running ? INSET : RAISED_SM, color: running ? ACCENT : INK, fontFamily: 'inherit', fontSize: '14px', fontWeight: 700, cursor: 'pointer', transition: 'box-shadow 0.2s, color 0.2s' }}>
          {running ? '❚❚  Pause session' : '▶  Start session'}
        </button>
      </div>

      <div style={{ width: '170px' }}>
        <div style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-1px', textShadow: '2px 2px 4px #a3b1c6, -2px -2px 4px #ffffff', color: INK }}>Neumorphism</div>
        <p style={{ fontSize: '12px', lineHeight: 1.6, marginTop: '8px', opacity: 0.7 }}>Soft UI. Elements are extruded from or pressed into the same surface using paired light and dark shadows.</p>
      </div>
    </div>
  );
}

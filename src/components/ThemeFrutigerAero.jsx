import useFocusSession from './useFocusSession';

const AQUA = 'linear-gradient(180deg, #c9f1ff 0%, #5ccbf5 48%, #1a9fe0 52%, #6fd6ff 100%)';
const GRASS = 'linear-gradient(180deg, #d4ff9e 0%, #7fd63b 48%, #4cad13 52%, #9fe85c 100%)';

export default function ThemeFrutigerAero() {
  const { progress, running, toggleRunning, dnd, toggleDnd } = useFocusSession();

  return (
    <div style={{ width: '600px', height: '400px', position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #4fb6ff 0%, #b8e6ff 60%, #e9fbff 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '30px', fontFamily: "'Inter', 'Segoe UI', sans-serif", color: '#06385c' }}>
      <style>{`@keyframes uaBubble { from { transform: translateY(0); } to { transform: translateY(-460px); } }`}</style>
      <div style={{ position: 'absolute', left: '-10%', right: '-10%', bottom: '-140px', height: '220px', borderRadius: '50%', background: 'radial-gradient(ellipse at 50% 0%, #a6ef5a, #3f9e18)' }} />
      {[[60, 0, 26], [150, 2, 16], [470, 1, 30], [540, 3, 18], [330, 4, 14]].map(([x, d, s], i) => (
        <span key={i} style={{ position: 'absolute', left: x, bottom: '-40px', width: s, height: s, borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #fff, rgba(255,255,255,0.15) 60%)', border: '1px solid rgba(255,255,255,0.8)', animation: `uaBubble ${8 + i}s ${d}s linear infinite` }} />
      ))}

      <div style={{ position: 'relative', width: '280px', padding: '18px', borderRadius: '18px', background: 'linear-gradient(180deg, rgba(255,255,255,0.85), rgba(225,245,255,0.7))', border: '1px solid #fff', boxShadow: '0 10px 30px rgba(6,56,92,0.25), inset 0 1px 0 #fff' }}>
        <div style={{ position: 'absolute', inset: '1px 1px 50% 1px', borderRadius: '17px 17px 40% 40% / 17px 17px 20px 20px', background: 'linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0))', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: GRASS, border: '1px solid #3f8f12', boxShadow: 'inset 0 1px 0 #fff, 0 3px 6px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '20px', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>✓</div>
          <div>
            <div style={{ fontSize: '11px', color: '#2b7bb0' }}>Daily focus</div>
            <div style={{ fontSize: '20px', fontWeight: 600 }}>Deep Work</div>
          </div>
        </div>
        <div style={{ position: 'relative', height: '18px', borderRadius: '9px', background: 'linear-gradient(180deg, #d6e4ec, #f5fafc)', border: '1px solid #8fb4c9', overflow: 'hidden', marginBottom: '6px' }}>
          <div style={{ height: '100%', width: `${progress}%`, background: AQUA, transition: 'width 0.4s' }} />
        </div>
        <div style={{ position: 'relative', fontSize: '12px', marginBottom: '14px' }}>{progress}% of today’s goal</div>
        <label style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', marginBottom: '14px', cursor: 'pointer' }}>
          <input type="checkbox" checked={dnd} onChange={toggleDnd} style={{ width: '16px', height: '16px', accentColor: '#1a9fe0' }} />
          Do not disturb
        </label>
        <button onClick={toggleRunning} style={{ position: 'relative', width: '100%', height: '42px', borderRadius: '21px', border: `1px solid ${running ? '#3f8f12' : '#0f6fa8'}`, background: running ? GRASS : AQUA, color: '#fff', cursor: 'pointer', fontFamily: 'inherit', fontSize: '15px', fontWeight: 600, textShadow: '0 1px 2px rgba(0,0,0,0.35)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8), 0 4px 10px rgba(6,56,92,0.3)' }}>
          {running ? 'Pause session' : 'Start session'}
        </button>
      </div>

      <div style={{ position: 'relative', width: '170px' }}>
        <div style={{ fontSize: '28px', fontWeight: 600, color: '#fff', textShadow: '0 2px 6px rgba(6,56,92,0.5)' }}>Frutiger Aero</div>
        <p style={{ fontSize: '12px', lineHeight: 1.5, marginTop: '6px' }}>Mid-2000s optimism: glossy aqua buttons, sky gradients, bubbles and fresh green nature.</p>
      </div>
    </div>
  );
}

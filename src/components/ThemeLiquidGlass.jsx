import useFocusSession from './useFocusSession';

// Specular rim: bright top-left edge, darker bottom-right, like light bending through a lens.
const liquid = {
  background: 'rgba(255,255,255,0.08)',
  backdropFilter: 'blur(8px) saturate(180%) brightness(1.08)',
  WebkitBackdropFilter: 'blur(8px) saturate(180%) brightness(1.08)',
  boxShadow: 'inset 1.5px 1.5px 0 rgba(255,255,255,0.75), inset -1px -1px 0 rgba(255,255,255,0.25), inset 0 0 22px rgba(255,255,255,0.18), 0 12px 32px rgba(0,0,0,0.25)',
  border: '1px solid rgba(255,255,255,0.18)',
};

export default function ThemeLiquidGlass() {
  const { progress, running, toggleRunning, dnd, toggleDnd } = useFocusSession();

  return (
    <div style={{
      width: '600px', height: '400px', position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '34px',
      fontFamily: "'Inter', -apple-system, sans-serif", color: '#fff',
      background: 'radial-gradient(circle at 20% 30%, #ff9f43 0 14%, transparent 30%), radial-gradient(circle at 75% 25%, #ee5a24 0 10%, transparent 26%), radial-gradient(circle at 60% 80%, #0abde3 0 16%, transparent 34%), radial-gradient(circle at 15% 85%, #5f27cd 0 14%, transparent 32%), linear-gradient(135deg, #222f3e, #576574)',
    }}>
      <div style={{ position: 'relative', width: '270px', padding: '20px', borderRadius: '34px', ...liquid }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 500, opacity: 0.8 }}>Focus</div>
            <div style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.5px' }}>Deep Work</div>
          </div>
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', fontWeight: 700, ...liquid }}>{progress}%</div>
        </div>

        <div style={{ height: '10px', borderRadius: '10px', marginBottom: '16px', ...liquid, boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.3)' }}>
          <div style={{ height: '100%', width: `${progress}%`, borderRadius: '10px', background: 'linear-gradient(90deg, rgba(255,255,255,0.7), #fff)', transition: 'width 0.4s' }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderRadius: '22px', marginBottom: '12px', ...liquid }}>
          <span style={{ fontSize: '14px', fontWeight: 500 }}>Do Not Disturb</span>
          <button role="switch" aria-checked={dnd} aria-label="Do not disturb" onClick={toggleDnd} style={{ position: 'relative', width: '62px', height: '28px', borderRadius: '28px', border: 'none', padding: 0, cursor: 'pointer', background: dnd ? '#34c759' : 'rgba(255,255,255,0.22)', transition: 'background 0.25s' }}>
            <span style={{ position: 'absolute', top: '2px', left: dnd ? '24px' : '2px', width: '36px', height: '24px', borderRadius: '24px', background: 'rgba(255,255,255,0.95)', boxShadow: '0 2px 6px rgba(0,0,0,0.25), inset 0 1px 0 #fff', transition: 'left 0.3s cubic-bezier(0.34,1.56,0.64,1)' }} />
          </button>
        </div>

        <button onClick={toggleRunning} style={{ width: '100%', height: '46px', borderRadius: '23px', cursor: 'pointer', fontFamily: 'inherit', fontSize: '15px', fontWeight: 600, color: '#fff', ...liquid, background: running ? 'rgba(255,69,58,0.45)' : 'rgba(10,132,255,0.45)', transition: 'background 0.25s' }}>
          {running ? 'Pause Session' : 'Start Session'}
        </button>
      </div>

      <div style={{ position: 'relative', width: '170px', padding: '16px', borderRadius: '26px', ...liquid }}>
        <div style={{ fontSize: '26px', fontWeight: 700, letterSpacing: '-0.5px' }}>Liquid Glass</div>
        <p style={{ fontSize: '12px', lineHeight: 1.5, marginTop: '6px', opacity: 0.9 }}>Apple’s 2025 material: barely-tinted lenses with specular rims, light blur and capsule controls.</p>
      </div>
    </div>
  );
}

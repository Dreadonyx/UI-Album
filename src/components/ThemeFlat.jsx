import useFocusSession from './useFocusSession';

export default function ThemeFlat() {
  const { progress, running, toggleRunning, dnd, toggleDnd } = useFocusSession();

  return (
    <div style={{ width: '600px', height: '400px', background: '#3498db', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ width: '280px', background: '#ecf0f1', borderRadius: '6px', overflow: 'hidden' }}>
        <div style={{ background: '#2c3e50', color: '#fff', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#e67e22', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>✓</div>
          <div>
            <div style={{ fontSize: '11px', color: '#95a5a6', fontWeight: 600, textTransform: 'uppercase' }}>Daily focus</div>
            <div style={{ fontSize: '18px', fontWeight: 700 }}>Deep Work</div>
          </div>
        </div>
        <div style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '34px', fontWeight: 800, color: '#2c3e50' }}>{progress}%</span>
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#7f8c8d' }}>of today’s goal</span>
          </div>
          <div style={{ height: '10px', background: '#bdc3c7', marginBottom: '18px' }}>
            <div style={{ height: '100%', width: `${progress}%`, background: '#2ecc71', transition: 'width 0.4s' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#2c3e50' }}>Do not disturb</span>
            <button role="switch" aria-checked={dnd} aria-label="Do not disturb" onClick={toggleDnd} style={{ width: '50px', height: '26px', border: 'none', borderRadius: '13px', background: dnd ? '#2ecc71' : '#bdc3c7', padding: '3px', cursor: 'pointer', transition: 'background 0.2s' }}>
              <span style={{ display: 'block', width: '20px', height: '20px', borderRadius: '50%', background: '#fff', transform: `translateX(${dnd ? 24 : 0}px)`, transition: 'transform 0.2s' }} />
            </button>
          </div>
          <button onClick={toggleRunning} style={{ width: '100%', height: '46px', border: 'none', borderRadius: '4px', background: running ? '#e74c3c' : '#e67e22', color: '#fff', fontFamily: 'inherit', fontSize: '15px', fontWeight: 700, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1px', transition: 'background 0.2s' }}>
            {running ? 'Pause session' : 'Start session'}
          </button>
        </div>
      </div>

      <div style={{ width: '170px', color: '#fff' }}>
        <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
          {['#1abc9c', '#2ecc71', '#e67e22', '#e74c3c', '#9b59b6'].map(c => <span key={c} style={{ width: '22px', height: '22px', background: c }} />)}
        </div>
        <div style={{ fontSize: '30px', fontWeight: 800 }}>Flat Design</div>
        <p style={{ fontSize: '12px', lineHeight: 1.6, marginTop: '8px', color: '#d6eaf8' }}>No gradients, no shadows, no textures. Solid color blocks, simple icons and bold type.</p>
      </div>
    </div>
  );
}

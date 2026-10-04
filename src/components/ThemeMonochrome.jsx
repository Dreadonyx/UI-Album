import useFocusSession from './useFocusSession';

export default function ThemeMonochrome() {
  const { progress, running, toggleRunning, dnd, toggleDnd } = useFocusSession();

  return (
    <div style={{ width: '600px', height: '400px', background: '#ffffff', display: 'grid', gridTemplateColumns: '1fr 1fr', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ background: '#000', color: '#fff', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#888' }}>
          <span>DEEP_WORK</span><span>{running ? '● REC' : '○ IDLE'}</span>
        </div>
        <div>
          <div style={{ fontSize: '96px', fontWeight: 800, lineHeight: 0.85, letterSpacing: '-5px' }}>{progress}<span style={{ color: '#555' }}>%</span></div>
          <div style={{ display: 'flex', gap: '3px', marginTop: '18px' }}>
            {Array.from({ length: 20 }, (_, i) => <span key={i} style={{ flex: 1, height: '18px', background: i < progress / 5 ? '#fff' : '#222' }} />)}
          </div>
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#888' }}>OF TODAY’S GOAL</div>
      </div>

      <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', color: '#000' }}>
        <div style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-1px', lineHeight: 1 }}>Mono&shy;chrome</div>
        <p style={{ fontSize: '12px', lineHeight: 1.6, color: '#555', margin: '10px 0 auto' }}>Black, white and grays only. Hierarchy comes from scale, weight and inversion instead of hue.</p>
        <button role="switch" aria-checked={dnd} onClick={toggleDnd} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', marginBottom: '14px', border: 'none', borderTop: '1px solid #000', borderBottom: '1px solid #000', background: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '13px', fontWeight: 600 }}>
          Do not disturb
          <span style={{ display: 'flex', border: '1px solid #000', fontFamily: "'JetBrains Mono', monospace", fontSize: '10px' }}>
            <span style={{ padding: '3px 7px', background: dnd ? '#000' : '#fff', color: dnd ? '#fff' : '#000' }}>ON</span>
            <span style={{ padding: '3px 7px', background: dnd ? '#fff' : '#000', color: dnd ? '#000' : '#fff' }}>OFF</span>
          </span>
        </button>
        <button onClick={toggleRunning} style={{ height: '48px', border: '2px solid #000', background: running ? '#fff' : '#000', color: running ? '#000' : '#fff', cursor: 'pointer', fontFamily: 'inherit', fontSize: '14px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', transition: 'background 0.15s, color 0.15s' }}>
          {running ? 'Pause session' : 'Start session'}
        </button>
      </div>
    </div>
  );
}

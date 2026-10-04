import useFocusSession from './useFocusSession';

const RED = '#e30613';

export default function ThemeSwiss() {
  const { progress, running, toggleRunning, dnd, toggleDnd } = useFocusSession();

  return (
    <div style={{ width: '600px', height: '400px', background: '#f2f0eb', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridTemplateRows: '1fr 1fr 1fr', fontFamily: "'Inter', sans-serif", color: '#111', position: 'relative' }}>
      <div style={{ gridColumn: '1 / 3', gridRow: '1 / 4', background: RED, color: '#fff', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ fontSize: '12px', fontWeight: 700, lineHeight: 1.3 }}>Deep Work<br />Daily Focus<br />Nr. 04</div>
        <div style={{ fontSize: '150px', fontWeight: 800, lineHeight: 0.8, letterSpacing: '-10px', marginLeft: '-6px' }}>{progress}</div>
        <div style={{ height: '6px', background: 'rgba(255,255,255,0.3)' }}>
          <div style={{ height: '100%', width: `${progress}%`, background: '#fff', transition: 'width 0.4s' }} />
        </div>
      </div>

      <div style={{ gridColumn: '3 / 5', gridRow: '1 / 2', padding: '24px 24px 0', borderBottom: '2px solid #111' }}>
        <div style={{ fontSize: '34px', fontWeight: 800, letterSpacing: '-1.5px', lineHeight: 0.95 }}>Swiss<br />Style</div>
      </div>

      <button role="switch" aria-checked={dnd} onClick={toggleDnd} style={{ gridColumn: '3 / 5', gridRow: '2 / 3', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '0 24px 14px', border: 'none', borderBottom: '2px solid #111', background: 'none', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left' }}>
        <span style={{ fontSize: '13px', fontWeight: 700 }}>Do not disturb</span>
        <span style={{ fontSize: '30px', fontWeight: 800, color: dnd ? RED : '#bbb', letterSpacing: '-1px' }}>{dnd ? 'On' : 'Off'}</span>
      </button>

      <div style={{ gridColumn: '3 / 5', gridRow: '3 / 4', padding: '14px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <p style={{ fontSize: '10px', lineHeight: 1.45, fontWeight: 500, maxWidth: '200px' }}>International Typographic Style: a strict grid, flush-left sans-serif type, asymmetric layout and one signal color.</p>
        <button onClick={toggleRunning} style={{ alignSelf: 'flex-start', padding: '10px 18px', border: 'none', background: '#111', color: '#fff', fontFamily: 'inherit', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}>
          {running ? 'Pause →' : 'Start →'}
        </button>
      </div>
    </div>
  );
}

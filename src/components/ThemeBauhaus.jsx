import useFocusSession from './useFocusSession';

const RED = '#d62828';
const BLUE = '#1d3a8a';
const YELLOW = '#f6bd16';

export default function ThemeBauhaus() {
  const { progress, running, toggleRunning, dnd, toggleDnd } = useFocusSession();

  return (
    <div style={{ width: '600px', height: '400px', background: '#efe6d2', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '30px', fontFamily: "'Syne', 'Space Grotesk', sans-serif", color: '#111' }}>
      <div style={{ position: 'absolute', width: '180px', height: '180px', borderRadius: '50%', background: YELLOW, left: '-50px', top: '-50px' }} />
      <div style={{ position: 'absolute', width: 0, height: 0, borderLeft: '90px solid transparent', borderRight: '90px solid transparent', borderBottom: `150px solid ${BLUE}`, right: '-20px', bottom: '-30px' }} />

      <div style={{ position: 'relative', width: '290px', background: '#fff', border: '4px solid #111' }}>
        <div style={{ display: 'flex', borderBottom: '4px solid #111' }}>
          <div style={{ flex: 1, padding: '12px 14px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px' }}>DAILY FOCUS</div>
            <div style={{ fontSize: '24px', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1 }}>Deep Work</div>
          </div>
          <div style={{ width: '74px', background: RED, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', fontWeight: 800, borderLeft: '4px solid #111' }}>{progress}</div>
        </div>
        <div style={{ display: 'flex', height: '26px', borderBottom: '4px solid #111' }}>
          <div style={{ width: `${progress}%`, background: BLUE, transition: 'width 0.4s' }} />
          <div style={{ flex: 1, background: YELLOW, borderLeft: '4px solid #111' }} />
        </div>
        <button role="switch" aria-checked={dnd} onClick={toggleDnd} style={{ display: 'flex', width: '100%', alignItems: 'center', gap: '12px', padding: '12px 14px', border: 'none', borderBottom: '4px solid #111', background: '#fff', cursor: 'pointer', fontFamily: 'inherit', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase' }}>
          <span style={{ width: '24px', height: '24px', borderRadius: dnd ? '50%' : 0, background: dnd ? RED : '#111', transition: 'border-radius 0.3s, background 0.3s' }} />
          Do not disturb · {dnd ? 'On' : 'Off'}
        </button>
        <button onClick={toggleRunning} style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', padding: '14px', border: 'none', background: running ? RED : YELLOW, cursor: 'pointer', fontFamily: 'inherit', fontSize: '16px', fontWeight: 800, textTransform: 'uppercase', color: '#111', transition: 'background 0.2s' }}>
          {running ? 'Pause' : 'Start'} session
          <span style={{ width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '16px solid #111' }} />
        </button>
      </div>

      <div style={{ position: 'relative', width: '150px' }}>
        <div style={{ fontSize: '34px', fontWeight: 800, textTransform: 'uppercase', lineHeight: 0.9 }}>Bau<br /><span style={{ color: RED }}>haus</span></div>
        <p style={{ fontSize: '11px', lineHeight: 1.5, marginTop: '10px', fontFamily: "'Inter', sans-serif" }}>Form follows function. Primary colors, pure geometry, heavy rules and uppercase sans-serif.</p>
      </div>
    </div>
  );
}

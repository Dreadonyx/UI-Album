import useFocusSession from './useFocusSession';

export default function ThemeMinimalism() {
  const { progress, running, toggleRunning, dnd, toggleDnd } = useFocusSession();

  return (
    <div style={{ width: '600px', height: '400px', background: '#fafaf8', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '70px', fontFamily: "'Inter', sans-serif", color: '#111' }}>
      <div style={{ width: '250px' }}>
        <div style={{ fontSize: '11px', color: '#999', letterSpacing: '0.5px', marginBottom: '10px' }}>Deep work</div>
        <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '84px', lineHeight: 0.9, letterSpacing: '-3px' }}>{progress}<span style={{ fontSize: '40px', color: '#bbb' }}>%</span></div>
        <div style={{ height: '1px', background: '#e5e5e5', margin: '22px 0 18px', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, height: '1px', width: `${progress}%`, background: '#111', transition: 'width 0.4s' }} />
        </div>
        <button role="switch" aria-checked={dnd} onClick={toggleDnd} style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', padding: '0 0 14px', marginBottom: '22px', border: 'none', borderBottom: '1px solid #eee', background: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '13px', color: '#111' }}>
          Do not disturb <span style={{ color: dnd ? '#111' : '#bbb' }}>{dnd ? 'On' : 'Off'}</span>
        </button>
        <button onClick={toggleRunning} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer', fontFamily: 'inherit', fontSize: '13px', color: '#111', borderBottom: '1px solid #111', paddingBottom: '3px' }}>
          {running ? 'Pause session' : 'Start session'} →
        </button>
      </div>

      <div style={{ width: '150px', borderLeft: '1px solid #eee', paddingLeft: '24px' }}>
        <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '30px' }}>Minimalism</div>
        <p style={{ fontSize: '11px', lineHeight: 1.7, marginTop: '8px', color: '#888' }}>Only what is essential. Generous whitespace, one typeface pairing, hairlines instead of boxes.</p>
      </div>
    </div>
  );
}

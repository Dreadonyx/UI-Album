import useFocusSession from './useFocusSession';

const OUT = { borderStyle: 'solid', borderWidth: '2px', borderColor: '#ffffff #404040 #404040 #ffffff', boxShadow: 'inset -1px -1px 0 #808080, inset 1px 1px 0 #dfdfdf' };
const IN = { borderStyle: 'solid', borderWidth: '2px', borderColor: '#808080 #ffffff #ffffff #808080', boxShadow: 'inset 1px 1px 0 #404040' };

export default function ThemeRetroOS() {
  const { progress, running, toggleRunning, dnd, toggleDnd } = useFocusSession();
  const blocks = Math.round(progress / 5);

  return (
    <div style={{ width: '600px', height: '400px', position: 'relative', background: '#008080', fontFamily: "Tahoma, 'MS Sans Serif', 'Segoe UI', sans-serif", fontSize: '12px', color: '#000' }}>
      {[['My Computer', '🖥️', 20], ['Recycle Bin', '🗑️', 100]].map(([label, icon, y]) => (
        <div key={label} style={{ position: 'absolute', left: '16px', top: y, width: '70px', textAlign: 'center', color: '#fff' }}>
          <div style={{ fontSize: '30px' }}>{icon}</div>
          <div style={{ fontSize: '11px' }}>{label}</div>
        </div>
      ))}

      <div style={{ position: 'absolute', left: '140px', top: '40px', width: '320px', background: '#c0c0c0', padding: '3px', ...OUT }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '3px 4px', background: 'linear-gradient(90deg, #000080, #1084d0)', color: '#fff', fontWeight: 700 }}>
          <span>⏱ Deep Work - Focus Timer</span>
          <span style={{ display: 'flex', gap: '2px' }}>
            {['_', '□', '×'].map(c => <span key={c} style={{ width: '16px', height: '14px', background: '#c0c0c0', color: '#000', fontSize: '10px', lineHeight: '10px', textAlign: 'center', ...OUT }}>{c}</span>)}
          </span>
        </div>
        <div style={{ display: 'flex', gap: '12px', padding: '2px 6px', margin: '2px 0 6px' }}>
          {['File', 'Edit', 'View', 'Help'].map(m => <span key={m}><u>{m[0]}</u>{m.slice(1)}</span>)}
        </div>
        <div style={{ padding: '6px 10px 12px' }}>
          <fieldset style={{ border: '1px solid #808080', boxShadow: '1px 1px 0 #fff', padding: '8px 10px 10px', marginBottom: '12px' }}>
            <legend style={{ padding: '0 3px' }}>Today’s progress</legend>
            <div style={{ height: '22px', padding: '2px', display: 'flex', gap: '2px', background: '#fff', ...IN }}>
              {Array.from({ length: blocks }, (_, i) => <span key={i} style={{ width: '10px', background: '#000080' }} />)}
            </div>
            <div style={{ marginTop: '6px' }}>{progress}% complete</div>
          </fieldset>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px', cursor: 'pointer' }}>
            <span style={{ width: '13px', height: '13px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, ...IN, borderWidth: '1px' }}>{dnd && '✓'}</span>
            <input type="checkbox" checked={dnd} onChange={toggleDnd} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
            <span><u>D</u>o not disturb</span>
          </label>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '6px' }}>
            <button onClick={toggleRunning} style={{ minWidth: '96px', height: '26px', background: '#c0c0c0', cursor: 'pointer', fontFamily: 'inherit', fontSize: '12px', outline: '1px solid #000', outlineOffset: '-1px', ...(running ? IN : OUT) }}>{running ? 'Pause' : 'Start'}</button>
            <button style={{ minWidth: '76px', height: '26px', background: '#c0c0c0', cursor: 'pointer', fontFamily: 'inherit', fontSize: '12px', ...OUT }}>Cancel</button>
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', right: '18px', top: '250px', width: '190px', padding: '8px', background: '#ffffe1', border: '1px solid #000', fontSize: '11px', lineHeight: 1.4 }}>
        <b>Retro OS</b> — 90s desktop UI: beveled 3D borders, gray chrome, navy title bars and pixel-honest controls.
      </div>

      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '30px', background: '#c0c0c0', borderTop: '2px solid #fff', display: 'flex', alignItems: 'center', padding: '0 3px', gap: '4px' }}>
        <span style={{ padding: '2px 6px', fontWeight: 700, ...OUT }}>🪟 Start</span>
        <span style={{ padding: '2px 8px', width: '150px', ...IN }}>⏱ Deep Work</span>
        <span style={{ marginLeft: 'auto', padding: '2px 8px', ...IN }}>12:00 PM</span>
      </div>
    </div>
  );
}

import { useState } from 'react';
import useFocusSession from './useFocusSession';

const box = { border: '3px solid #000', boxShadow: '5px 5px 0 #000' };

export default function ThemeNeoBrutalism() {
  const { progress, running, toggleRunning, dnd, toggleDnd } = useFocusSession();
  const [pressed, setPressed] = useState(false);

  return (
    <div style={{ width: '600px', height: '400px', background: '#fdf6e3', backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '18px 18px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '36px', fontFamily: "'Space Grotesk', sans-serif", color: '#000' }}>
      <div style={{ width: '280px', padding: '20px', borderRadius: '10px', background: '#a3e635', ...box }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
          <div>
            <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 700, padding: '2px 8px', background: '#fff', border: '2px solid #000', borderRadius: '6px', marginBottom: '6px' }}>DAILY FOCUS</span>
            <div style={{ fontSize: '26px', fontWeight: 700, lineHeight: 1 }}>Deep Work</div>
          </div>
          <div style={{ padding: '6px 10px', background: '#ff6b6b', borderRadius: '8px', fontSize: '20px', fontWeight: 700, transform: 'rotate(4deg)', ...box, boxShadow: '3px 3px 0 #000' }}>{progress}%</div>
        </div>
        <div style={{ height: '22px', background: '#fff', borderRadius: '6px', border: '3px solid #000', marginBottom: '16px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${progress}%`, background: 'repeating-linear-gradient(45deg, #000 0 6px, #ffde59 6px 12px)', borderRight: '3px solid #000', transition: 'width 0.4s' }} />
        </div>
        <button role="switch" aria-checked={dnd} onClick={toggleDnd} style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', marginBottom: '16px', background: '#fff', borderRadius: '8px', cursor: 'pointer', fontFamily: 'inherit', fontSize: '14px', fontWeight: 700, ...box, boxShadow: '3px 3px 0 #000' }}>
          Do not disturb
          <span style={{ padding: '2px 10px', borderRadius: '6px', border: '2px solid #000', background: dnd ? '#000' : '#fff', color: dnd ? '#ffde59' : '#000' }}>{dnd ? 'ON' : 'OFF'}</span>
        </button>
        <button onClick={toggleRunning} onMouseDown={() => setPressed(true)} onMouseUp={() => setPressed(false)} onMouseLeave={() => setPressed(false)} style={{
          width: '100%', height: '50px', borderRadius: '8px', cursor: 'pointer', fontFamily: 'inherit', fontSize: '17px', fontWeight: 700,
          background: running ? '#ff6b6b' : '#ffde59', border: '3px solid #000',
          boxShadow: pressed ? '0 0 0 #000' : '5px 5px 0 #000', transform: pressed ? 'translate(5px, 5px)' : 'none', transition: 'transform 0.08s, box-shadow 0.08s',
        }}>{running ? 'PAUSE SESSION' : 'START SESSION ↗'}</button>
      </div>

      <div style={{ width: '180px', padding: '16px', background: '#fff', borderRadius: '10px', transform: 'rotate(-3deg)', ...box }}>
        <div style={{ fontSize: '26px', fontWeight: 700, lineHeight: 1 }}>Neo-Brutalism</div>
        <p style={{ fontSize: '12px', lineHeight: 1.5, marginTop: '8px', fontWeight: 500 }}>Thick black outlines, hard offset shadows, loud flat colors and buttons that physically press in.</p>
      </div>
    </div>
  );
}

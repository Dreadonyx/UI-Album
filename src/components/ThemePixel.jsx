import useFocusSession from './useFocusSession';

// Pixel-stepped border built from box-shadows (no rounded corners in 8-bit land).
const pixelBorder = (color, fill) => ({
  background: fill,
  boxShadow: `0 -4px 0 0 ${color}, 0 4px 0 0 ${color}, -4px 0 0 0 ${color}, 4px 0 0 0 ${color}, 0 8px 0 0 rgba(0,0,0,0.35)`,
});

export default function ThemePixel() {
  const { progress, running, toggleRunning, dnd, toggleDnd } = useFocusSession();
  const blocks = 10;
  const filled = Math.round((progress / 100) * blocks);

  return (
    <div style={{ width: '600px', height: '400px', background: '#5c94fc', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '36px', fontFamily: "'Press Start 2P', 'VT323', monospace", color: '#fff', imageRendering: 'pixelated' }}>
      <style>{`@keyframes uaBlink8 { 50% { opacity: 0; } }`}</style>
      {[[40, 50], [460, 80], [300, 24]].map(([x, y], i) => (
        <div key={i} style={{ position: 'absolute', left: x, top: y, width: '64px', height: '16px', background: '#fff', boxShadow: '16px -16px 0 #fff, 32px -16px 0 #fff, 16px 0 0 #fff, 48px 0 0 #fff' }} />
      ))}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '40px', background: 'repeating-linear-gradient(90deg, #c84c0c 0 30px, #a03c08 30px 32px)', borderTop: '6px solid #00a800' }} />

      <div style={{ position: 'relative', width: '270px', padding: '18px', ...pixelBorder('#000', '#000') }}>
        <div style={{ fontSize: '9px', color: '#fcbc3c', marginBottom: '10px' }}>WORLD 1-1 · FOCUS</div>
        <div style={{ fontSize: '16px', marginBottom: '14px' }}>DEEP WORK</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <span style={{ fontSize: '9px' }}>HP</span>
          <div style={{ display: 'flex', gap: '3px' }}>
            {Array.from({ length: blocks }, (_, i) => <span key={i} style={{ width: '14px', height: '14px', background: i < filled ? '#00e436' : '#3a3a3a', boxShadow: i < filled ? 'inset -3px -3px 0 #008751' : 'none' }} />)}
          </div>
        </div>
        <div style={{ fontSize: '10px', color: '#c3c3c3', marginBottom: '16px' }}>SCORE {String(progress * 100).padStart(6, '0')}</div>
        <button role="switch" aria-checked={dnd} onClick={toggleDnd} style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginBottom: '18px', border: 'none', background: 'none', color: '#fff', cursor: 'pointer', fontFamily: 'inherit', fontSize: '9px', padding: 0 }}>
          <span>{dnd ? '▶' : ' '} MUTE ALERTS</span><span style={{ color: dnd ? '#00e436' : '#ff004d' }}>{dnd ? 'ON' : 'OFF'}</span>
        </button>
        <button onClick={toggleRunning} style={{ width: '100%', padding: '12px 0', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '11px', color: '#000', ...pixelBorder('#fff', running ? '#ff004d' : '#fcbc3c') }}>
          {running ? 'PAUSE' : <span style={{ animation: 'uaBlink8 1s steps(1) infinite' }}>PRESS START</span>}
        </button>
      </div>

      <div style={{ position: 'relative', width: '170px' }}>
        <div style={{ fontSize: '18px', lineHeight: 1.4, textShadow: '4px 4px 0 #000' }}>PIXEL<br />ART</div>
        <p style={{ fontSize: '8px', lineHeight: 1.9, marginTop: '10px', textShadow: '2px 2px 0 #000' }}>8-bit game UI: chunky pixel fonts, hard stepped borders, limited palettes and blinking prompts.</p>
      </div>
    </div>
  );
}

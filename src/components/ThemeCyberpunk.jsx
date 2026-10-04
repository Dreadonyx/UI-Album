import useFocusSession from './useFocusSession';

const YELLOW = '#fcee0a';
const CYAN = '#00f0ff';
const cut = size => `polygon(0 0, calc(100% - ${size}px) 0, 100% ${size}px, 100% 100%, ${size}px 100%, 0 calc(100% - ${size}px))`;

export default function ThemeCyberpunk() {
  const { progress, running, toggleRunning, dnd, toggleDnd } = useFocusSession();

  return (
    <div style={{ width: '600px', height: '400px', position: 'relative', overflow: 'hidden', background: '#0a0a12', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '30px', fontFamily: "'JetBrains Mono', 'DM Mono', monospace", color: CYAN }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'repeating-linear-gradient(180deg, rgba(0,240,255,0.04) 0 1px, transparent 1px 3px)' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${CYAN}11 1px, transparent 1px), linear-gradient(90deg, ${CYAN}11 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

      <div style={{ position: 'relative', width: '290px', padding: '2px', background: YELLOW, clipPath: cut(18) }}>
        <div style={{ padding: '18px', background: '#0d0d18', clipPath: cut(17) }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: YELLOW, letterSpacing: '2px', marginBottom: '6px' }}>
            <span>// SYS.FOCUS</span><span>NODE_07</span>
          </div>
          <div style={{ fontSize: '22px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', textShadow: `2px 0 ${CYAN}, -2px 0 #ff003c`, marginBottom: '12px' }}>Deep_Work</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '6px' }}>
            <span style={{ fontSize: '36px', fontWeight: 700, color: YELLOW }}>{String(progress).padStart(3, '0')}</span>
            <span style={{ fontSize: '10px' }}>% SYNC RATE</span>
          </div>
          <div style={{ display: 'flex', gap: '2px', marginBottom: '14px' }}>
            {Array.from({ length: 25 }, (_, i) => <span key={i} style={{ flex: 1, height: '10px', background: i < progress / 4 ? CYAN : '#1c2a35', boxShadow: i < progress / 4 ? `0 0 6px ${CYAN}` : 'none', transform: 'skewX(-20deg)' }} />)}
          </div>
          <button role="switch" aria-checked={dnd} onClick={toggleDnd} style={{ display: 'flex', width: '100%', justifyContent: 'space-between', padding: '8px 10px', marginBottom: '12px', border: `1px solid ${CYAN}66`, background: dnd ? `${CYAN}18` : 'transparent', color: CYAN, cursor: 'pointer', fontFamily: 'inherit', fontSize: '11px', letterSpacing: '1px', clipPath: cut(8) }}>
            &gt; NEURAL_MUTE <span style={{ color: dnd ? YELLOW : '#ff003c' }}>[{dnd ? 'ACTIVE' : 'OFFLINE'}]</span>
          </button>
          <button onClick={toggleRunning} style={{ width: '100%', height: '42px', border: 'none', background: running ? '#ff003c' : YELLOW, color: '#000', cursor: 'pointer', fontFamily: 'inherit', fontSize: '13px', fontWeight: 700, letterSpacing: '3px', clipPath: cut(12) }}>
            {running ? '■ ABORT SESSION' : '▶ JACK IN'}
          </button>
        </div>
      </div>

      <div style={{ position: 'relative', width: '160px' }}>
        <div style={{ fontSize: '28px', fontWeight: 700, color: YELLOW, lineHeight: 1, textTransform: 'uppercase' }}>Cyber<br />punk</div>
        <p style={{ fontSize: '10px', lineHeight: 1.6, marginTop: '10px' }}>High-tech, low-life HUDs: clipped corners, scanlines, chromatic aberration and acid yellow on black.</p>
      </div>
    </div>
  );
}

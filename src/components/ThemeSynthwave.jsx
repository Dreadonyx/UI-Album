import useFocusSession from './useFocusSession';

const PINK = '#ff2a6d';
const CYAN = '#05d9e8';
const neon = color => `0 0 4px ${color}, 0 0 12px ${color}, 0 0 28px ${color}`;

export default function ThemeSynthwave() {
  const { progress, running, toggleRunning, dnd, toggleDnd } = useFocusSession();

  return (
    <div style={{ width: '600px', height: '400px', position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #0d0221 0%, #1b0640 55%, #2d0a4e 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '30px', fontFamily: "'Syne', 'Inter', sans-serif", color: '#fff' }}>
      <style>{`@keyframes uaFlicker { 0%, 19%, 21%, 60%, 62%, 100% { opacity: 1; } 20%, 61% { opacity: 0.55; } }`}</style>
      {Array.from({ length: 40 }, (_, i) => (
        <span key={i} style={{ position: 'absolute', left: `${(i * 47) % 100}%`, top: `${(i * 29) % 55}%`, width: '2px', height: '2px', borderRadius: '50%', background: '#fff', opacity: 0.3 + (i % 3) * 0.2 }} />
      ))}
      <svg width="600" height="140" viewBox="0 0 600 140" style={{ position: 'absolute', left: 0, bottom: 0 }} aria-hidden="true">
        <polygon points="0,140 0,70 70,30 130,80 200,20 280,90 340,40 420,95 480,35 550,75 600,50 600,140" fill="#12052e" stroke={CYAN} strokeWidth="1.5" strokeOpacity="0.7" />
        {[0, 1, 2, 3, 4].map(i => <line key={i} x1="0" x2="600" y1={100 + i * 9} y2={100 + i * 9} stroke={PINK} strokeOpacity={0.25 + i * 0.12} />)}
      </svg>

      <div style={{ position: 'relative', width: '270px', padding: '22px', borderRadius: '16px', background: 'rgba(13,2,33,0.75)', border: `2px solid ${PINK}`, boxShadow: `${neon(PINK)}, inset 0 0 18px rgba(255,42,109,0.35)` }}>
        <div style={{ fontSize: '11px', letterSpacing: '4px', color: CYAN, textShadow: neon(CYAN), marginBottom: '4px' }}>NIGHT DRIVE</div>
        <div style={{ fontSize: '26px', fontWeight: 800, fontStyle: 'italic', textTransform: 'uppercase', marginBottom: '10px', background: 'linear-gradient(180deg, #fff 0%, #ffd1e8 45%, #ff2a6d 55%, #ffb3d1 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', filter: `drop-shadow(0 0 6px ${PINK})` }}>Deep Work</div>
        <div style={{ fontFamily: "'VT323', monospace", fontSize: '52px', lineHeight: 0.9, color: CYAN, textShadow: neon(CYAN), animation: 'uaFlicker 4s infinite' }}>{progress}%</div>
        <div style={{ height: '6px', borderRadius: '6px', background: 'rgba(5,217,232,0.15)', margin: '12px 0 16px' }}>
          <div style={{ height: '100%', width: `${progress}%`, borderRadius: '6px', background: CYAN, boxShadow: neon(CYAN), transition: 'width 0.4s' }} />
        </div>
        <button role="switch" aria-checked={dnd} onClick={toggleDnd} style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', marginBottom: '12px', borderRadius: '10px', border: `1px solid ${dnd ? CYAN : '#4a3a6e'}`, background: 'transparent', cursor: 'pointer', fontFamily: 'inherit', fontSize: '12px', fontWeight: 700, letterSpacing: '1px', color: dnd ? CYAN : '#9a8cc0', boxShadow: dnd ? `0 0 10px ${CYAN}55` : 'none' }}>
          DO NOT DISTURB <span>{dnd ? 'ON' : 'OFF'}</span>
        </button>
        <button onClick={toggleRunning} style={{ width: '100%', height: '44px', borderRadius: '10px', border: `2px solid ${running ? CYAN : PINK}`, background: running ? 'rgba(5,217,232,0.12)' : 'rgba(255,42,109,0.15)', color: '#fff', cursor: 'pointer', fontFamily: 'inherit', fontSize: '14px', fontWeight: 800, fontStyle: 'italic', letterSpacing: '3px', textShadow: neon(running ? CYAN : PINK), boxShadow: `0 0 14px ${running ? CYAN : PINK}66` }}>
          {running ? 'PAUSE' : 'PRESS PLAY'}
        </button>
      </div>

      <div style={{ position: 'relative', width: '170px' }}>
        <div style={{ fontSize: '30px', fontWeight: 800, fontStyle: 'italic', color: PINK, textShadow: neon(PINK), lineHeight: 1 }}>SYNTH<br />WAVE</div>
        <p style={{ fontSize: '12px', lineHeight: 1.6, marginTop: '10px', fontFamily: "'Inter', sans-serif", color: '#d6c8ff' }}>Outrun 80s: neon tubes on midnight purple, wireframe mountains, chrome italics and flicker.</p>
      </div>
    </div>
  );
}

import useFocusSession from './useFocusSession';

export default function ThemeMemphis() {
  const { progress, running, toggleRunning, dnd, toggleDnd } = useFocusSession();

  return (
    <div style={{ width: '600px', height: '400px', background: '#fff7e6', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '34px', fontFamily: "'Space Grotesk', sans-serif", color: '#111' }}>
      {/* confetti */}
      <svg width="600" height="400" style={{ position: 'absolute', inset: 0 }} aria-hidden="true">
        <path d="M30 60 q 15 -20 30 0 t 30 0 t 30 0" fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round" />
        <path d="M470 340 q 15 -20 30 0 t 30 0 t 30 0" fill="none" stroke="#ff71ce" strokeWidth="5" strokeLinecap="round" />
        <circle cx="540" cy="70" r="26" fill="#01cdfe" stroke="#111" strokeWidth="4" />
        <polygon points="70,330 110,370 30,370" fill="#fffb96" stroke="#111" strokeWidth="4" />
        <rect x="540" y="250" width="36" height="36" fill="none" stroke="#111" strokeWidth="4" transform="rotate(20 558 268)" />
        {[0, 1, 2, 3, 4].map(i => <circle key={i} cx={260 + i * 18} cy={30} r="4" fill="#111" />)}
        <path d="M140 20 l10 10 l-10 10 l10 10" fill="none" stroke="#05ffa1" strokeWidth="5" />
      </svg>

      <div style={{ position: 'relative', width: '270px', padding: '20px', background: '#fff', border: '4px solid #111', borderRadius: '4px', boxShadow: '10px 10px 0 #ff71ce' }}>
        <div style={{ position: 'absolute', top: '-16px', right: '18px', padding: '4px 10px', background: '#fffb96', border: '3px solid #111', fontFamily: "'Bungee', 'Syne', sans-serif", fontSize: '12px', transform: 'rotate(6deg)' }}>FOCUS!</div>
        <div style={{ fontFamily: "'Bungee', 'Syne', sans-serif", fontSize: '24px', lineHeight: 1, marginBottom: '14px' }}>Deep Work</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
          <div style={{ width: '62px', height: '62px', borderRadius: '50%', border: '4px solid #111', background: `conic-gradient(#01cdfe ${progress * 3.6}deg, #fff 0)`, flexShrink: 0 }} />
          <div>
            <div style={{ fontFamily: "'Bungee', 'Syne', sans-serif", fontSize: '28px', lineHeight: 1 }}>{progress}%</div>
            <div style={{ fontSize: '12px', fontWeight: 600 }}>of today’s goal</div>
          </div>
        </div>
        <div style={{ height: '14px', marginBottom: '14px', background: 'repeating-linear-gradient(135deg, #111 0 3px, transparent 3px 9px)', border: '3px solid #111' }}>
          <div style={{ height: '100%', width: `${progress}%`, background: '#05ffa1', borderRight: '3px solid #111', transition: 'width 0.4s' }} />
        </div>
        <button role="switch" aria-checked={dnd} onClick={toggleDnd} style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', padding: '8px 10px', marginBottom: '12px', border: '3px solid #111', background: dnd ? '#01cdfe' : '#fff', cursor: 'pointer', fontFamily: 'inherit', fontSize: '13px', fontWeight: 700, transition: 'background 0.2s' }}>
          Do not disturb <span>{dnd ? '● ON' : '○ OFF'}</span>
        </button>
        <button onClick={toggleRunning} style={{ width: '100%', height: '46px', border: '3px solid #111', background: running ? '#ff71ce' : '#fffb96', cursor: 'pointer', fontFamily: "'Bungee', 'Syne', sans-serif", fontSize: '15px', boxShadow: '4px 4px 0 #111' }}>
          {running ? 'Pause!' : 'Start!'}
        </button>
      </div>

      <div style={{ position: 'relative', width: '160px' }}>
        <div style={{ fontFamily: "'Bungee', 'Syne', sans-serif", fontSize: '32px', lineHeight: 1, color: '#ff71ce', WebkitTextStroke: '2px #111' }}>Memphis</div>
        <p style={{ fontSize: '12px', lineHeight: 1.5, marginTop: '8px', fontWeight: 500, background: '#fff', padding: '4px' }}>1980s Milan design group: squiggles, confetti shapes, clashing pastels and thick black outlines.</p>
      </div>
    </div>
  );
}

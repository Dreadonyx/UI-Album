import useFocusSession from './useFocusSession';

function Mascot({ happy }) {
  return (
    <div style={{ position: 'relative', width: '86px', height: '74px', borderRadius: '50% 50% 46% 46%', background: '#fff', border: '3px solid #5b3a4a', animation: 'uaBounce 1.8s ease-in-out infinite' }}>
      <span style={{ position: 'absolute', top: '-12px', left: '10px', width: '22px', height: '22px', borderRadius: '50%', background: '#fff', border: '3px solid #5b3a4a', borderBottomColor: 'transparent', transform: 'rotate(-20deg)' }} />
      <span style={{ position: 'absolute', top: '-12px', right: '10px', width: '22px', height: '22px', borderRadius: '50%', background: '#fff', border: '3px solid #5b3a4a', borderBottomColor: 'transparent', transform: 'rotate(20deg)' }} />
      {happy ? (
        <>
          <span style={{ position: 'absolute', top: '28px', left: '20px', width: '12px', height: '7px', borderTop: '3px solid #5b3a4a', borderRadius: '50% 50% 0 0' }} />
          <span style={{ position: 'absolute', top: '28px', right: '20px', width: '12px', height: '7px', borderTop: '3px solid #5b3a4a', borderRadius: '50% 50% 0 0' }} />
        </>
      ) : (
        <>
          <span style={{ position: 'absolute', top: '26px', left: '22px', width: '9px', height: '11px', borderRadius: '50%', background: '#5b3a4a', boxShadow: 'inset 2px 2px 0 #fff' }} />
          <span style={{ position: 'absolute', top: '26px', right: '22px', width: '9px', height: '11px', borderRadius: '50%', background: '#5b3a4a', boxShadow: 'inset 2px 2px 0 #fff' }} />
        </>
      )}
      <span style={{ position: 'absolute', top: '40px', left: '11px', width: '12px', height: '7px', borderRadius: '50%', background: '#ffb3c7' }} />
      <span style={{ position: 'absolute', top: '40px', right: '11px', width: '12px', height: '7px', borderRadius: '50%', background: '#ffb3c7' }} />
      <span style={{ position: 'absolute', top: '42px', left: '50%', width: '12px', height: '6px', marginLeft: '-6px', borderBottom: '3px solid #5b3a4a', borderRadius: '0 0 50% 50%' }} />
    </div>
  );
}

export default function ThemeKawaii() {
  const { progress, running, toggleRunning, dnd, toggleDnd } = useFocusSession();
  const hearts = Math.round(progress / 20);

  return (
    <div style={{ width: '600px', height: '400px', position: 'relative', overflow: 'hidden', background: 'radial-gradient(#ffd6e5 2px, transparent 2px) 0 0 / 22px 22px, linear-gradient(180deg, #fff0f6, #eaf4ff)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '30px', fontFamily: "'Fredoka', 'Space Grotesk', sans-serif", color: '#5b3a4a' }}>
      <style>{`
        @keyframes uaBounce { 0%,100% { transform: translateY(0) scale(1, 1); } 50% { transform: translateY(-6px) scale(1.03, 0.97); } }
        @keyframes uaSparkle { 0%,100% { opacity: 0.3; transform: scale(0.7); } 50% { opacity: 1; transform: scale(1.1); } }
      `}</style>
      {[[50, 50, '✿', 0], [530, 60, '★', 0.4], [500, 330, '♡', 0.8], [70, 320, '✧', 1.2]].map(([x, y, c, d]) => (
        <span key={c} style={{ position: 'absolute', left: x, top: y, fontSize: '22px', color: '#ff8fb3', animation: `uaSparkle 2s ${d}s ease-in-out infinite` }}>{c}</span>
      ))}

      <div style={{ position: 'relative', width: '270px', padding: '20px', borderRadius: '32px', background: '#fff', border: '3px solid #ffc2d6', boxShadow: '0 10px 0 #ffc2d6, 0 18px 30px rgba(255,143,179,0.25)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Mascot happy={running} />
        <div style={{ fontSize: '22px', fontWeight: 700, margin: '8px 0 2px' }}>Deep Work ♡</div>
        <div style={{ fontSize: '13px', color: '#b07a90', marginBottom: '10px' }}>{progress}% done, you’re so cute!</div>
        <div style={{ display: 'flex', gap: '6px', marginBottom: '14px', fontSize: '22px' }} aria-label={`${progress} percent`}>
          {Array.from({ length: 5 }, (_, i) => <span key={i} style={{ color: i < hearts ? '#ff6f9c' : '#f3dbe4', transition: 'color 0.3s' }}>♥</span>)}
        </div>
        <button role="switch" aria-checked={dnd} onClick={toggleDnd} style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', padding: '8px 14px', marginBottom: '10px', borderRadius: '999px', border: '2px solid #cfe3ff', background: dnd ? '#e3efff' : '#fff', cursor: 'pointer', fontFamily: 'inherit', fontSize: '14px', color: '#5b3a4a' }}>
          Shh, sleepy mode <span>{dnd ? '(˘ω˘) zZ' : '(•ᴗ•)'}</span>
        </button>
        <button onClick={toggleRunning} style={{ width: '100%', height: '46px', borderRadius: '999px', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '16px', fontWeight: 700, color: '#fff', background: running ? '#9cc7ff' : '#ff8fb3', boxShadow: `0 5px 0 ${running ? '#6fa7ee' : '#e86a95'}`, transform: running ? 'translateY(3px)' : 'none', transition: 'transform 0.1s' }}>
          {running ? 'pause~ (ᴗ˳ᴗ)' : 'let’s go! ٩(◕‿◕)۶'}
        </button>
      </div>

      <div style={{ position: 'relative', width: '160px', textAlign: 'center' }}>
        <div style={{ fontSize: '36px', fontWeight: 700, color: '#ff6f9c', lineHeight: 1 }}>Kawaii</div>
        <p style={{ fontSize: '13px', lineHeight: 1.5, marginTop: '8px', color: '#8a5a6e' }}>Japanese cute culture: pastel candy colors, rounded type, bouncy mascots and kaomoji.</p>
      </div>
    </div>
  );
}

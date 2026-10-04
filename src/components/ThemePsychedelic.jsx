import useFocusSession from './useFocusSession';

const WORD = 'GROOVY';

export default function ThemePsychedelic() {
  const { progress, running, toggleRunning, dnd, toggleDnd } = useFocusSession();

  return (
    <div style={{ width: '600px', height: '400px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '30px', fontFamily: "'Fraunces', serif", color: '#2a0a3d' }}>
      <style>{`
        @keyframes uaSwirl { to { transform: rotate(1turn); } }
        @keyframes uaHue { to { filter: hue-rotate(360deg); } }
        @keyframes uaWave { 0%,100% { transform: translateY(0) rotate(-4deg); } 50% { transform: translateY(-8px) rotate(4deg); } }
      `}</style>
      <div style={{ position: 'absolute', inset: '-50%', background: 'repeating-conic-gradient(from 0deg, #ff3cac 0 15deg, #ffb800 15deg 30deg, #2bd2ff 30deg 45deg, #7cff6b 45deg 60deg, #784ba0 60deg 75deg)', animation: 'uaSwirl 40s linear infinite, uaHue 12s linear infinite' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'repeating-radial-gradient(circle at 50% 50%, transparent 0 18px, rgba(255,255,255,0.25) 18px 22px)' }} />

      <div style={{ position: 'relative', width: '270px', padding: '24px', background: '#fff4d6', borderRadius: '58% 42% 55% 45% / 45% 55% 45% 55%', border: '5px solid #2a0a3d', boxShadow: '8px 8px 0 #784ba0' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2px' }}>
          {WORD.split('').map((ch, i) => (
            <span key={i} style={{ display: 'inline-block', fontSize: '30px', fontWeight: 900, color: ['#ff3cac', '#ffb800', '#2bd2ff', '#7cff6b', '#784ba0', '#ff3cac'][i], WebkitTextStroke: '1.5px #2a0a3d', animation: `uaWave 1.6s ${i * 0.12}s ease-in-out infinite` }}>{ch}</span>
          ))}
        </div>
        <div style={{ textAlign: 'center', fontSize: '15px', fontStyle: 'italic', fontWeight: 700, marginBottom: '10px' }}>deep work trip</div>
        <div style={{ position: 'relative', width: '90px', height: '90px', margin: '0 auto 12px', borderRadius: '50%', background: `conic-gradient(#ff3cac, #ffb800, #2bd2ff, #7cff6b, #784ba0, #ff3cac) border-box`, padding: '8px', animation: running ? 'uaSwirl 3s linear infinite' : 'none' }}>
          <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#fff4d6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', fontWeight: 900, animation: running ? 'uaSwirl 3s linear infinite reverse' : 'none' }}>{progress}%</div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button role="switch" aria-checked={dnd} aria-label="Do not disturb" onClick={toggleDnd} style={{ width: '54px', height: '44px', borderRadius: '50%', border: '3px solid #2a0a3d', background: dnd ? '#7cff6b' : '#fff', cursor: 'pointer', fontSize: '18px' }}>{dnd ? '☮' : '☼'}</button>
          <button onClick={toggleRunning} style={{ flex: 1, height: '44px', borderRadius: '22px', border: '3px solid #2a0a3d', cursor: 'pointer', fontFamily: 'inherit', fontSize: '16px', fontWeight: 900, fontStyle: 'italic', color: '#2a0a3d', background: running ? '#2bd2ff' : 'linear-gradient(90deg, #ff3cac, #ffb800)' }}>
            {running ? 'come down' : 'turn on'}
          </button>
        </div>
      </div>

      <div style={{ position: 'relative', width: '170px', padding: '16px', background: '#2a0a3d', color: '#fff4d6', borderRadius: '30px 30px 30px 4px' }}>
        <div style={{ fontSize: '22px', fontWeight: 900, fontStyle: 'italic', color: '#ffb800' }}>Psychedelic</div>
        <p style={{ fontSize: '11px', lineHeight: 1.6, marginTop: '6px', fontFamily: "'Inter', sans-serif" }}>60s poster art: swirling rainbow rays, melting shapes, wavy outlined lettering and hue shifts.</p>
      </div>
    </div>
  );
}

import useFocusSession from './useFocusSession';

function Person({ running }) {
  return (
    <svg width="150" height="190" viewBox="0 0 150 190" aria-hidden="true">
      <ellipse cx="75" cy="182" rx="60" ry="7" fill="#e3e1f7" />
      {/* oversized legs */}
      <path d="M58 112 C 40 140, 30 160, 22 176 L 46 178 C 56 158, 66 140, 74 120 Z" fill="#2d2a6e" />
      <path d="M86 112 C 96 140, 108 158, 124 172 L 104 180 C 90 164, 80 144, 74 122 Z" fill="#2d2a6e" />
      <ellipse cx="34" cy="178" rx="16" ry="6" fill="#ff7a59" />
      <ellipse cx="116" cy="176" rx="16" ry="6" fill="#ff7a59" />
      {/* torso */}
      <path d="M50 64 C 52 50, 98 50, 100 64 L 98 118 L 52 118 Z" fill="#ffc94d" />
      {/* long waving arm */}
      <path d="M96 68 C 118 56, 126 34, 128 14" fill="none" stroke="#7b6cf6" strokeWidth="12" strokeLinecap="round" style={{ transformOrigin: '96px 68px', transform: running ? 'rotate(-12deg)' : 'none', transition: 'transform 0.4s' }} />
      <path d="M54 70 C 36 86, 34 100, 46 108" fill="none" stroke="#7b6cf6" strokeWidth="12" strokeLinecap="round" />
      {/* tiny head with purple skin and hair */}
      <circle cx="75" cy="40" r="12" fill="#7b6cf6" />
      <path d="M62 38 C 62 24, 90 22, 88 36 C 80 30, 70 32, 62 38 Z" fill="#1f1b4d" />
      {/* laptop */}
      <rect x="40" y="96" width="44" height="28" rx="3" fill="#ffffff" stroke="#2d2a6e" strokeWidth="3" />
    </svg>
  );
}

export default function ThemeCorporateMemphis() {
  const { progress, running, toggleRunning, dnd, toggleDnd } = useFocusSession();

  return (
    <div style={{ width: '600px', height: '400px', position: 'relative', overflow: 'hidden', background: '#f6f5ff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontFamily: "'Inter', sans-serif", color: '#1f1b4d' }}>
      <div style={{ position: 'absolute', width: '240px', height: '240px', borderRadius: '50%', background: '#ffe3d8', left: '20px', top: '60px' }} />
      <div style={{ position: 'absolute', left: '30px', top: '30px', width: '60px', height: '14px', borderRadius: '7px', background: '#c9f2e3' }} />
      <span style={{ position: 'absolute', left: '230px', top: '40px', fontSize: '26px', color: '#7b6cf6' }}>✳</span>

      <div style={{ position: 'relative', width: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Person running={running} />
        <div style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '-0.5px', textAlign: 'center', lineHeight: 1.05, marginTop: '4px' }}>Corporate<br />Memphis</div>
        <p style={{ fontSize: '10px', lineHeight: 1.5, textAlign: 'center', color: '#5b5786', marginTop: '4px' }}>Flat “Alegria” illustrations: tiny heads, giant limbs, purple skin and cheerful pastels.</p>
      </div>

      <div style={{ position: 'relative', width: '250px', padding: '22px', borderRadius: '24px', background: '#fff', boxShadow: '0 16px 40px rgba(91,87,134,0.15)' }}>
        <div style={{ display: 'inline-block', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '999px', background: '#c9f2e3', color: '#0f7a55', marginBottom: '8px' }}>You’re doing great! 🎉</div>
        <div style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px' }}>Deep Work</div>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '6px' }}>
          <span style={{ fontSize: '13px', color: '#5b5786' }}>Today’s goal</span>
          <span style={{ fontSize: '18px', fontWeight: 800, color: '#7b6cf6' }}>{progress}%</span>
        </div>
        <div style={{ height: '12px', borderRadius: '12px', background: '#efedff', marginBottom: '16px' }}>
          <div style={{ height: '100%', width: `${progress}%`, borderRadius: '12px', background: '#7b6cf6', transition: 'width 0.4s' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <span style={{ fontSize: '13px', fontWeight: 600 }}>Do not disturb</span>
          <button role="switch" aria-checked={dnd} aria-label="Do not disturb" onClick={toggleDnd} style={{ width: '46px', height: '26px', borderRadius: '26px', border: 'none', padding: '3px', cursor: 'pointer', background: dnd ? '#ff7a59' : '#dcd9f2', transition: 'background 0.2s' }}>
            <span style={{ display: 'block', width: '20px', height: '20px', borderRadius: '50%', background: '#fff', transform: `translateX(${dnd ? 20 : 0}px)`, transition: 'transform 0.2s' }} />
          </button>
        </div>
        <button onClick={toggleRunning} style={{ width: '100%', height: '46px', borderRadius: '14px', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '14px', fontWeight: 700, color: '#fff', background: running ? '#ff7a59' : '#1f1b4d', transition: 'background 0.2s' }}>
          {running ? 'Take a break' : 'Let’s get started →'}
        </button>
      </div>
    </div>
  );
}

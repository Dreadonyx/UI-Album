import useFocusSession from './useFocusSession';

export default function ThemeOrganic() {
  const { progress, running, toggleRunning, dnd, toggleDnd } = useFocusSession();

  return (
    <div style={{ width: '600px', height: '400px', position: 'relative', overflow: 'hidden', background: '#f1ebe0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '36px', fontFamily: "'Inter', sans-serif", color: '#3d4a33' }}>
      <style>{`
        @keyframes uaMorph {
          0%, 100% { border-radius: 62% 38% 46% 54% / 55% 44% 56% 45%; }
          33% { border-radius: 40% 60% 63% 37% / 42% 61% 39% 58%; }
          66% { border-radius: 55% 45% 35% 65% / 62% 38% 62% 38%; }
        }
      `}</style>
      <div style={{ position: 'absolute', width: '280px', height: '260px', left: '-80px', bottom: '-90px', background: '#c9d6b3', animation: 'uaMorph 12s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', width: '200px', height: '200px', right: '-50px', top: '-60px', background: '#e8c7a8', animation: 'uaMorph 14s ease-in-out infinite reverse' }} />

      <div style={{ position: 'relative', width: '280px', padding: '28px 26px', background: '#fbf8f2', borderRadius: '48px 48px 48px 12px', boxShadow: '0 20px 40px rgba(61,74,51,0.12)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
          <div style={{ width: '58px', height: '58px', background: '#7a9a5e', animation: 'uaMorph 8s ease-in-out infinite', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fbf8f2' }}><svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19C5 10 11 4 20 4c0 9-6 15-15 15Z" fill="#fbf8f2" /><path d="M5 19 14 10" stroke="#7a9a5e" strokeWidth="1.6" strokeLinecap="round" /></svg></div>
          <div>
            <div style={{ fontSize: '12px', color: '#8a7a64' }}>Daily focus</div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: '24px', fontWeight: 600 }}>Deep Work</div>
          </div>
        </div>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: '15px', marginBottom: '8px' }}>{progress}% grown today</div>
        <svg viewBox="0 0 228 16" width="100%" height="16" style={{ display: 'block', marginBottom: '20px' }} aria-hidden="true">
          <path d="M2 8 C 40 0, 70 16, 114 8 S 190 0, 226 8" fill="none" stroke="#e3dccd" strokeWidth="6" strokeLinecap="round" />
          <path d="M2 8 C 40 0, 70 16, 114 8 S 190 0, 226 8" fill="none" stroke="#7a9a5e" strokeWidth="6" strokeLinecap="round" pathLength="100" strokeDasharray={`${progress} 100`} style={{ transition: 'stroke-dasharray 0.4s' }} />
        </svg>
        <button role="switch" aria-checked={dnd} onClick={toggleDnd} style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', marginBottom: '14px', border: 'none', borderRadius: '999px', background: '#efe8da', cursor: 'pointer', fontFamily: 'inherit', fontSize: '13px', color: '#3d4a33' }}>
          Quiet mode
          <span style={{ width: '40px', height: '22px', borderRadius: '999px', background: dnd ? '#7a9a5e' : '#d8cfbe', padding: '3px', transition: 'background 0.3s' }}>
            <span style={{ display: 'block', width: '16px', height: '16px', borderRadius: '50%', background: '#fbf8f2', transform: `translateX(${dnd ? 18 : 0}px)`, transition: 'transform 0.3s' }} />
          </span>
        </button>
        <button onClick={toggleRunning} style={{ width: '100%', height: '48px', border: 'none', borderRadius: '24px 24px 24px 8px', background: running ? '#c47a52' : '#3d4a33', color: '#fbf8f2', cursor: 'pointer', fontFamily: "'Fraunces', serif", fontSize: '16px', transition: 'background 0.3s' }}>
          {running ? 'Rest a moment' : 'Begin to grow'}
        </button>
      </div>

      <div style={{ position: 'relative', width: '160px' }}>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: '30px', fontWeight: 600, lineHeight: 1 }}>Organic</div>
        <p style={{ fontSize: '12px', lineHeight: 1.6, marginTop: '8px', color: '#6b5d48' }}>Biomorphic design: earthy palettes, morphing blob shapes, asymmetric radii and flowing lines.</p>
      </div>
    </div>
  );
}

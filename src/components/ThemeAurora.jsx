import useFocusSession from './useFocusSession';

export default function ThemeAurora() {
  const { progress, running, toggleRunning, dnd, toggleDnd } = useFocusSession();

  return (
    <div style={{ width: '600px', height: '400px', position: 'relative', overflow: 'hidden', background: '#05060f', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '36px', fontFamily: "'Inter', sans-serif", color: '#e8ecff' }}>
      <style>{`
        @keyframes uaMesh1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(80px,40px) scale(1.2); } }
        @keyframes uaMesh2 { 0%,100% { transform: translate(0,0) scale(1.1); } 50% { transform: translate(-90px,-30px) scale(0.9); } }
        @keyframes uaMesh3 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(40px,-60px); } }
      `}</style>
      <div style={{ position: 'absolute', inset: 0, filter: 'blur(60px)', opacity: 0.85 }}>
        <div style={{ position: 'absolute', width: '320px', height: '320px', borderRadius: '50%', background: '#7c3aed', left: '-60px', top: '-80px', animation: 'uaMesh1 12s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', background: '#06b6d4', right: '-40px', top: '40px', animation: 'uaMesh2 14s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', width: '260px', height: '260px', borderRadius: '50%', background: '#22c55e', left: '180px', bottom: '-140px', animation: 'uaMesh3 10s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', width: '200px', height: '200px', borderRadius: '50%', background: '#ec4899', right: '120px', bottom: '-60px', animation: 'uaMesh1 16s ease-in-out infinite reverse' }} />
      </div>

      <div style={{ position: 'relative', width: '270px', padding: '22px', borderRadius: '20px', background: 'rgba(5,6,15,0.55)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 50px rgba(0,0,0,0.4)' }}>
        <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#a5b4fc' }}>DAILY FOCUS</div>
        <div style={{ fontSize: '22px', fontWeight: 700, marginBottom: '10px' }}>Deep Work</div>
        <div style={{ fontSize: '54px', fontWeight: 800, lineHeight: 1, letterSpacing: '-2px', background: 'linear-gradient(90deg, #a78bfa, #22d3ee, #4ade80)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', marginBottom: '10px' }}>{progress}%</div>
        <div style={{ height: '6px', borderRadius: '6px', background: 'rgba(255,255,255,0.08)', marginBottom: '18px' }}>
          <div style={{ height: '100%', width: `${progress}%`, borderRadius: '6px', background: 'linear-gradient(90deg, #a78bfa, #22d3ee, #4ade80)', boxShadow: '0 0 14px rgba(34,211,238,0.6)', transition: 'width 0.4s' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <span style={{ fontSize: '13px', color: '#c7d2fe' }}>Do not disturb</span>
          <button role="switch" aria-checked={dnd} aria-label="Do not disturb" onClick={toggleDnd} style={{ width: '44px', height: '24px', borderRadius: '24px', border: 'none', padding: '3px', cursor: 'pointer', background: dnd ? 'linear-gradient(90deg, #a78bfa, #22d3ee)' : 'rgba(255,255,255,0.12)' }}>
            <span style={{ display: 'block', width: '18px', height: '18px', borderRadius: '50%', background: '#fff', transform: `translateX(${dnd ? 20 : 0}px)`, transition: 'transform 0.25s' }} />
          </button>
        </div>
        <button onClick={toggleRunning} style={{ width: '100%', height: '44px', borderRadius: '12px', cursor: 'pointer', fontFamily: 'inherit', fontSize: '14px', fontWeight: 600, color: '#fff', border: '1px solid transparent', background: running ? 'linear-gradient(#05060f, #05060f) padding-box, linear-gradient(90deg, #a78bfa, #22d3ee, #4ade80) border-box' : 'linear-gradient(90deg, #7c3aed, #0891b2) padding-box, linear-gradient(90deg, #a78bfa, #22d3ee, #4ade80) border-box' }}>
          {running ? 'Pause session' : 'Start session'}
        </button>
      </div>

      <div style={{ position: 'relative', width: '170px' }}>
        <div style={{ fontSize: '30px', fontWeight: 800, lineHeight: 1 }}>Aurora<br /><span style={{ color: '#a5f3fc' }}>Mesh</span></div>
        <p style={{ fontSize: '12px', lineHeight: 1.6, marginTop: '8px', color: '#c7d2fe' }}>Blurred, slowly drifting color blobs that blend into a living mesh gradient behind dark UI.</p>
      </div>
    </div>
  );
}

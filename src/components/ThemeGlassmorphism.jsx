import useFocusSession from './useFocusSession';

const glass = {
  background: 'rgba(255,255,255,0.14)',
  backdropFilter: 'blur(18px) saturate(160%)',
  WebkitBackdropFilter: 'blur(18px) saturate(160%)',
  border: '1px solid rgba(255,255,255,0.35)',
  boxShadow: '0 8px 32px rgba(31,38,135,0.25), inset 0 1px 0 rgba(255,255,255,0.4)',
};

export default function ThemeGlassmorphism() {
  const { progress, running, toggleRunning, dnd, toggleDnd } = useFocusSession();

  return (
    <div style={{ width: '600px', height: '400px', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #4f46e5, #0ea5e9)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', fontFamily: "'Inter', sans-serif", color: '#fff' }}>
      <div style={{ position: 'absolute', width: '220px', height: '220px', borderRadius: '50%', background: '#f472b6', top: '-50px', left: '40px', filter: 'blur(4px)' }} />
      <div style={{ position: 'absolute', width: '160px', height: '160px', borderRadius: '50%', background: '#facc15', bottom: '-40px', left: '230px' }} />
      <div style={{ position: 'absolute', width: '120px', height: '120px', borderRadius: '30px', background: '#22d3ee', top: '50px', right: '40px', transform: 'rotate(20deg)' }} />

      <div style={{ position: 'relative', width: '270px', padding: '24px', borderRadius: '24px', ...glass }}>
        <div style={{ fontSize: '11px', letterSpacing: '2px', opacity: 0.8 }}>DAILY FOCUS</div>
        <div style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>Deep Work</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '8px' }}>
          <span style={{ fontSize: '40px', fontWeight: 800, letterSpacing: '-1px' }}>{progress}%</span>
          <span style={{ fontSize: '12px', opacity: 0.8 }}>of today’s goal</span>
        </div>
        <div style={{ height: '8px', borderRadius: '8px', background: 'rgba(255,255,255,0.2)', marginBottom: '18px' }}>
          <div style={{ height: '100%', width: `${progress}%`, borderRadius: '8px', background: '#fff', boxShadow: '0 0 12px rgba(255,255,255,0.8)', transition: 'width 0.4s' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', borderRadius: '14px', background: 'rgba(255,255,255,0.1)', marginBottom: '14px' }}>
          <span style={{ fontSize: '13px' }}>Do not disturb</span>
          <button role="switch" aria-checked={dnd} aria-label="Do not disturb" onClick={toggleDnd} style={{ width: '44px', height: '24px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.5)', background: dnd ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.1)', padding: '2px', cursor: 'pointer', transition: 'background 0.2s' }}>
            <span style={{ display: 'block', width: '18px', height: '18px', borderRadius: '50%', background: '#fff', transform: `translateX(${dnd ? 20 : 0}px)`, transition: 'transform 0.25s', boxShadow: '0 2px 6px rgba(0,0,0,0.2)' }} />
          </button>
        </div>
        <button onClick={toggleRunning} style={{ width: '100%', height: '44px', borderRadius: '14px', cursor: 'pointer', fontFamily: 'inherit', fontSize: '14px', fontWeight: 600, color: running ? '#4f46e5' : '#fff', background: running ? '#fff' : 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.5)', transition: 'all 0.2s' }}>
          {running ? 'Pause session' : 'Start session'}
        </button>
      </div>

      <div style={{ position: 'relative', width: '170px', padding: '16px', borderRadius: '18px', ...glass }}>
        <div style={{ fontSize: '24px', fontWeight: 800 }}>Glassmorphism</div>
        <p style={{ fontSize: '12px', lineHeight: 1.6, marginTop: '8px', opacity: 0.9 }}>Frosted translucent panels with background blur, a light border and vivid shapes behind.</p>
      </div>
    </div>
  );
}

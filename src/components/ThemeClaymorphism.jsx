import useFocusSession from './useFocusSession';

const clay = (color, shadow) => ({
  background: color,
  boxShadow: `0 18px 30px -10px ${shadow}, inset -6px -8px 14px rgba(0,0,0,0.12), inset 6px 8px 14px rgba(255,255,255,0.65)`,
});

export default function ThemeClaymorphism() {
  const { progress, running, toggleRunning, dnd, toggleDnd } = useFocusSession();

  return (
    <div style={{ width: '600px', height: '400px', background: 'linear-gradient(135deg, #ffe5ec 0%, #e2ecff 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', fontFamily: "'Space Grotesk', sans-serif", color: '#3b2f63' }}>
      <div style={{ width: '280px', padding: '24px', borderRadius: '38px', ...clay('#c8b6ff', 'rgba(124,92,230,0.45)') }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
          <div style={{ width: '58px', height: '58px', borderRadius: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', ...clay('#ffd6a5', 'rgba(255,160,80,0.5)') }}>🎯</div>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 600, opacity: 0.7 }}>Daily focus</div>
            <div style={{ fontSize: '22px', fontWeight: 700 }}>Deep Work</div>
          </div>
        </div>

        <div style={{ padding: '14px', borderRadius: '24px', marginBottom: '16px', ...clay('#fdfcff', 'rgba(124,92,230,0.25)') }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 600, marginBottom: '8px' }}><span>Today</span><span>{progress}%</span></div>
          <div style={{ height: '14px', borderRadius: '14px', background: '#ece6ff', boxShadow: 'inset 2px 3px 6px rgba(0,0,0,0.12)' }}>
            <div style={{ height: '100%', width: `${progress}%`, borderRadius: '14px', ...clay('#9bf6c5', 'transparent'), transition: 'width 0.4s' }} />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button role="switch" aria-checked={dnd} aria-label="Do not disturb" onClick={toggleDnd} style={{ width: '56px', height: '52px', borderRadius: '20px', border: 'none', cursor: 'pointer', fontSize: '20px', ...clay(dnd ? '#ffadad' : '#fdfcff', dnd ? 'rgba(255,100,100,0.45)' : 'rgba(124,92,230,0.25)'), transition: 'background 0.2s' }}>{dnd ? '🔕' : '🔔'}</button>
          <button onClick={toggleRunning} style={{ flex: 1, height: '52px', borderRadius: '20px', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '15px', fontWeight: 700, color: '#3b2f63', ...clay(running ? '#ffd6a5' : '#a0e7e5', running ? 'rgba(255,160,80,0.5)' : 'rgba(40,180,170,0.45)'), transform: running ? 'scale(0.97)' : 'none', transition: 'transform 0.15s' }}>
            {running ? 'Pause session' : 'Start session'}
          </button>
        </div>
      </div>

      <div style={{ width: '170px' }}>
        <div style={{ fontSize: '30px', fontWeight: 700, lineHeight: 1 }}>Clay&shy;morphism</div>
        <p style={{ fontSize: '12px', lineHeight: 1.6, marginTop: '10px', opacity: 0.75 }}>Puffy, inflated 3D shapes in candy pastels: big radii, an outer drop shadow plus two inner shadows.</p>
      </div>
    </div>
  );
}

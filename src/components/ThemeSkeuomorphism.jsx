import useFocusSession from './useFocusSession';

export default function ThemeSkeuomorphism() {
  const { progress, running, toggleRunning, dnd, toggleDnd } = useFocusSession();

  return (
    <div style={{
      width: '600px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '36px',
      fontFamily: "'Libre Baskerville', serif",
      background: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.04) 0 2px, transparent 2px 4px), radial-gradient(circle at 30% 20%, #8b5a3c, #4a2c1a)',
    }}>
      <div style={{
        width: '290px', padding: '20px', borderRadius: '16px',
        background: 'linear-gradient(180deg, #f2f2f2 0%, #cfcfcf 45%, #e6e6e6 100%)',
        border: '1px solid #8a8a8a', boxShadow: '0 14px 28px rgba(0,0,0,0.55), inset 0 1px 0 #fff, inset 0 -2px 3px rgba(0,0,0,0.2)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <span style={{ fontSize: '15px', fontWeight: 700, color: '#333', textShadow: '0 1px 0 #fff' }}>Deep Work</span>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: running ? 'radial-gradient(circle at 35% 35%, #b6ff9e, #1f9d00)' : 'radial-gradient(circle at 35% 35%, #ff9e9e, #9d0000)', boxShadow: running ? '0 0 10px #4cff00' : '0 0 4px #ff0000', border: '1px solid #444' }} />
        </div>

        <div style={{ padding: '10px 14px', borderRadius: '8px', background: 'linear-gradient(180deg, #1a2a12, #2d4220)', boxShadow: 'inset 0 3px 8px rgba(0,0,0,0.8), 0 1px 0 #fff', marginBottom: '14px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: "'VT323', 'DM Mono', monospace", fontSize: '38px', color: '#9cff6b', textShadow: '0 0 8px rgba(156,255,107,0.7)', lineHeight: 1 }}>{String(progress).padStart(3, '0')}%</span>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: '#6fae4a' }}>OF DAILY GOAL</span>
        </div>

        <div style={{ height: '14px', borderRadius: '7px', background: '#555', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.7), 0 1px 0 #fff', overflow: 'hidden', marginBottom: '16px' }}>
          <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(180deg, #8fd3ff 0%, #2b8de0 50%, #1a6fb8 51%, #4aa8f0 100%)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6)', transition: 'width 0.4s' }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <span style={{ fontSize: '12px', color: '#333', textShadow: '0 1px 0 #fff' }}>Do not disturb</span>
          <button role="switch" aria-checked={dnd} aria-label="Do not disturb" onClick={toggleDnd} style={{
            position: 'relative', width: '76px', height: '28px', borderRadius: '14px', cursor: 'pointer', padding: 0, border: '1px solid #666', overflow: 'hidden',
            background: dnd ? 'linear-gradient(180deg, #2a7fd4, #59a8f5)' : 'linear-gradient(180deg, #d5d5d5, #f5f5f5)',
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.45)', fontFamily: "'Inter', sans-serif", fontSize: '10px', fontWeight: 700,
          }}>
            <span style={{ position: 'absolute', left: dnd ? '10px' : 'auto', right: dnd ? 'auto' : '10px', top: '7px', color: dnd ? '#fff' : '#777', textShadow: dnd ? '0 -1px 0 rgba(0,0,0,0.4)' : '0 1px 0 #fff' }}>{dnd ? 'ON' : 'OFF'}</span>
            <span style={{ position: 'absolute', top: '1px', left: dnd ? '48px' : '1px', width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(180deg, #fff, #c8c8c8)', boxShadow: '0 1px 3px rgba(0,0,0,0.6)', transition: 'left 0.2s' }} />
          </button>
        </div>

        <button onClick={toggleRunning} style={{
          width: '100%', height: '44px', borderRadius: '10px', cursor: 'pointer', fontFamily: 'inherit', fontSize: '14px', fontWeight: 700, color: '#fff',
          border: '1px solid #0b3d0b', textShadow: '0 -1px 0 rgba(0,0,0,0.5)',
          background: running ? 'linear-gradient(180deg, #c0392b, #e74c3c)' : 'linear-gradient(180deg, #7ed957 0%, #3fa521 50%, #2e8c14 51%, #4cbb2a 100%)',
          boxShadow: running ? 'inset 0 3px 6px rgba(0,0,0,0.45)' : 'inset 0 1px 0 rgba(255,255,255,0.6), 0 3px 4px rgba(0,0,0,0.4)',
        }}>{running ? 'Pause Session' : 'Start Session'}</button>
      </div>

      <div style={{ width: '170px', padding: '16px', background: '#f4ead5', borderRadius: '4px', boxShadow: '0 8px 16px rgba(0,0,0,0.5)', transform: 'rotate(2deg)', backgroundImage: 'repeating-linear-gradient(180deg, transparent 0 21px, #c9d8e8 21px 22px)' }}>
        <div style={{ fontSize: '16px', fontWeight: 700, color: '#3a2a1a' }}>Skeuomorphism</div>
        <p style={{ fontSize: '11px', lineHeight: '22px', color: '#4a3a2a', marginTop: '6px' }}>Interfaces that imitate real materials: brushed metal, glossy buttons, LCD screens and paper.</p>
      </div>
    </div>
  );
}

import useFocusSession from './useFocusSession';

export default function ThemeVaporwave() {
  const { progress, running, toggleRunning, dnd, toggleDnd } = useFocusSession();

  return (
    <div style={{ width: '600px', height: '400px', position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #1a0033 0%, #4b0a6b 45%, #ff6ec7 70%, #ffb86b 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '32px', fontFamily: "'VT323', 'DM Mono', monospace", color: '#fff' }}>
      <style>{`@keyframes uaGridMove { from { background-position: 0 0; } to { background-position: 0 40px; } }`}</style>
      <div style={{ position: 'absolute', left: '50%', top: '120px', width: '240px', height: '240px', marginLeft: '-120px', borderRadius: '50%', background: 'linear-gradient(180deg, #fff275 0%, #ff8c42 45%, #ff3c8e 100%)', maskImage: 'linear-gradient(180deg, #000 0 50%, transparent 50% 53%, #000 53% 61%, transparent 61% 65%, #000 65% 72%, transparent 72% 77%, #000 77% 83%, transparent 83% 89%, #000 89%)', WebkitMaskImage: 'linear-gradient(180deg, #000 0 50%, transparent 50% 53%, #000 53% 61%, transparent 61% 65%, #000 65% 72%, transparent 72% 77%, #000 77% 83%, transparent 83% 89%, #000 89%)', opacity: 0.85 }} />
      <div style={{ position: 'absolute', left: '-50%', right: '-50%', bottom: 0, height: '160px', transform: 'perspective(260px) rotateX(60deg)', transformOrigin: 'bottom', backgroundImage: 'linear-gradient(#ff6ec7 2px, transparent 2px), linear-gradient(90deg, #ff6ec7 2px, transparent 2px)', backgroundSize: '40px 40px', animation: 'uaGridMove 1.2s linear infinite', opacity: 0.8 }} />

      <div style={{ position: 'relative', width: '270px', background: '#c0c0c0', borderStyle: 'solid', borderWidth: '2px', borderColor: '#fff #404040 #404040 #fff', boxShadow: '6px 6px 0 rgba(26,0,51,0.6)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3px 6px', background: 'linear-gradient(90deg, #ff6ec7, #7b2cbf)', fontSize: '18px' }}>
          <span style={{ letterSpacing: '2px' }}>DEEP_WORK.exe</span><span>✕</span>
        </div>
        <div style={{ padding: '14px', color: '#1a0033' }}>
          <div style={{ fontSize: '50px', lineHeight: 0.9, color: '#01cdfe', textShadow: '3px 3px 0 #ff6ec7, 6px 6px 0 #1a0033' }}>{progress}%</div>
          <div style={{ fontSize: '18px', letterSpacing: '6px', marginBottom: '8px' }}>aesthetic focus</div>
          <div style={{ height: '16px', background: '#fff', borderStyle: 'solid', borderWidth: '2px', borderColor: '#404040 #fff #fff #404040', marginBottom: '12px' }}>
            <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg, #01cdfe, #ff6ec7)', transition: 'width 0.4s' }} />
          </div>
          <button role="switch" aria-checked={dnd} onClick={toggleDnd} style={{ display: 'flex', width: '100%', justifyContent: 'space-between', padding: '4px 8px', marginBottom: '10px', background: dnd ? '#01cdfe' : '#c0c0c0', borderStyle: 'solid', borderWidth: '2px', borderColor: '#fff #404040 #404040 #fff', cursor: 'pointer', fontFamily: 'inherit', fontSize: '18px', letterSpacing: '2px', color: '#1a0033' }}>
            DO NOT DISTURB <span>{dnd ? '[ON]' : '[OFF]'}</span>
          </button>
          <button onClick={toggleRunning} style={{ width: '100%', height: '40px', background: running ? '#7b2cbf' : '#ff6ec7', color: '#fff', borderStyle: 'solid', borderWidth: '2px', borderColor: running ? '#404040 #fff #fff #404040' : '#fff #404040 #404040 #fff', cursor: 'pointer', fontFamily: 'inherit', fontSize: '22px', letterSpacing: '4px' }}>
            {running ? '▌▌ PAUSE' : '▶ START'}
          </button>
        </div>
      </div>

      <div style={{ position: 'relative', width: '170px' }}>
        <div style={{ fontSize: '46px', lineHeight: 0.9, color: '#01cdfe', textShadow: '3px 3px 0 #ff6ec7' }}>VAPOR<br />WAVE</div>
        <p style={{ fontSize: '18px', lineHeight: 1.1, marginTop: '8px', color: '#fff' }}>Nostalgic 80s/90s net art: sunsets, neon grids, Win95 windows and w i d e text.</p>
      </div>
    </div>
  );
}

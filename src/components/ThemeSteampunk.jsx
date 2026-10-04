import useFocusSession from './useFocusSession';

const BRASS = 'linear-gradient(145deg, #f3d38a 0%, #b8862b 40%, #7a5418 70%, #d6a94c 100%)';
const COPPER = 'linear-gradient(145deg, #f0a77a, #b5562c 50%, #6e2d14)';

function Gear({ size, teeth = 10, style }) {
  const tooth = 360 / teeth;
  return (
    <div style={{ position: 'absolute', width: size, height: size, borderRadius: '50%', background: `repeating-conic-gradient(#8a6420 0 ${tooth / 2}deg, transparent ${tooth / 2}deg ${tooth}deg)`, ...style }}>
      <div style={{ position: 'absolute', inset: size * 0.12, borderRadius: '50%', background: BRASS, boxShadow: 'inset 0 0 6px rgba(0,0,0,0.5)' }} />
      <div style={{ position: 'absolute', inset: size * 0.38, borderRadius: '50%', background: '#2a1a0c' }} />
    </div>
  );
}

const rivet = { position: 'absolute', width: '9px', height: '9px', borderRadius: '50%', background: 'radial-gradient(circle at 35% 35%, #fff2c4, #9a6b1e 60%, #4a300a)' };

export default function ThemeSteampunk() {
  const { progress, running, toggleRunning, dnd, toggleDnd } = useFocusSession();
  const angle = -120 + (progress / 100) * 240;

  return (
    <div style={{ width: '600px', height: '400px', position: 'relative', overflow: 'hidden', background: 'radial-gradient(circle at 50% 40%, #4a2e1a, #1e120a)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '30px', fontFamily: "'Libre Baskerville', serif", color: '#f3e2b8' }}>
      <style>{`@keyframes uaCog { to { transform: rotate(1turn); } }`}</style>
      <Gear size={130} teeth={12} style={{ left: '-40px', top: '-40px', animation: running ? 'uaCog 6s linear infinite' : 'none' }} />
      <Gear size={80} teeth={8} style={{ left: '70px', top: '40px', animation: running ? 'uaCog 4s linear infinite reverse' : 'none' }} />
      <Gear size={110} teeth={10} style={{ right: '-30px', bottom: '-30px', animation: running ? 'uaCog 5s linear infinite reverse' : 'none' }} />

      <div style={{ position: 'relative', width: '280px', padding: '20px 22px', borderRadius: '14px', background: 'linear-gradient(180deg, #3a2414, #24160b)', border: '6px solid transparent', backgroundClip: 'padding-box', boxShadow: '0 0 0 6px #9a6b1e, 0 0 0 8px #4a300a, 0 18px 40px rgba(0,0,0,0.7)' }}>
        {[{ top: '6px', left: '6px' }, { top: '6px', right: '6px' }, { bottom: '6px', left: '6px' }, { bottom: '6px', right: '6px' }].map((p, i) => <span key={i} style={{ ...rivet, ...p }} />)}
        <div style={{ textAlign: 'center', fontSize: '9px', letterSpacing: '2px', whiteSpace: 'nowrap', color: '#d6a94c' }}>THE FOCUS ENGINE · MK IV</div>
        <div style={{ textAlign: 'center', fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 700, marginBottom: '10px' }}>Deep Work</div>

        <div style={{ position: 'relative', width: '130px', height: '130px', margin: '0 auto 12px', borderRadius: '50%', background: BRASS, padding: '7px', boxShadow: '0 4px 10px rgba(0,0,0,0.6)' }}>
          <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '50%', background: 'radial-gradient(circle, #fbf1d6, #e6d2a2)', boxShadow: 'inset 0 0 10px rgba(80,50,10,0.6)' }}>
            {Array.from({ length: 11 }, (_, i) => (
              <span key={i} style={{ position: 'absolute', left: '50%', top: '50%', width: '2px', height: '8px', background: '#3a2414', transform: `translate(-50%, -50%) rotate(${-120 + i * 24}deg) translateY(-48px)` }} />
            ))}
            <span style={{ position: 'absolute', left: '50%', bottom: '28px', transform: 'translateX(-50%)', fontSize: '13px', fontWeight: 700, color: '#3a2414' }}>{progress}</span>
            <span style={{ position: 'absolute', left: '50%', top: '50%', width: '3px', height: '50px', marginLeft: '-1.5px', background: '#7a1f1f', transformOrigin: '50% 100%', transform: `translateY(-100%) rotate(${angle}deg)`, transition: 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)', borderRadius: '2px' }} />
            <span style={{ position: 'absolute', left: '50%', top: '50%', width: '14px', height: '14px', margin: '-7px', borderRadius: '50%', background: COPPER }} />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button role="switch" aria-checked={dnd} aria-label="Do not disturb" onClick={toggleDnd} style={{ position: 'relative', width: '54px', height: '44px', borderRadius: '8px', border: '2px solid #4a300a', background: '#24160b', cursor: 'pointer', padding: 0 }}>
            <span style={{ position: 'absolute', left: '50%', bottom: '8px', width: '6px', height: '26px', marginLeft: '-3px', borderRadius: '3px', background: BRASS, transformOrigin: '50% 100%', transform: `rotate(${dnd ? 30 : -30}deg)`, transition: 'transform 0.3s' }} />
            <span style={{ position: 'absolute', left: '50%', bottom: '4px', width: '16px', height: '8px', marginLeft: '-8px', borderRadius: '4px 4px 0 0', background: COPPER }} />
          </button>
          <button onClick={toggleRunning} style={{ flex: 1, height: '44px', borderRadius: '8px', border: '2px solid #4a300a', background: running ? COPPER : BRASS, cursor: 'pointer', fontFamily: "'Playfair Display', serif", fontSize: '15px', fontWeight: 700, color: '#2a1a0c', textShadow: '0 1px 0 rgba(255,240,200,0.5)', boxShadow: 'inset 0 2px 0 rgba(255,240,200,0.5), 0 3px 6px rgba(0,0,0,0.5)' }}>
            {running ? 'Release the Steam' : 'Engage the Engine'}
          </button>
        </div>
        <div style={{ fontSize: '10px', textAlign: 'center', marginTop: '8px', color: '#c9a76a', fontStyle: 'italic' }}>Silence lever: {dnd ? 'engaged' : 'released'}</div>
      </div>

      <div style={{ position: 'relative', width: '160px' }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '30px', fontWeight: 700, color: '#d6a94c', lineHeight: 1 }}>Steampunk</div>
        <p style={{ fontSize: '11px', lineHeight: 1.6, marginTop: '8px', color: '#e2c992' }}>Victorian machinery: brass and copper, rivets, turning gears, pressure gauges and levers.</p>
      </div>
    </div>
  );
}

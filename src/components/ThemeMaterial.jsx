import { useRef, useState } from 'react';
import useFocusSession from './useFocusSession';

const PRIMARY = '#6750a4';

export default function ThemeMaterial() {
  const { progress, running, toggleRunning, dnd, toggleDnd } = useFocusSession();
  const [ripples, setRipples] = useState([]);
  const nextId = useRef(0);

  const onPress = e => {
    const r = e.currentTarget.getBoundingClientRect();
    const scale = r.width / e.currentTarget.offsetWidth;
    const id = nextId.current++;
    setRipples(rs => [...rs, { id, x: (e.clientX - r.left) / scale, y: (e.clientY - r.top) / scale }]);
    setTimeout(() => setRipples(rs => rs.filter(x => x.id !== id)), 600);
    toggleRunning();
  };

  return (
    <div style={{ width: '600px', height: '400px', background: '#fef7ff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', fontFamily: "'Inter', sans-serif", color: '#1d1b20' }}>
      <style>{`@keyframes uaRipple { from { transform: translate(-50%, -50%) scale(0); opacity: 0.35; } to { transform: translate(-50%, -50%) scale(1); opacity: 0; } }`}</style>
      <div style={{ width: '280px', padding: '20px', borderRadius: '16px', background: '#f3edf7', boxShadow: '0 1px 3px rgba(0,0,0,0.15), 0 4px 8px 3px rgba(0,0,0,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#eaddff', color: '#21005d', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>DW</div>
          <div>
            <div style={{ fontSize: '16px', fontWeight: 500 }}>Deep Work</div>
            <div style={{ fontSize: '12px', color: '#49454f' }}>Daily focus · {progress}% of goal</div>
          </div>
        </div>

        <div role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} style={{ display: 'flex', gap: '4px', height: '4px', marginBottom: '20px' }}>
          <div style={{ width: `${progress}%`, background: PRIMARY, borderRadius: '2px', transition: 'width 0.4s' }} />
          <div style={{ flex: 1, background: '#e8def8', borderRadius: '2px' }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <span style={{ fontSize: '14px' }}>Do not disturb</span>
          <button role="switch" aria-checked={dnd} aria-label="Do not disturb" onClick={toggleDnd} style={{
            width: '52px', height: '32px', borderRadius: '16px', padding: 0, cursor: 'pointer', position: 'relative',
            border: dnd ? 'none' : '2px solid #79747e', background: dnd ? PRIMARY : '#e6e0e9', transition: 'background 0.2s',
          }}>
            <span style={{
              position: 'absolute', top: '50%', left: dnd ? '24px' : '6px', width: dnd ? '24px' : '16px', height: dnd ? '24px' : '16px',
              borderRadius: '50%', background: dnd ? '#fff' : '#79747e', transform: 'translateY(-50%)', transition: 'all 0.2s',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: PRIMARY,
            }}>{dnd && '✓'}</span>
          </button>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={onPress} style={{ position: 'relative', overflow: 'hidden', flex: 1, height: '40px', borderRadius: '20px', border: 'none', background: running ? '#e8def8' : PRIMARY, color: running ? '#1d192b' : '#fff', fontFamily: 'inherit', fontSize: '14px', fontWeight: 500, cursor: 'pointer', letterSpacing: '0.1px', transition: 'background 0.2s' }}>
            {ripples.map(r => <span key={r.id} style={{ position: 'absolute', left: r.x, top: r.y, width: '240px', height: '240px', borderRadius: '50%', background: running ? PRIMARY : '#fff', animation: 'uaRipple 0.6s ease-out forwards', pointerEvents: 'none' }} />)}
            <span style={{ position: 'relative' }}>{running ? 'Pause session' : 'Start session'}</span>
          </button>
          <button aria-label="Session settings" style={{ width: '40px', height: '40px', borderRadius: '20px', border: '1px solid #79747e', background: 'transparent', color: PRIMARY, fontSize: '16px', cursor: 'pointer' }}>⋮</button>
        </div>
      </div>

      <div style={{ width: '170px' }}>
        <div style={{ fontSize: '28px', fontWeight: 500, letterSpacing: '-0.5px' }}>Material Design</div>
        <p style={{ fontSize: '12px', lineHeight: 1.6, marginTop: '8px', color: '#49454f' }}>Google’s system: tonal surfaces, elevation, pill buttons and ink ripples that respond to touch.</p>
        <div style={{ display: 'flex', gap: '6px', marginTop: '12px' }}>
          {[PRIMARY, '#625b71', '#7d5260', '#eaddff'].map(c => <span key={c} style={{ width: '22px', height: '22px', borderRadius: '50%', background: c }} />)}
        </div>
      </div>
    </div>
  );
}

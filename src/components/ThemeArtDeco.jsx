import useFocusSession from './useFocusSession';

const GOLD = '#d4af37';

export default function ThemeArtDeco() {
  const { progress, running, toggleRunning, dnd, toggleDnd } = useFocusSession();

  return (
    <div style={{ width: '600px', height: '400px', position: 'relative', overflow: 'hidden', background: 'repeating-conic-gradient(from 0deg at 50% 115%, #0f2a2a 0 6deg, #0b1f1f 6deg 12deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '36px', fontFamily: "'Poiret One', 'Playfair Display', serif", color: GOLD }}>
      <div style={{ position: 'relative', width: '270px', padding: '6px', background: '#0b0b0b', border: `2px solid ${GOLD}` }}>
        <div style={{ border: `1px solid ${GOLD}`, padding: '20px 20px 18px', textAlign: 'center', position: 'relative' }}>
          {[{ top: '-1px', left: '-1px' }, { top: '-1px', right: '-1px' }, { bottom: '-1px', left: '-1px' }, { bottom: '-1px', right: '-1px' }].map((pos, i) => (
            <span key={i} style={{ position: 'absolute', width: '16px', height: '16px', background: '#0b0b0b', border: `1px solid ${GOLD}`, transform: 'rotate(45deg) scale(0.7)', ...pos }} />
          ))}
          <div style={{ fontSize: '11px', letterSpacing: '6px' }}>✦ DAILY FOCUS ✦</div>
          <div style={{ fontSize: '30px', letterSpacing: '4px', margin: '6px 0 4px', fontWeight: 400 }}>DEEP WORK</div>
          <div style={{ height: '1px', background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`, margin: '8px 0 12px' }} />
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '46px', fontWeight: 400, lineHeight: 1 }}>{progress}<span style={{ fontSize: '20px' }}>%</span></div>
          <div style={{ display: 'flex', gap: '3px', justifyContent: 'center', margin: '12px 0 14px' }}>
            {Array.from({ length: 20 }, (_, i) => (
              <span key={i} style={{ width: '8px', height: i < progress / 5 ? '14px' : '6px', background: i < progress / 5 ? GOLD : '#3a3320', alignSelf: 'flex-end', transition: 'all 0.3s' }} />
            ))}
          </div>
          <button role="switch" aria-checked={dnd} onClick={toggleDnd} style={{ display: 'flex', width: '100%', justifyContent: 'space-between', padding: '8px 4px', marginBottom: '12px', border: 'none', borderTop: `1px solid ${GOLD}55`, borderBottom: `1px solid ${GOLD}55`, background: 'none', color: GOLD, cursor: 'pointer', fontFamily: 'inherit', fontSize: '13px', letterSpacing: '3px' }}>
            DO NOT DISTURB <span>{dnd ? '◆ ON' : '◇ OFF'}</span>
          </button>
          <button onClick={toggleRunning} style={{ width: '100%', height: '42px', border: `2px solid ${GOLD}`, background: running ? 'transparent' : `linear-gradient(180deg, #f3d77a, ${GOLD} 50%, #a8862a)`, color: running ? GOLD : '#0b0b0b', cursor: 'pointer', fontFamily: 'inherit', fontSize: '14px', fontWeight: 700, letterSpacing: '5px' }}>
            {running ? 'PAUSE' : 'COMMENCE'}
          </button>
        </div>
      </div>

      <div style={{ position: 'relative', width: '160px', textAlign: 'center' }}>
        <div style={{ fontSize: '36px', letterSpacing: '6px', lineHeight: 1.1 }}>ART<br />DECO</div>
        <div style={{ height: '1px', background: GOLD, margin: '10px 20px' }} />
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', lineHeight: 1.6, color: '#c9b37a' }}>1920s glamour: black and gold, sunbursts, stepped geometry, symmetry and tall letterspaced capitals.</p>
      </div>
    </div>
  );
}

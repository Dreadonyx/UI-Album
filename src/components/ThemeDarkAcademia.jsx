import useFocusSession from './useFocusSession';

const INK = '#2b2118';
const OX = '#7a1f1f';

export default function ThemeDarkAcademia() {
  const { progress, running, toggleRunning, dnd, toggleDnd } = useFocusSession();
  const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'][Math.min(9, Math.floor(progress / 10))];

  return (
    <div style={{
      width: '600px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '30px',
      fontFamily: "'Libre Baskerville', serif", color: '#e9dcc0',
      background: 'linear-gradient(180deg, rgba(20,12,6,0.55), rgba(20,12,6,0.15) 40%, rgba(20,12,6,0.6)), repeating-linear-gradient(90deg, #5a3a26 0 22px, #3a2618 22px 25px, #6b4630 25px 46px, #2e1d12 46px 49px, #4e3220 49px 74px)',
    }}>
      <div style={{ position: 'relative', width: '280px', padding: '22px 24px', background: 'linear-gradient(180deg, #efe3c8, #e3d2ae)', color: INK, boxShadow: '0 18px 40px rgba(0,0,0,0.6), inset 0 0 40px rgba(120,80,30,0.25)', borderRadius: '2px' }}>
        <div style={{ textAlign: 'center', fontSize: '10px', letterSpacing: '3px', color: '#6b5640' }}>CHAPTER {roman} · MMXXVI</div>
        <div style={{ textAlign: 'center', fontFamily: "'Playfair Display', serif", fontSize: '28px', fontStyle: 'italic', margin: '6px 0 4px' }}>Deep Work</div>
        <div style={{ textAlign: 'center', color: '#8a6d4b', fontSize: '14px', marginBottom: '10px' }}>❦</div>
        <p style={{ fontSize: '11px', lineHeight: 1.7, fontStyle: 'italic', textAlign: 'center', color: '#4a3b2c', marginBottom: '12px' }}>“{progress} of a hundred pages read in quiet devotion.”</p>
        <div style={{ height: '6px', border: `1px solid ${INK}`, marginBottom: '14px', padding: '1px' }}>
          <div style={{ height: '100%', width: `${progress}%`, background: INK, transition: 'width 0.4s' }} />
        </div>
        <button role="switch" aria-checked={dnd} onClick={toggleDnd} style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', marginBottom: '14px', border: 'none', borderTop: '1px solid #b59e7a', borderBottom: '1px solid #b59e7a', background: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '12px', color: INK }}>
          <span style={{ fontVariant: 'small-caps', letterSpacing: '1px' }}>Silence the bells</span>
          <span style={{ fontStyle: 'italic' }}>{dnd ? 'Yes' : 'No'}</span>
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button onClick={toggleRunning} aria-label={running ? 'Pause session' : 'Start session'} style={{ width: '54px', height: '54px', borderRadius: '50%', border: 'none', cursor: 'pointer', flexShrink: 0, background: `radial-gradient(circle at 35% 35%, #b23a3a, ${OX} 60%, #4d1010)`, boxShadow: 'inset 0 0 0 5px rgba(0,0,0,0.18), 0 3px 6px rgba(0,0,0,0.4)', color: '#f3d9b0', fontFamily: "'Playfair Display', serif", fontSize: '20px', fontStyle: 'italic' }}>{running ? 'II' : 'Ω'}</button>
          <span style={{ fontSize: '12px', fontStyle: 'italic', color: '#4a3b2c' }}>{running ? 'The study is in session…' : 'Break the seal to begin.'}</span>
        </div>
      </div>

      <div style={{ width: '170px' }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '30px', fontStyle: 'italic', lineHeight: 1.05 }}>Dark Academia</div>
        <p style={{ fontSize: '11px', lineHeight: 1.7, marginTop: '8px', color: '#cbb894' }}>Old libraries and candlelight: parchment, serif italics, ornaments, wax seals and muted browns.</p>
      </div>
    </div>
  );
}

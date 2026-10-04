import useFocusSession from './useFocusSession';

export default function ThemeMaximalism() {
  const { progress, running, toggleRunning, dnd, toggleDnd } = useFocusSession();

  return (
    <div style={{ width: '600px', height: '400px', position: 'relative', overflow: 'hidden', background: 'repeating-linear-gradient(90deg, #ff3d7f 0 30px, #ff8c42 30px 60px)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '26px', fontFamily: "'Fraunces', serif", color: '#1b0a3c' }}>
      <div style={{ position: 'absolute', left: '-40px', top: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(#ffe14d 30%, transparent 31%) 0 0 / 20px 20px, #2b59ff' }} />
      <div style={{ position: 'absolute', right: '-30px', bottom: '-30px', width: '180px', height: '180px', background: 'conic-gradient(#000 25%, #fff 0 50%, #000 0 75%, #fff 0) 0 0 / 30px 30px', transform: 'rotate(15deg)' }} />

      <div style={{ position: 'relative', width: '290px', padding: '20px', background: '#fff1d6', borderRadius: '30px 4px 30px 4px', border: '5px double #1b0a3c', boxShadow: '12px 12px 0 #2b59ff, 24px 24px 0 #ffe14d' }}>
        <div style={{ position: 'absolute', top: '-18px', left: '-14px', padding: '6px 12px', background: '#00d1a0', borderRadius: '50%', border: '3px solid #1b0a3c', fontFamily: "'Bungee', 'Syne', sans-serif", fontSize: '11px', transform: 'rotate(-14deg)' }}>WOW!</div>
        <div style={{ fontSize: '11px', fontFamily: "'DM Mono', monospace", letterSpacing: '2px' }}>★ DAILY ★ FOCUS ★</div>
        <div style={{ fontSize: '32px', fontWeight: 900, fontStyle: 'italic', lineHeight: 1, margin: '4px 0 10px' }}>Deep <span style={{ fontFamily: "'Bungee', 'Syne', sans-serif", fontStyle: 'normal', color: '#ff3d7f' }}>Work</span></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: '54px', lineHeight: 0.8, color: '#2b59ff' }}>{progress}</span>
          <div style={{ flex: 1, height: '20px', borderRadius: '10px', border: '3px solid #1b0a3c', background: 'repeating-linear-gradient(45deg, #fff 0 5px, #ffd6e7 5px 10px)', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg, #00d1a0, #2b59ff, #ff3d7f)', transition: 'width 0.4s' }} />
          </div>
        </div>
        <button role="switch" aria-checked={dnd} onClick={toggleDnd} style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', marginBottom: '12px', borderRadius: '999px', border: '3px dashed #1b0a3c', background: dnd ? '#ffe14d' : '#fff', cursor: 'pointer', fontFamily: "'Syne', sans-serif", fontSize: '13px', fontWeight: 800 }}>
          Do not disturb <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: '18px', fontStyle: 'italic' }}>{dnd ? 'yes!' : 'nope'}</span>
        </button>
        <button onClick={toggleRunning} style={{ width: '100%', height: '48px', borderRadius: '14px', border: '3px solid #1b0a3c', background: running ? '#1b0a3c' : 'linear-gradient(90deg, #ff3d7f, #ff8c42, #ffe14d)', color: running ? '#ffe14d' : '#1b0a3c', cursor: 'pointer', fontFamily: "'Bungee', 'Syne', sans-serif", fontSize: '15px' }}>
          {running ? 'Pause it ✋' : 'Let’s go!!! ✺'}
        </button>
      </div>

      <div style={{ position: 'relative', width: '170px', padding: '14px', background: '#1b0a3c', color: '#ffe14d', borderRadius: '50% 50% 12px 12px / 30% 30% 12px 12px', textAlign: 'center' }}>
        <div style={{ fontSize: '26px', fontWeight: 900, fontStyle: 'italic' }}>Maximal&shy;ism</div>
        <p style={{ fontSize: '11px', lineHeight: 1.5, marginTop: '6px', fontFamily: "'Inter', sans-serif", color: '#fff' }}>More is more: clashing patterns, layered shadows, mixed typefaces and stickers everywhere.</p>
      </div>
    </div>
  );
}

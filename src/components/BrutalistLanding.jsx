export default function BrutalistLanding() {
  return (
    <div style={{
      width: '600px', height: '400px',
      background: '#f5e642',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'space-between',
      fontFamily: "'DM Mono', monospace",
      overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '16px 28px', borderBottom: '3px solid #000',
      }}>
        <span style={{ fontSize: '14px', fontWeight: 700, color: '#000' }}>BRUT.CO</span>
        <div style={{ display: 'flex', gap: '16px' }}>
          {['Work', 'Info', 'Contact'].map(l => (
            <span key={l} style={{ fontSize: '11px', color: '#000', textDecoration: 'underline', textUnderlineOffset: '3px', cursor: 'pointer' }}>{l}</span>
          ))}
        </div>
      </div>
      <div style={{ padding: '20px 28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{
          fontSize: '48px', fontWeight: 900, fontFamily: "'Playfair Display', serif",
          color: '#000', lineHeight: 0.95, letterSpacing: '-2px', textTransform: 'uppercase',
        }}>Design<br/>Without<br/>Rules.</div>
        <div style={{ marginTop: '16px', fontSize: '11px', color: 'rgba(0,0,0,0.5)', maxWidth: '280px', lineHeight: 1.5 }}>
          Break conventions. Embrace chaos. Build what matters with raw, unfiltered intention.
        </div>
      </div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '14px 28px', borderTop: '3px solid #000', background: '#000', color: '#f5e642',
      }}>
        <span style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase' }}>Est. 2024</span>
        <button style={{
          fontFamily: "'DM Mono', monospace", fontSize: '10px', padding: '8px 20px',
          border: '2px solid #f5e642', background: 'transparent', color: '#f5e642',
          cursor: 'pointer', letterSpacing: '1px', textTransform: 'uppercase',
        }}>Enter ↗</button>
      </div>
    </div>
  );
}

export default function MinimalFooter() {
  return (
    <div style={{
      width: '600px', height: '400px',
      background: '#0a0a14',
      padding: '60px 40px',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'space-between',
      fontFamily: "'Inter', sans-serif",
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ maxWidth: '200px' }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>ALBUM.</div>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', lineHeight: 1.6 }}>Curating the world's most elegant UI components for creators.</p>
        </div>
        <div style={{ display: 'flex', gap: '60px' }}>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '20px' }}>Product</div>
            {['Components', 'Library', 'Figma', 'Pro'].map(l => (
              <div key={l} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', marginBottom: '10px', cursor: 'pointer' }}>{l}</div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '20px' }}>Support</div>
            {['Docs', 'Discord', 'Twitter', 'Status'].map(l => (
              <div key={l} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', marginBottom: '10px', cursor: 'pointer' }}>{l}</div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)' }}>© 2024 Album UI Collection. All rights reserved.</div>
        <div style={{ display: 'flex', gap: '20px' }}>
          {['TOS', 'Privacy', 'Cookies'].map(l => (
            <span key={l} style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)', cursor: 'pointer' }}>{l}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  const products = [
    { name: 'Phantom One', price: '$899', color: '#8b5cf6', img: '◈' },
    { name: 'Aura Buds', price: '$199', color: '#10b981', img: '◎' },
    { name: 'Nexus Watch', price: '$349', color: '#ec4899', img: '◉' },
  ];

  return (
    <div style={{
      width: '600px', height: '400px',
      background: '#ffffff',
      display: 'flex', gap: '20px', padding: '30px',
      fontFamily: "'DM Mono', monospace",
    }}>
      {products.map((p, i) => (
        <div key={i} style={{
          flex: 1, background: '#f8f9fa', borderRadius: '24px',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'space-between', padding: '30px 20px',
          transition: 'transform 0.3s ease', cursor: 'pointer',
          border: '1px solid rgba(0,0,0,0.05)',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-8px)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <div style={{ fontSize: '48px', color: p.color, opacity: 0.8 }}>{p.img}</div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#1a1a1a', marginBottom: '4px' }}>{p.name}</div>
            <div style={{ fontSize: '12px', color: 'rgba(0,0,0,0.4)' }}>From {p.price}</div>
          </div>
          <button style={{
            background: '#1a1a1a', color: '#fff', border: 'none',
            padding: '8px 20px', borderRadius: '20px', fontSize: '10px',
            textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer', fontFamily: 'inherit',
          }}>Buy</button>
        </div>
      ))}
    </div>
  );
}

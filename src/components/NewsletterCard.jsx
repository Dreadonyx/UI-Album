export default function NewsletterCard() {
  return (
    <div style={{
      width: '600px', height: '400px',
      background: '#07070f',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Inter', sans-serif",
    }}>
      <div style={{
        width: '400px', padding: '40px',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
        border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', width: '100px', height: '100px', background: '#8b5cf6', borderRadius: '50%', filter: 'blur(60px)', top: '-20px', left: '-20px', opacity: 0.2 }} />
        
        <div style={{ fontSize: '42px', marginBottom: '20px' }}>📬</div>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '24px', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>Join the Newsletter</h3>
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, marginBottom: '24px' }}>
          Weekly insights on UI/UX trends, direct to your inbox. No spam, ever.
        </p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input 
            type="email"
            placeholder="your@email.com"
            aria-label="Email address"
            style={{
              fontFamily: 'inherit',
              flex: 1, padding: '12px 16px', borderRadius: '12px',
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff', outline: 'none', fontSize: '14px',
            }}
          />
          <button style={{
            padding: '12px 24px', background: '#8b5cf6', color: '#fff',
            border: 'none', borderRadius: '12px', fontWeight: 600, fontFamily: 'inherit',
            cursor: 'pointer', boxShadow: '0 4px 12px rgba(139,92,246,0.3)',
          }}>Subscribe</button>
        </div>
        <div style={{ marginTop: '20px', fontSize: '11px', color: 'rgba(255,255,255,0.2)' }}>
          Join 5,000+ designers and developers.
        </div>
      </div>
    </div>
  );
}

export default function ArticleDetail() {
  return (
    <div style={{
      width: '600px', height: '400px',
      background: '#fcfcf9',
      padding: '40px 60px',
      fontFamily: "'Lora', serif",
      color: '#1a1a1a',
      overflowY: 'auto',
    }}>
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '2px', color: '#8b5cf6', marginBottom: '16px' }}>Design Theory — Vol. 04</div>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '32px', fontWeight: 800, lineHeight: 1.1, marginBottom: '20px' }}>
        The Emotional Impact of Negative Space
      </h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#eee' }} />
        <div style={{ fontSize: '12px', fontWeight: 500 }}>Julian Thorne <span style={{ color: 'rgba(0,0,0,0.3)', fontWeight: 400 }}>in</span> Interface</div>
        <div style={{ fontSize: '12px', color: 'rgba(0,0,0,0.3)' }}>• 8 min read</div>
      </div>
      <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(0,0,0,0.8)', marginBottom: '20px' }}>
        Negative space is not empty space. It is a powerful tool that directs the user's attention, establishes hierarchy, and provides breathing room for complex information.
      </p>
      <div style={{ borderLeft: '3px solid #8b5cf6', paddingLeft: '20px', fontStyle: 'italic', fontSize: '16px', margin: '30px 0', color: '#1a1a1a' }}>
        "Space is the breath of art." — Frank Lloyd Wright
      </div>
      <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(0,0,0,0.8)' }}>
        When we eliminate clutter, we allow the core message to resonate. Modern minimalism is as much about what we leave out as what we put in.
      </p>
    </div>
  );
}

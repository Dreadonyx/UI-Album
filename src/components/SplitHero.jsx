export default function SplitHero() {
  return (
    <div style={{
      width: '600px', height: '400px',
      background: '#ffffff',
      display: 'flex',
      fontFamily: "'Inter', sans-serif",
      overflow: 'hidden',
    }}>
      <div style={{ flex: 1, padding: '60px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '12px', fontWeight: 600, color: '#8b5cf6', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px' }}>Spring 2024 Collection</div>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: '42px', fontWeight: 800, color: '#1a1a1a', lineHeight: 1, letterSpacing: '-1px', marginBottom: '24px' }}>
          Elegance in <br/><span style={{ fontStyle: 'italic', fontWeight: 300 }}>Simplicity</span>.
        </h1>
        <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.5)', lineHeight: 1.6, marginBottom: '32px', maxWidth: '240px' }}>
          Discover a curated selection of minimalist essentials for the modern creator.
        </p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button style={{ padding: '12px 24px', background: '#1a1a1a', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '13px', fontWeight: 500, fontFamily: 'inherit', cursor: 'pointer' }}>Shop Now</button>
          <button style={{ padding: '12px 24px', background: 'transparent', color: '#1a1a1a', border: '1px solid #1a1a1a', borderRadius: '4px', fontSize: '13px', fontWeight: 500, fontFamily: 'inherit', cursor: 'pointer' }}>Lookbook</button>
        </div>
      </div>
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)' }} />
        <div style={{ position: 'absolute', width: '200%', height: '200%', background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)', top: '-50%', left: '-50%' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '180px', height: '240px', background: '#fff', borderRadius: '8px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
           <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to bottom, #8b5cf6, #ec4899)', opacity: 0.1 }} />
           <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '64px', opacity: 0.2 }}>✧</div>
        </div>
      </div>
    </div>
  );
}

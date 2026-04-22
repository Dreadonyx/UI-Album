export default function EditorialGrid() {
  return (
    <div style={{
      width: '600px', height: '400px',
      background: '#0c0c14',
      padding: '24px', display: 'flex', gap: '16px',
      fontFamily: "'Lora', serif",
    }}>
      <div style={{
        flex: 1.2, background: 'linear-gradient(180deg, #1a1a2e, #12121f)',
        borderRadius: '14px', padding: '24px',
        border: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      }}>
        <div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(244,114,182,0.7)', marginBottom: '10px' }}>Featured Essay</div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: 700, color: '#f0eef5', lineHeight: 1.25, marginBottom: '12px' }}>The Art of<br/>Digital Minimalism</h3>
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', lineHeight: 1.6, fontStyle: 'italic' }}>
            "Less is not more. Less is the foundation<br/>upon which more becomes possible."
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, #f472b6, #ec4899)' }} />
          <div>
            <div style={{ fontSize: '11px', color: '#f0eef5', fontWeight: 500 }}>Elena Vasquez</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.25)' }}>12 min read</div>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {[
          { cat: 'Typography', title: 'Serif Revival in Web Design', author: 'M. Chen', color: '#a78bfa' },
          { cat: 'Layout', title: 'Asymmetric Grids That Work', author: 'J. Park', color: '#06b6d4' },
          { cat: 'Motion', title: 'Reduce, Refine, Animate', author: 'S. Ali', color: '#f59e0b' },
        ].map((item, i) => (
          <div key={i} style={{
            flex: 1, background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '12px', padding: '16px',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
          }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', textTransform: 'uppercase', letterSpacing: '1.5px', color: item.color, opacity: 0.7, marginBottom: '6px' }}>{item.cat}</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '13px', fontWeight: 600, color: '#e0ddd8', lineHeight: 1.3, marginBottom: '6px' }}>{item.title}</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.2)' }}>{item.author}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TypeSpecimen() {
  return (
    <div style={{
      width: '600px', height: '400px',
      background: '#0c0a12',
      padding: '32px 36px',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'center', gap: '20px',
    }}>
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '3px', color: 'rgba(244,114,182,0.6)' }}>Type Specimen · 001</div>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '52px', fontWeight: 800, color: '#f0eef5', lineHeight: 0.95, letterSpacing: '-2px' }}>
        Aa Bb Cc
      </div>
      <div style={{ fontFamily: "'Lora', serif", fontSize: '18px', fontWeight: 400, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, fontStyle: 'italic' }}>
        "Typography is the craft of endowing human language with a durable visual form."
      </div>
      <div style={{ display: 'flex', gap: '20px', marginTop: '8px' }}>
        {[
          { font: 'Playfair Display', label: 'Display Serif', weight: '800' },
          { font: 'Lora', label: 'Body Serif', weight: '400' },
          { font: 'DM Mono', label: 'Monospace', weight: '400' },
        ].map(f => (
          <div key={f.label} style={{
            flex: 1, background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '10px', padding: '14px',
            textAlign: 'center',
          }}>
            <div style={{ fontFamily: `'${f.font}', serif`, fontSize: '22px', fontWeight: f.weight, color: '#e0ddd8', marginBottom: '6px' }}>Ag</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '1px' }}>{f.label}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        {['Regular', 'Italic', 'Bold', 'Black'].map(w => (
          <span key={w} style={{
            fontFamily: "'DM Mono', monospace", fontSize: '9px',
            padding: '4px 12px', borderRadius: '20px',
            background: 'rgba(244,114,182,0.08)', border: '1px solid rgba(244,114,182,0.15)',
            color: 'rgba(244,114,182,0.6)',
          }}>{w}</span>
        ))}
      </div>
    </div>
  );
}

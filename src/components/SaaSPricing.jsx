export default function SaaSPricing() {
  const plans = [
    { name: 'Hobby', price: '$0', feat: ['1 Project', 'Basic Analytics', 'Community Support'] },
    { name: 'Pro', price: '$29', feat: ['10 Projects', 'Advanced Analytics', 'Priority Support'], isPro: true },
    { name: 'Team', price: '$99', feat: ['Unlimited', 'Custom Reports', '24/7 Phone Support'] },
  ];

  return (
    <div style={{
      width: '600px', height: '400px',
      background: '#0d1117',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px',
      padding: '0 20px', fontFamily: "'DM Mono', monospace",
    }}>
      {/* Animated gradient ring definition */}
      <style>{`
        @keyframes rotateBorder {
          100% { transform: rotate(1turn); }
        }
        .pro-card::before {
          content: ""; position: absolute; z-index: -1;
          left: -2px; top: -2px; width: calc(100% + 4px); height: calc(100% + 4px);
          background: conic-gradient(from 0deg, transparent 0 340deg, #8b5cf6 360deg);
          border-radius: 14px; animation: rotateBorder 3s linear infinite;
        }
      `}</style>
      
      {plans.map((p) => (
        <div key={p.name} className={p.isPro ? "pro-card" : ""} style={{
          flex: 1, position: 'relative',
          background: p.isPro ? '#161b22' : 'rgba(255,255,255,0.03)',
          border: p.isPro ? 'none' : '1px solid rgba(255,255,255,0.08)',
          borderRadius: '12px', padding: '24px 20px',
          display: 'flex', flexDirection: 'column',
          transform: p.isPro ? 'scale(1.05)' : 'scale(1)',
          boxShadow: p.isPro ? '0 10px 40px rgba(139,92,246,0.15)' : 'none',
          zIndex: p.isPro ? 2 : 1,
          overflow: 'hidden',
        }}>
          {/* Inner masking for pro card border */}
          {p.isPro && <div style={{ position: 'absolute', inset: '1px', background: '#161b22', borderRadius: '11px', zIndex: -1 }} />}
          
          <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', color: p.isPro ? '#a78bfa' : 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>{p.name}</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '20px' }}>
            <span style={{ fontSize: '32px', fontWeight: 700, color: '#f0eef5', fontFamily: "'Playfair Display', serif" }}>{p.price}</span>
            <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)' }}>/mo</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px', flex: 1 }}>
            {p.feat.map(f => (
              <div key={f} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ color: p.isPro ? '#a78bfa' : '#10b981', fontSize: '10px' }}>✓</span>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>{f}</span>
              </div>
            ))}
          </div>
          <button style={{
            width: '100%', padding: '10px', borderRadius: '8px', border: 'none',
            fontSize: '11px', fontFamily: "'DM Mono', monospace", fontWeight: 500,
            background: p.isPro ? 'linear-gradient(135deg, #8b5cf6, #6d28d9)' : 'rgba(255,255,255,0.1)',
            color: '#fff', cursor: 'pointer',
          }}>{p.isPro ? 'Get Started' : 'Select'}</button>
        </div>
      ))}
    </div>
  );
}

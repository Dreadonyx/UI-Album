const QUOTES = [
  { name: 'Ama Owusu', role: 'Design Lead, Lumen', color: '#f472b6', text: 'We replaced three tools with this. Our design reviews went from an hour to fifteen minutes.' },
  { name: 'Diego Ruiz', role: 'CTO, Patchwork', color: '#60a5fa', text: 'The DX is unreal. Shipped our redesign a full sprint early.' },
  { name: 'Mei Tanaka', role: 'Founder, Koi', color: '#34d399', text: 'Finally a library that looks premium out of the box without fighting it.' },
  { name: 'Sam Patel', role: 'PM, Orbit', color: '#fbbf24', text: 'Every component is accessible by default. Our audit came back clean.' },
  { name: 'Lea Martin', role: 'Engineer, Fable', color: '#a78bfa', text: 'Copy the prompt, tweak, done. It is now part of our daily workflow.' },
  { name: 'Yusuf Kaya', role: 'Indie hacker', color: '#fb923c', text: 'Launched my SaaS landing page in an afternoon. Conversion up 31%.' },
];

function QuoteCard({ q }) {
  return (
    <figure style={{
      margin: 0, padding: '16px', borderRadius: '14px', marginBottom: '12px',
      background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
    }}>
      <div style={{ color: '#fbbf24', fontSize: '10px', letterSpacing: '2px', marginBottom: '8px' }}>★★★★★</div>
      <blockquote style={{ margin: 0, fontFamily: "'Lora', serif", fontSize: '12px', lineHeight: 1.55, color: 'rgba(255,255,255,0.75)', marginBottom: '12px' }}>“{q.text}”</blockquote>
      <figcaption style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
        <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: `linear-gradient(135deg, ${q.color}, ${q.color}66)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, color: '#0b0b10' }}>{q.name[0]}</div>
        <div>
          <div style={{ fontSize: '11px', fontWeight: 600, color: '#f4f4f5' }}>{q.name}</div>
          <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)' }}>{q.role}</div>
        </div>
      </figcaption>
    </figure>
  );
}

export default function TestimonialWall() {
  const columns = [QUOTES.slice(0, 3), QUOTES.slice(3, 6), [QUOTES[1], QUOTES[4], QUOTES[0]]];
  return (
    <div style={{
      width: '600px', height: '400px', background: '#0b0b10', position: 'relative', overflow: 'hidden',
      fontFamily: "'Inter', sans-serif", padding: '0 24px',
    }}>
      <style>{`
        @keyframes uaScrollUp { from { transform: translateY(0); } to { transform: translateY(-50%); } }
      `}</style>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', height: '100%' }}>
        {columns.map((col, ci) => (
          <div key={ci} style={{ overflow: 'hidden' }}>
            <div style={{ animation: `uaScrollUp ${18 + ci * 6}s linear infinite` }}>
              {[...col, ...col].map((q, i) => <QuoteCard key={`${q.name}-${i}`} q={q} />)}
            </div>
          </div>
        ))}
      </div>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(180deg, #0b0b10 0%, transparent 22%, transparent 70%, #0b0b10 100%)' }} />
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: '22px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '30px', color: '#fff', lineHeight: 1 }}>Loved by builders</div>
        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginTop: '6px' }}>4.9 average from 2,300+ reviews</div>
      </div>
    </div>
  );
}

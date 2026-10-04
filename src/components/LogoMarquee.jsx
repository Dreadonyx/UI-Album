const ROW_A = ['Lumen', 'Northwind', 'Patchwork', 'Orbit', 'Koi', 'Fable', 'Vertex', 'Halcyon'];
const ROW_B = ['Quartz', 'Monolith', 'Kestrel', 'Arcadia', 'Nimbus', 'Sable', 'Tandem', 'Ember'];
const MARKS = ['◆', '●', '▲', '■', '✦', '◐', '⬢', '✶'];

function Row({ names, reverse, speed }) {
  return (
    <div className="ua-marquee-row" style={{ overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent)' }}>
      <div className="ua-marquee-track" style={{ display: 'flex', width: 'max-content', animation: `uaLogoScroll ${speed}s linear infinite ${reverse ? 'reverse' : ''}` }}>
        {[...names, ...names].map((n, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0 26px', color: '#71717a', fontSize: '20px', fontWeight: 600, letterSpacing: '-0.5px', whiteSpace: 'nowrap' }}>
            <span style={{ fontSize: '16px' }}>{MARKS[i % MARKS.length]}</span>{n}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <div style={{ width: '600px', height: '400px', background: '#fafafa', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '26px', fontFamily: "'Space Grotesk', sans-serif" }}>
      <style>{`
        @keyframes uaLogoScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ua-marquee-row:hover .ua-marquee-track { animation-play-state: paused; }
      `}</style>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#a1a1aa', marginBottom: '6px' }}>Trusted by 4,000+ teams</div>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: '26px', fontWeight: 600, color: '#18181b' }}>From startups to the Fortune 500</div>
      </div>
      <Row names={ROW_A} speed={28} />
      <Row names={ROW_B} speed={34} reverse />
    </div>
  );
}

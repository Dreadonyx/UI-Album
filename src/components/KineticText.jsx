import { useState } from 'react';

const WORDS = ['faster.', 'bolder.', 'together.', 'better.'];

export default function KineticText() {
  const [run, setRun] = useState(0);
  const headline = 'Make something';

  return (
    <div onClick={() => setRun(r => r + 1)} style={{ width: '600px', height: '400px', background: '#f2efe6', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 46px', cursor: 'pointer', fontFamily: "'Syne', 'Space Grotesk', sans-serif" }}>
      <style>{`
        @keyframes uaRise { from { transform: translateY(110%) rotate(6deg); } to { transform: translateY(0) rotate(0); } }
        @keyframes uaWordCycle {
          0%, 20% { transform: translateY(0); }
          25%, 45% { transform: translateY(-25%); }
          50%, 70% { transform: translateY(-50%); }
          75%, 95% { transform: translateY(-75%); }
          100% { transform: translateY(0); }
        }
        @keyframes uaMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>

      <div key={run} style={{ fontSize: '58px', fontWeight: 800, lineHeight: 1, letterSpacing: '-2px', color: '#151515' }}>
        <div style={{ display: 'flex', overflow: 'hidden', paddingBottom: '6px' }}>
          {headline.split('').map((ch, i) => (
            <span key={i} style={{ display: 'inline-block', whiteSpace: 'pre', animation: `uaRise 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.035}s both` }}>{ch}</span>
          ))}
        </div>
        <div style={{ height: '62px', overflow: 'hidden' }}>
          <div style={{ animation: 'uaWordCycle 8s cubic-bezier(0.83,0,0.17,1) infinite' }}>
            {WORDS.map(w => (
              <div key={w} style={{ height: '62px', color: '#ff4d1a', fontStyle: 'italic', fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: '66px', letterSpacing: '-1px' }}>{w}</div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '2px', color: '#8a857a', textTransform: 'uppercase', marginTop: '20px' }}>Click to replay ↻</div>

      <div style={{ position: 'absolute', left: 0, right: 0, bottom: '22px', overflow: 'hidden', borderTop: '1.5px solid #151515', borderBottom: '1.5px solid #151515', padding: '8px 0', background: '#151515' }}>
        <div style={{ display: 'flex', width: 'max-content', animation: 'uaMarquee 16s linear infinite' }}>
          {[0, 1].map(k => (
            <span key={k} style={{ fontSize: '14px', fontWeight: 700, color: '#f2efe6', letterSpacing: '1px', whiteSpace: 'nowrap', paddingRight: '24px' }}>
              DESIGN / BUILD / SHIP / ITERATE / DESIGN / BUILD / SHIP / ITERATE /{' '}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

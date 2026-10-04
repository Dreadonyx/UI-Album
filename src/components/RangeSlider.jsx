import { useState } from 'react';

const MIN = 0;
const MAX = 1000;
const HISTOGRAM = [3, 5, 8, 12, 18, 26, 31, 28, 22, 19, 24, 30, 27, 20, 15, 11, 9, 7, 5, 3];

export default function RangeSlider() {
  const [low, setLow] = useState(180);
  const [high, setHigh] = useState(640);
  const [volume, setVolume] = useState(62);

  const pct = v => ((v - MIN) / (MAX - MIN)) * 100;
  const maxBar = Math.max(...HISTOGRAM);

  return (
    <div style={{
      width: '600px', height: '400px', background: '#fdfcfb',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 60px',
      fontFamily: "'Inter', sans-serif",
    }}>
      <style>{`
        .ua-range { -webkit-appearance: none; appearance: none; position: absolute; left: 0; width: 100%; height: 22px; top: -9px; background: transparent; pointer-events: none; margin: 0; }
        .ua-range::-webkit-slider-thumb { -webkit-appearance: none; pointer-events: auto; width: 22px; height: 22px; border-radius: 50%; background: #fff; border: 2px solid #0d9488; box-shadow: 0 2px 8px rgba(13,148,136,0.35); cursor: grab; }
        .ua-range::-moz-range-thumb { pointer-events: auto; width: 18px; height: 18px; border-radius: 50%; background: #fff; border: 2px solid #0d9488; box-shadow: 0 2px 8px rgba(13,148,136,0.35); cursor: grab; }
        .ua-range:focus-visible::-webkit-slider-thumb { outline: 3px solid rgba(13,148,136,0.3); }
      `}</style>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '18px' }}>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 600, color: '#1c1917' }}>Price range</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '13px', color: '#0d9488' }}>${low} – ${high}</div>
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '60px', marginBottom: '4px' }}>
        {HISTOGRAM.map((h, i) => {
          const v = (i + 0.5) * (MAX / HISTOGRAM.length);
          const inRange = v >= low && v <= high;
          return <div key={i} style={{ flex: 1, height: `${(h / maxBar) * 100}%`, borderRadius: '3px 3px 0 0', background: inRange ? '#5eead4' : '#e7e5e4', transition: 'background 0.2s' }} />;
        })}
      </div>

      <div style={{ position: 'relative', height: '4px', borderRadius: '4px', background: '#e7e5e4', marginBottom: '34px' }}>
        <div style={{ position: 'absolute', height: '100%', left: `${pct(low)}%`, right: `${100 - pct(high)}%`, background: '#0d9488', borderRadius: '4px' }} />
        <input className="ua-range" type="range" min={MIN} max={MAX} step={10} value={low} aria-label="Minimum price"
          onChange={e => setLow(Math.min(Number(e.target.value), high - 50))} />
        <input className="ua-range" type="range" min={MIN} max={MAX} step={10} value={high} aria-label="Maximum price"
          onChange={e => setHigh(Math.max(Number(e.target.value), low + 50))} />
      </div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '38px' }}>
        {[['Min', low], ['Max', high]].map(([l, v]) => (
          <div key={l} style={{ flex: 1, padding: '8px 12px', borderRadius: '10px', border: '1px solid #e7e5e4', background: '#fff' }}>
            <div style={{ fontSize: '10px', color: '#a8a29e' }}>{l}</div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#1c1917' }}>${v}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <span style={{ fontSize: '12px', color: '#78716c', width: '52px' }}>Volume</span>
        <div style={{ position: 'relative', flex: 1, height: '4px', borderRadius: '4px', background: '#e7e5e4' }}>
          <div style={{ position: 'absolute', height: '100%', width: `${volume}%`, background: 'linear-gradient(90deg, #99f6e4, #0d9488)', borderRadius: '4px' }} />
          <input className="ua-range" type="range" min={0} max={100} value={volume} aria-label="Volume" onChange={e => setVolume(Number(e.target.value))} />
        </div>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px', color: '#1c1917', width: '32px', textAlign: 'right' }}>{volume}%</span>
      </div>
    </div>
  );
}

import { useState } from 'react';

const SWATCHES = [12, 38, 145, 190, 222, 262, 292, 336];

function hslToHex(h, s, l) {
  s /= 100; l /= 100;
  const k = n => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = n => Math.round(255 * (l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))));
  return `#${[f(0), f(8), f(4)].map(x => x.toString(16).padStart(2, '0')).join('')}`;
}

export default function ColorPicker() {
  const [hue, setHue] = useState(262);
  const [sat, setSat] = useState(80);
  const [light, setLight] = useState(62);

  const hex = hslToHex(hue, sat, light);
  const shades = [92, 80, 66, 52, 40, 28, 18].map(l => hslToHex(hue, sat, l));

  const onPad = e => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = Math.min(Math.max((e.clientX - r.left) / r.width, 0), 1);
    const y = Math.min(Math.max((e.clientY - r.top) / r.height, 0), 1);
    setSat(Math.round(x * 100));
    setLight(Math.round((1 - y) * 90 + 5));
  };

  return (
    <div style={{
      width: '600px', height: '400px', background: '#111113',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '28px',
      fontFamily: "'Inter', sans-serif",
    }}>
      <style>{`
        .ua-hue { -webkit-appearance: none; appearance: none; display: block; }
        .ua-hue::-webkit-slider-thumb { -webkit-appearance: none; width: 16px; height: 16px; border-radius: 50%; background: #fff; border: 2px solid #111113; box-shadow: 0 0 0 1px #fff, 0 2px 6px rgba(0,0,0,0.5); cursor: grab; }
        .ua-hue::-moz-range-thumb { width: 14px; height: 14px; border-radius: 50%; background: #fff; border: 2px solid #111113; cursor: grab; }
      `}</style>
      <div style={{ width: '250px', padding: '14px', borderRadius: '18px', background: '#1c1c1f', border: '1px solid #2a2a2e', boxShadow: '0 24px 50px rgba(0,0,0,0.5)' }}>
        <div
          onMouseDown={onPad}
          onMouseMove={e => { if (e.buttons === 1) onPad(e); }}
          style={{
            position: 'relative', height: '150px', borderRadius: '12px', cursor: 'crosshair', marginBottom: '14px',
            background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #808080, hsl(${hue}, 100%, 50%))`,
          }}
        >
          <div style={{
            position: 'absolute', left: `${sat}%`, top: `${100 - ((light - 5) / 90) * 100}%`,
            width: '16px', height: '16px', borderRadius: '50%', border: '3px solid #fff',
            transform: 'translate(-50%, -50%)', boxShadow: '0 2px 6px rgba(0,0,0,0.5)', background: hex, pointerEvents: 'none',
          }} />
        </div>
        <input type="range" min={0} max={360} value={hue} onChange={e => setHue(Number(e.target.value))} aria-label="Hue" className="ua-hue"
          style={{ width: '100%', height: '12px', borderRadius: '6px', cursor: 'pointer', background: 'linear-gradient(90deg, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)', marginBottom: '14px' }} />
        <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
          {SWATCHES.map(h => (
            <button key={h} onClick={() => { setHue(h); setSat(80); setLight(60); }} aria-label={`Hue ${h}`} style={{
              flex: 1, aspectRatio: '1', borderRadius: '7px', cursor: 'pointer',
              border: hue === h ? '2px solid #fff' : '2px solid transparent',
              background: hslToHex(h, 80, 60),
            }} />
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 10px', borderRadius: '10px', background: '#111113', border: '1px solid #2a2a2e' }}>
          <span style={{ width: '20px', height: '20px', borderRadius: '6px', background: hex }} />
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '13px', color: '#f4f4f5', flex: 1 }}>{hex.toUpperCase()}</span>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#71717a' }}>{hue}° {sat}% {light}%</span>
        </div>
      </div>

      <div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#71717a', marginBottom: '10px' }}>Generated scale</div>
        {shades.map((s, i) => (
          <div key={s + i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
            <div style={{ width: '120px', height: '28px', borderRadius: '7px', background: s }} />
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: '#a1a1aa' }}>{(i + 1) * 100}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

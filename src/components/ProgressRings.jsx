const RINGS = [
  { label: 'Move', value: 82, goal: '520 / 640 kcal', color: '#fb7185' },
  { label: 'Exercise', value: 64, goal: '19 / 30 min', color: '#a3e635' },
  { label: 'Stand', value: 91, goal: '11 / 12 hrs', color: '#22d3ee' },
];

export default function ProgressRings() {
  const size = 200;
  const stroke = 16;

  return (
    <div style={{ width: '600px', height: '400px', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '44px', fontFamily: "'Inter', sans-serif" }}>
      <style>{`@keyframes uaRingFill { from { stroke-dashoffset: var(--ua-circ); } }`}</style>
      <div style={{ position: 'relative', width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          {RINGS.map((r, i) => {
            const radius = size / 2 - stroke / 2 - i * (stroke + 4);
            const circ = 2 * Math.PI * radius;
            return (
              <g key={r.label}>
                <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={r.color} strokeOpacity="0.15" strokeWidth={stroke} />
                <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={r.color} strokeWidth={stroke} strokeLinecap="round"
                  strokeDasharray={circ} strokeDashoffset={circ * (1 - r.value / 100)}
                  style={{ '--ua-circ': circ, animation: `uaRingFill 1.4s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s both`, filter: `drop-shadow(0 0 6px ${r.color}88)` }} />
              </g>
            );
          })}
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ fontSize: '26px', fontWeight: 700, color: '#fff' }}>79%</div>
          <div style={{ fontSize: '10px', color: '#71717a', letterSpacing: '1px', textTransform: 'uppercase' }}>Daily goal</div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        {RINGS.map(r => (
          <div key={r.label}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: r.color, textTransform: 'uppercase', letterSpacing: '1px' }}>{r.label}</div>
            <div style={{ fontSize: '22px', fontWeight: 700, color: '#fff', fontVariantNumeric: 'tabular-nums' }}>{r.value}%</div>
            <div style={{ fontSize: '11px', color: '#71717a', fontFamily: "'DM Mono', monospace" }}>{r.goal}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

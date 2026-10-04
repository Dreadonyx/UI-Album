import Icon from './Icon';

const PEOPLE = [
  { initials: 'AK', color: '#f97316', status: '#22c55e' },
  { initials: 'MJ', color: '#8b5cf6', status: '#22c55e' },
  { initials: 'SR', color: '#0ea5e9', status: '#f59e0b' },
  { initials: 'TL', color: '#ec4899', status: '#94a3b8' },
  { initials: 'DW', color: '#14b8a6', status: '#22c55e' },
];

const BADGES = [
  { label: 'Default', bg: '#f4f4f5', fg: '#3f3f46' },
  { label: 'Active', bg: '#dcfce7', fg: '#15803d', dot: '#22c55e' },
  { label: 'Pending', bg: '#fef3c7', fg: '#b45309', dot: '#f59e0b' },
  { label: 'Failed', bg: '#fee2e2', fg: '#b91c1c', dot: '#ef4444' },
  { label: 'Beta', bg: '#ede9fe', fg: '#6d28d9', outline: true },
  { label: 'New', bg: 'linear-gradient(90deg, #f472b6, #8b5cf6)', fg: '#fff' },
];

export default function BadgesAvatars() {
  const heading = { fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#a1a1aa', marginBottom: '12px' };

  return (
    <div style={{ width: '600px', height: '400px', background: '#ffffff', padding: '28px 40px', display: 'flex', flexDirection: 'column', gap: '26px', fontFamily: "'Inter', sans-serif" }}>
      <div>
        <div style={heading}>Avatars · sizes & presence</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '14px' }}>
          {[56, 44, 36, 28, 22].map((s, i) => (
            <div key={s} style={{ position: 'relative', width: s, height: s }}>
              <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: `linear-gradient(135deg, ${PEOPLE[i].color}, ${PEOPLE[i].color}99)`, color: '#fff', fontWeight: 600, fontSize: s * 0.36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{PEOPLE[i].initials}</div>
              <span style={{ position: 'absolute', right: 0, bottom: 0, width: Math.max(8, s * 0.26), height: Math.max(8, s * 0.26), borderRadius: '50%', background: PEOPLE[i].status, border: '2px solid #fff' }} />
            </div>
          ))}
          <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#f4f4f5', border: '2px dashed #d4d4d8', color: '#a1a1aa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginLeft: '8px' }}>+</div>
        </div>
      </div>

      <div>
        <div style={heading}>Avatar group</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ display: 'flex' }}>
            {PEOPLE.slice(0, 4).map((p, i) => (
              <div key={p.initials} style={{ width: '34px', height: '34px', borderRadius: '50%', marginLeft: i ? '-10px' : 0, border: '2px solid #fff', background: p.color, color: '#fff', fontSize: '11px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 - i }}>{p.initials}</div>
            ))}
            <div style={{ width: '34px', height: '34px', borderRadius: '50%', marginLeft: '-10px', border: '2px solid #fff', background: '#18181b', color: '#fff', fontSize: '11px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+9</div>
          </div>
          <span style={{ fontSize: '12px', color: '#71717a' }}>13 people are editing</span>
        </div>
      </div>

      <div>
        <div style={heading}>Badges</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
          {BADGES.map(b => (
            <span key={b.label} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: 500, background: b.outline ? 'transparent' : b.bg, color: b.fg, border: b.outline ? `1px solid ${b.fg}55` : '1px solid transparent' }}>
              {b.dot && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: b.dot }} />}{b.label}
            </span>
          ))}
          <span style={{ position: 'relative', display: 'inline-flex', marginLeft: '10px', width: '36px', height: '36px', borderRadius: '10px', background: '#f4f4f5', alignItems: 'center', justifyContent: 'center', color: '#3f3f46' }}>
            <Icon name="bell" size={17} />
            <span style={{ position: 'absolute', top: '-6px', right: '-6px', minWidth: '18px', height: '18px', padding: '0 5px', borderRadius: '9px', background: '#ef4444', color: '#fff', fontSize: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff' }}>3</span>
          </span>
        </div>
      </div>
    </div>
  );
}

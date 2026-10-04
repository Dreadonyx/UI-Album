import { useId, useState } from 'react';
import Icon from './Icon';

function Switch({ checked, onChange, label }) {
  return (
    <button role="switch" aria-checked={checked} aria-label={label} onClick={() => onChange(!checked)} style={{
      width: '46px', height: '26px', borderRadius: '999px', border: 'none', padding: '3px', cursor: 'pointer',
      background: checked ? '#10b981' : '#3f3f46', transition: 'background 0.25s', flexShrink: 0,
      boxShadow: checked ? '0 0 16px rgba(16,185,129,0.35)' : 'inset 0 1px 2px rgba(0,0,0,0.3)',
    }}>
      <span style={{
        display: 'block', width: '20px', height: '20px', borderRadius: '50%', background: '#fff',
        transform: `translateX(${checked ? 20 : 0}px)`, transition: 'transform 0.25s cubic-bezier(0.34,1.56,0.64,1)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.25)',
      }} />
    </button>
  );
}

export default function ToggleControls() {
  const [switches, setSwitches] = useState({ notifications: true, darkMode: true, autoplay: false });
  const [checks, setChecks] = useState({ terms: true, marketing: false, beta: true });
  const [radio, setRadio] = useState('monthly');
  const groupName = useId();

  const rowLabel = { fontSize: '13px', color: '#e4e4e7' };
  const sub = { fontSize: '11px', color: '#71717a', marginTop: '2px' };
  const heading = { fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#52525b', marginBottom: '12px' };

  return (
    <div style={{
      width: '600px', height: '400px', background: '#18181b', padding: '30px 32px',
      display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '32px', fontFamily: "'Inter', sans-serif",
    }}>
      <div>
        <div style={heading}>Switches</div>
        {[
          ['notifications', 'Push notifications', 'Alerts for mentions and replies'],
          ['darkMode', 'Dark mode', 'Easier on the eyes at night'],
          ['autoplay', 'Autoplay video', 'Play media automatically'],
        ].map(([k, l, s]) => (
          <div key={k} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '12px 0', borderBottom: '1px solid #27272a' }}>
            <div><div style={rowLabel}>{l}</div><div style={sub}>{s}</div></div>
            <Switch label={l} checked={switches[k]} onChange={v => setSwitches(p => ({ ...p, [k]: v }))} />
          </div>
        ))}
      </div>

      <div>
        <div style={heading}>Checkboxes</div>
        {[['terms', 'Accept terms'], ['marketing', 'Product updates'], ['beta', 'Join beta program']].map(([k, l]) => (
          <label key={k} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', cursor: 'pointer', ...rowLabel }}>
            <input type="checkbox" checked={checks[k]} onChange={e => setChecks(p => ({ ...p, [k]: e.target.checked }))} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
            <span style={{
              width: '18px', height: '18px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: checks[k] ? '1px solid #10b981' : '1px solid #52525b', background: checks[k] ? '#10b981' : 'transparent',
              transition: 'all 0.18s',
            }}>{checks[k] && <Icon name="check" size={12} color="#052e16" strokeWidth={3.5} />}</span>
            {l}
          </label>
        ))}

        <div style={{ ...heading, marginTop: '22px' }}>Radio group</div>
        <div role="radiogroup" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[['monthly', 'Monthly', '$12'], ['yearly', 'Yearly', '$120']].map(([v, l, p]) => (
            <label key={v} style={{
              display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', borderRadius: '10px', cursor: 'pointer',
              border: radio === v ? '1px solid #10b981' : '1px solid #27272a',
              background: radio === v ? 'rgba(16,185,129,0.08)' : 'transparent', transition: 'all 0.2s', ...rowLabel,
            }}>
              <input type="radio" name={groupName} value={v} checked={radio === v} onChange={() => setRadio(v)} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
              <span style={{ width: '16px', height: '16px', borderRadius: '50%', border: radio === v ? '5px solid #10b981' : '1.5px solid #52525b', transition: 'border 0.2s', boxSizing: 'border-box' }} />
              <span style={{ flex: 1 }}>{l}</span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px', color: '#a1a1aa' }}>{p}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

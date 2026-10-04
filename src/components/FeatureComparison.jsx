import { useState } from 'react';
import Icon from './Icon';

const PLANS = ['Starter', 'Growth', 'Scale'];
const ROWS = [
  { feature: 'Projects', values: ['3', '20', 'Unlimited'] },
  { feature: 'Team seats', values: ['1', '10', 'Unlimited'] },
  { feature: 'Custom domains', values: [false, true, true] },
  { feature: 'Analytics', values: ['Basic', 'Advanced', 'Advanced'] },
  { feature: 'SSO / SAML', values: [false, false, true] },
  { feature: 'Audit logs', values: [false, true, true] },
  { feature: 'Support', values: ['Email', 'Priority', '24/7 + SLA'] },
];

function Cell({ value }) {
  if (value === true) return <span style={{ display: 'inline-flex', width: '20px', height: '20px', borderRadius: '50%', background: '#dcfce7', alignItems: 'center', justifyContent: 'center' }}><Icon name="check" size={12} color="#16a34a" strokeWidth={3} /></span>;
  if (value === false) return <span style={{ color: '#d4d4d8' }}>—</span>;
  return <span>{value}</span>;
}

export default function FeatureComparison() {
  const [highlight, setHighlight] = useState(1);

  return (
    <div style={{
      width: '600px', height: '400px', background: '#ffffff', padding: '24px 28px',
      fontFamily: "'Inter', sans-serif", color: '#18181b',
    }}>
      <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, fontSize: '12px' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '0 10px 12px', fontFamily: "'Fraunces', serif", fontSize: '18px', fontWeight: 600 }}>Compare plans</th>
            {PLANS.map((p, i) => (
              <th key={p} onMouseEnter={() => setHighlight(i)} style={{
                padding: '10px', width: '110px', textAlign: 'center', cursor: 'pointer',
                borderRadius: '12px 12px 0 0', background: highlight === i ? '#f5f3ff' : 'transparent',
                transition: 'background 0.2s',
              }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: highlight === i ? '#6d28d9' : '#18181b' }}>{p}</div>
                <div style={{ fontSize: '11px', color: '#71717a', fontWeight: 400, marginTop: '2px' }}>{['$0', '$24', '$79'][i]}/mo</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r, ri) => (
            <tr key={r.feature}>
              <td style={{ padding: '9px 10px', color: '#52525b', borderTop: '1px solid #f4f4f5' }}>{r.feature}</td>
              {r.values.map((v, i) => (
                <td key={i} onMouseEnter={() => setHighlight(i)} style={{
                  padding: '9px 10px', textAlign: 'center', borderTop: '1px solid #f4f4f5',
                  background: highlight === i ? '#f5f3ff' : 'transparent',
                  borderRadius: ri === ROWS.length - 1 ? '0 0 12px 12px' : 0,
                  fontWeight: highlight === i ? 500 : 400, transition: 'background 0.2s',
                }}><Cell value={v} /></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

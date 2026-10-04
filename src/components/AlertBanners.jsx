import { useState } from 'react';
import Icon from './Icon';

const ALERTS = [
  { id: 'info', icon: 'info', tone: '#2563eb', bg: '#eff6ff', border: '#bfdbfe', title: 'Scheduled maintenance', body: 'The API will be read-only on Sunday, 02:00–03:00 UTC.', action: 'View status' },
  { id: 'success', icon: 'checkCircle', tone: '#16a34a', bg: '#f0fdf4', border: '#bbf7d0', title: 'Domain verified', body: 'acme.dev is now connected and serving traffic over HTTPS.' },
  { id: 'warning', icon: 'alert', tone: '#d97706', bg: '#fffbeb', border: '#fde68a', title: 'Your trial ends in 3 days', body: 'Add a payment method to keep your projects running.', action: 'Upgrade' },
  { id: 'error', icon: 'xCircle', tone: '#dc2626', bg: '#fef2f2', border: '#fecaca', title: 'Build failed', body: 'Type error in src/app.tsx:42 · exit code 1.', action: 'View logs' },
];

export default function AlertBanners() {
  const [dismissed, setDismissed] = useState([]);
  const visible = ALERTS.filter(a => !dismissed.includes(a.id));

  return (
    <div style={{ width: '600px', height: '400px', background: '#ffffff', padding: '22px 30px', display: 'flex', flexDirection: 'column', gap: '10px', fontFamily: "'Inter', sans-serif" }}>
      {visible.map(a => (
        <div key={a.id} role={a.id === 'error' ? 'alert' : 'status'} style={{
          display: 'flex', gap: '12px', padding: '12px 14px', borderRadius: '12px',
          background: a.bg, border: `1px solid ${a.border}`, borderLeft: `4px solid ${a.tone}`,
          animation: 'fadeSlideUp 0.3s ease',
        }}>
          <Icon name={a.icon} size={18} color={a.tone} style={{ marginTop: '1px' }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a' }}>{a.title}</div>
            <div style={{ fontSize: '12px', color: '#475569', marginTop: '2px', lineHeight: 1.45 }}>{a.body}</div>
          </div>
          {a.action && (
            <button style={{ alignSelf: 'center', padding: '6px 10px', borderRadius: '8px', border: `1px solid ${a.border}`, background: '#fff', color: a.tone, fontSize: '11px', fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer', whiteSpace: 'nowrap' }}>{a.action}</button>
          )}
          <button onClick={() => setDismissed(d => [...d, a.id])} aria-label={`Dismiss ${a.title}`} style={{ display: 'flex', alignSelf: 'flex-start', border: 'none', background: 'none', color: '#94a3b8', cursor: 'pointer', padding: '2px' }}>
            <Icon name="x" size={14} />
          </button>
        </div>
      ))}
      {visible.length < ALERTS.length && (
        <button onClick={() => setDismissed([])} style={{ alignSelf: 'center', marginTop: 'auto', padding: '7px 14px', borderRadius: '999px', border: '1px dashed #cbd5e1', background: 'transparent', color: '#64748b', fontSize: '12px', fontFamily: 'inherit', cursor: 'pointer' }}>Restore {ALERTS.length - visible.length} dismissed</button>
      )}
    </div>
  );
}

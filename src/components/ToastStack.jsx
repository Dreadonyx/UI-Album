import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';

const TYPES = {
  success: { icon: 'checkCircle', color: '#22c55e', title: 'Changes saved', body: 'Your profile was updated.' },
  error: { icon: 'xCircle', color: '#ef4444', title: 'Upload failed', body: 'File exceeds the 25 MB limit.' },
  info: { icon: 'info', color: '#3b82f6', title: 'New version', body: 'v2.4 is available. Refresh to update.' },
  warning: { icon: 'alert', color: '#f59e0b', title: 'Storage almost full', body: '92% of 10 GB used.' },
};

function Toast({ toast, index, expanded, onClose }) {
  const t = TYPES[toast.type];
  const collapsedOffset = index * 12;
  const expandedOffset = index * 76;
  return (
    <div role="status" style={{
      position: 'absolute', right: 0, bottom: 0, width: '300px', padding: '12px 14px', borderRadius: '14px',
      background: '#ffffff', border: '1px solid #ececf1', boxShadow: '0 12px 30px rgba(15,23,42,0.12)',
      display: 'flex', gap: '10px', alignItems: 'flex-start',
      transform: `translateY(-${expanded ? expandedOffset : collapsedOffset}px) scale(${expanded ? 1 : 1 - index * 0.05})`,
      opacity: index > 2 ? 0 : 1, zIndex: 10 - index, transformOrigin: 'bottom center',
      transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s',
      animation: 'uaToastIn 0.45s cubic-bezier(0.16,1,0.3,1)',
    }}>
      <Icon name={t.icon} size={18} color={t.color} />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a' }}>{t.title}</div>
        <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>{t.body}</div>
      </div>
      <button onClick={() => onClose(toast.id)} aria-label="Dismiss" style={{ display: 'flex', border: 'none', background: 'none', color: '#94a3b8', cursor: 'pointer', padding: '2px' }}>
        <Icon name="x" size={14} />
      </button>
    </div>
  );
}

export default function ToastStack() {
  const [toasts, setToasts] = useState([{ id: 3, type: 'info' }, { id: 2, type: 'error' }, { id: 1, type: 'success' }]);
  const [expanded, setExpanded] = useState(false);
  const nextId = useRef(4);
  const timers = useRef([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const push = type => {
    const id = nextId.current++;
    setToasts(ts => [{ id, type }, ...ts].slice(0, 5));
    timers.current.push(setTimeout(() => setToasts(ts => ts.filter(t => t.id !== id)), 6000));
  };
  const close = id => setToasts(ts => ts.filter(t => t.id !== id));

  return (
    <div style={{ width: '600px', height: '400px', background: '#f4f5f8', position: 'relative', fontFamily: "'Inter', sans-serif", padding: '30px 34px' }}>
      <style>{`@keyframes uaToastIn { from { opacity: 0; transform: translateY(40px) scale(0.9); } }`}</style>
      <div style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 600, color: '#0f172a', marginBottom: '4px' }}>Toast notifications</div>
      <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '18px' }}>Stacked, hover to expand. Auto-dismiss after 6s.</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '170px' }}>
        {Object.entries(TYPES).map(([k, v]) => (
          <button key={k} onClick={() => push(k)} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', borderRadius: '10px', border: '1px solid #e2e8f0', background: '#fff', fontSize: '12px', fontWeight: 500, color: '#334155', fontFamily: 'inherit', cursor: 'pointer', textTransform: 'capitalize' }}>
            <Icon name={v.icon} size={14} color={v.color} /> {k}
          </button>
        ))}
      </div>
      <div onMouseEnter={() => setExpanded(true)} onMouseLeave={() => setExpanded(false)}
        style={{ position: 'absolute', right: '24px', bottom: '24px', width: '300px', height: expanded ? `${Math.min(toasts.length, 3) * 76}px` : '90px', transition: 'height 0.3s' }}>
        {toasts.map((t, i) => <Toast key={t.id} toast={t} index={i} expanded={expanded} onClose={close} />)}
      </div>
    </div>
  );
}

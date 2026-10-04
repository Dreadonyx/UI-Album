import { useId, useState } from 'react';
import Icon from './Icon';

export default function ModalDialog() {
  const [open, setOpen] = useState(true);
  const [confirmText, setConfirmText] = useState('');
  const [deleted, setDeleted] = useState(false);
  const titleId = useId();
  const canDelete = confirmText === 'acme-web';

  const close = () => { setOpen(false); setConfirmText(''); };

  return (
    <div style={{ width: '600px', height: '400px', position: 'relative', overflow: 'hidden', background: '#f8fafc', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ padding: '24px 28px' }}>
        <div style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a', marginBottom: '14px' }}>Project settings</div>
        {['General', 'Domains', 'Environment variables'].map(r => (
          <div key={r} style={{ height: '44px', borderRadius: '10px', background: '#fff', border: '1px solid #e2e8f0', marginBottom: '8px', display: 'flex', alignItems: 'center', padding: '0 14px', fontSize: '12px', color: '#64748b' }}>{r}</div>
        ))}
        <button onClick={() => { setOpen(true); setDeleted(false); }} style={{ marginTop: '8px', padding: '9px 14px', borderRadius: '10px', border: '1px solid #fecaca', background: '#fff', color: '#dc2626', fontSize: '12px', fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer' }}>
          {deleted ? 'Project deleted · reopen dialog' : 'Delete project'}
        </button>
      </div>

      {open && (
        <div onClick={close} style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.45)', backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'uaFadeIn 0.2s ease' }}>
          <style>{`@keyframes uaFadeIn { from { opacity: 0; } } @keyframes uaDialogIn { from { opacity: 0; transform: translateY(12px) scale(0.96); } }`}</style>
          <div role="alertdialog" aria-modal="true" aria-labelledby={titleId} onClick={e => e.stopPropagation()}
            onKeyDown={e => { if (e.key === 'Escape') close(); }}
            style={{ width: '380px', borderRadius: '16px', background: '#fff', boxShadow: '0 30px 60px rgba(15,23,42,0.3)', animation: 'uaDialogIn 0.3s cubic-bezier(0.16,1,0.3,1)', overflow: 'hidden' }}>
            <div style={{ padding: '22px 22px 18px', display: 'flex', gap: '14px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#fee2e2', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name="trash" size={18} /></div>
              <div style={{ flex: 1 }}>
                <h2 id={titleId} style={{ fontSize: '16px', fontWeight: 600, color: '#0f172a', marginBottom: '6px' }}>Delete project?</h2>
                <p style={{ fontSize: '12px', lineHeight: 1.55, color: '#64748b', marginBottom: '12px' }}>This permanently deletes <b style={{ color: '#0f172a' }}>acme-web</b>, its deployments and domains. This cannot be undone.</p>
                <label style={{ fontSize: '11px', color: '#475569' }}>Type <code style={{ fontFamily: "'DM Mono', monospace", background: '#f1f5f9', padding: '1px 5px', borderRadius: '4px' }}>acme-web</code> to confirm
                  <input value={confirmText} onChange={e => setConfirmText(e.target.value)} autoComplete="off" style={{ display: 'block', width: '100%', marginTop: '6px', height: '36px', padding: '0 10px', borderRadius: '8px', border: `1px solid ${canDelete ? '#dc2626' : '#e2e8f0'}`, fontSize: '13px', fontFamily: "'DM Mono', monospace", outline: 'none' }} />
                </label>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', padding: '12px 22px', background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
              <button onClick={close} style={{ padding: '8px 14px', borderRadius: '9px', border: '1px solid #e2e8f0', background: '#fff', color: '#334155', fontSize: '12px', fontWeight: 500, fontFamily: 'inherit', cursor: 'pointer' }}>Cancel</button>
              <button disabled={!canDelete} onClick={() => { setDeleted(true); close(); }} style={{ padding: '8px 14px', borderRadius: '9px', border: 'none', background: canDelete ? '#dc2626' : '#fca5a5', color: '#fff', fontSize: '12px', fontWeight: 600, fontFamily: 'inherit', cursor: canDelete ? 'pointer' : 'not-allowed', transition: 'background 0.2s' }}>Delete project</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

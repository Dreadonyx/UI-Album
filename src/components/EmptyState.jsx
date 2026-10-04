import Icon from './Icon';

export default function EmptyState() {
  return (
    <div style={{ width: '600px', height: '400px', background: '#fbfaf8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', sans-serif" }}>
      <style>{`@keyframes uaFloat { 0%, 100% { transform: translateY(0) rotate(-4deg); } 50% { transform: translateY(-8px) rotate(-1deg); } }`}</style>
      <div style={{ textAlign: 'center', maxWidth: '340px' }}>
        <div style={{ position: 'relative', width: '140px', height: '110px', margin: '0 auto 22px' }}>
          <div style={{ position: 'absolute', left: '10px', right: '10px', bottom: '0', height: '14px', borderRadius: '50%', background: 'rgba(28,25,23,0.06)' }} />
          <div style={{ position: 'absolute', left: '22px', top: '14px', width: '96px', height: '76px', borderRadius: '14px', background: '#fff', border: '1px solid #e7e5e4', boxShadow: '0 10px 24px rgba(28,25,23,0.06)', transform: 'rotate(6deg)' }} />
          <div style={{ position: 'absolute', left: '22px', top: '10px', width: '96px', height: '76px', borderRadius: '14px', background: '#fff', border: '1px solid #e7e5e4', boxShadow: '0 14px 30px rgba(28,25,23,0.08)', animation: 'uaFloat 4s ease-in-out infinite', padding: '14px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#ffedd5', color: '#ea580c', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="folder" size={15} /></div>
            <div style={{ height: '6px', width: '80%', borderRadius: '3px', background: '#f5f5f4' }} />
            <div style={{ height: '6px', width: '55%', borderRadius: '3px', background: '#f5f5f4' }} />
          </div>
          <div style={{ position: 'absolute', right: '4px', top: '0', color: '#fb923c' }}><Icon name="sparkle" size={18} fill="#fb923c" /></div>
        </div>
        <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 600, color: '#1c1917', marginBottom: '8px' }}>No projects yet</h3>
        <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#78716c', marginBottom: '22px' }}>Projects keep your files, tasks and people in one place. Create your first one or start from a template.</p>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: '6px', height: '38px', padding: '0 16px', borderRadius: '10px', border: 'none', background: '#1c1917', color: '#fff', fontSize: '13px', fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer' }}><Icon name="plus" size={14} /> New project</button>
          <button style={{ height: '38px', padding: '0 16px', borderRadius: '10px', border: '1px solid #e7e5e4', background: '#fff', color: '#44403c', fontSize: '13px', fontWeight: 500, fontFamily: 'inherit', cursor: 'pointer' }}>Browse templates</button>
        </div>
      </div>
    </div>
  );
}

export default function DashboardWidget() {
  const data = [65, 40, 80, 55, 90, 72, 48];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const maxVal = Math.max(...data);
  return (
    <div style={{
      width: '600px', height: '400px',
      background: 'linear-gradient(135deg, #0a0f1a 0%, #0d1420 100%)',
      padding: '28px 32px', fontFamily: "'DM Mono', monospace",
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
        {[
          { label: 'Revenue', val: '$12.4k', change: '+14%', color: '#10b981' },
          { label: 'Users', val: '2,847', change: '+8%', color: '#8b5cf6' },
          { label: 'Orders', val: '384', change: '+22%', color: '#f59e0b' },
        ].map(s => (
          <div key={s.label} style={{ flex: 1, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '1px' }}>{s.label}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <span style={{ fontSize: '20px', fontWeight: 600, color: '#f0eef5' }}>{s.val}</span>
              <span style={{ fontSize: '10px', color: s.color }}>{s.change}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Weekly Performance</div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '12px', paddingBottom: '24px' }}>
        {data.map((v, i) => (
          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '100%', borderRadius: '6px 6px 2px 2px',
              height: `${(v / maxVal) * 160}px`,
              background: `linear-gradient(180deg, ${v === maxVal ? '#10b981' : '#8b5cf6'} 0%, ${v === maxVal ? 'rgba(16,185,129,0.3)' : 'rgba(139,92,246,0.3)'} 100%)`,
              boxShadow: v === maxVal ? '0 0 15px rgba(16,185,129,0.2)' : 'none',
              animation: `fadeSlideUp 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s both`,
            }} />
            <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase' }}>{days[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

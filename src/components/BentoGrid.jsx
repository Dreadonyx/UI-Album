import Icon from './Icon';

export default function BentoGrid() {
  return (
    <div style={{
      width: '600px', height: '400px',
      background: '#0a0a0a',
      padding: '30px',
      fontFamily: "'Inter', sans-serif",
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gap: '15px',
        height: '100%',
      }}>
        <div style={{ gridArea: '1 / 1 / 3 / 2', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '20px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#8b5cf622', color: '#8b5cf6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="zap" size={22} /></div>
          <div>
            <div style={{ fontSize: '18px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>Lightning Fast</div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>Experience millisecond latencies on all global nodes.</p>
          </div>
        </div>
        <div style={{ gridArea: '1 / 2 / 2 / 3', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '20px', padding: '20px' }}>
          <div style={{ marginBottom: '12px' }}><div style={{ width: '36px', height: '36px', borderRadius: '12px', background: '#10b98122', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="lock" size={18} /></div></div>
          <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>Secure Hub</div>
        </div>
        <div style={{ gridArea: '1 / 3 / 2 / 4', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '20px', padding: '20px' }}>
          <div style={{ marginBottom: '12px' }}><div style={{ width: '36px', height: '36px', borderRadius: '12px', background: '#3b82f622', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="globe" size={18} /></div></div>
          <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>Global Reach</div>
        </div>
        <div style={{ gridArea: '2 / 2 / 3 / 4', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '20px', padding: '24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: '#f59e0b22', color: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="chart" size={26} /></div>
          <div>
            <div style={{ fontSize: '18px', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>Real-time Analytics</div>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>Track every interaction in real-time.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RetroTerminal() {
  const lines = [
    { prefix: '~', cmd: 'ssh phantom@192.168.1.42', delay: 0 },
    { prefix: '', cmd: 'Connected to phantom-server.local', delay: 1, isOutput: true },
    { prefix: '~', cmd: 'cat /etc/motd', delay: 2 },
    { prefix: '', cmd: '██████╗ ██╗  ██╗ █████╗ ███╗   ██╗████████╗', delay: 3, isOutput: true, color: '#00ff88' },
    { prefix: '', cmd: '██╔══██╗██║  ██║██╔══██╗████╗  ██║╚══██╔══╝', delay: 3, isOutput: true, color: '#00ff88' },
    { prefix: '~', cmd: 'uptime', delay: 4 },
    { prefix: '', cmd: 'up 42 days, 7:13, load avg: 0.08, 0.03, 0.01', delay: 5, isOutput: true },
    { prefix: '~', cmd: '█', delay: 6, blink: true },
  ];
  return (
    <div style={{
      width: '600px', height: '400px',
      background: '#0a0a0a',
      fontFamily: "'DM Mono', monospace",
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        padding: '10px 16px', background: '#1a1a1a',
        borderBottom: '1px solid #2a2a2a',
      }}>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginLeft: '12px' }}>phantom — zsh — 80×24</span>
      </div>
      <div style={{ flex: 1, padding: '16px 20px', overflowY: 'auto' }}>
        {lines.map((l, i) => (
          <div key={i} style={{
            fontSize: '12px', lineHeight: 1.8,
            color: l.color || (l.isOutput ? 'rgba(255,255,255,0.5)' : '#00ff88'),
            animation: l.blink ? 'pulseGlow 1s ease-in-out infinite' : undefined,
          }}>
            {l.prefix && <span style={{ color: '#8b5cf6', marginRight: '8px' }}>{l.prefix} $</span>}
            {l.cmd}
          </div>
        ))}
      </div>
    </div>
  );
}

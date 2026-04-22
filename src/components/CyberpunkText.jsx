export default function CyberpunkText() {
  return (
    <div style={{
      width: '600px', height: '400px',
      background: '#050510',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      fontFamily: "'DM Mono', monospace",
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Grid background */}
      <div style={{ 
        position: 'absolute', inset: 0, 
        backgroundImage: 'linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '30px 30px', opacity: 0.3,
        transform: 'perspective(500px) rotateX(60deg) scale(2)',
        transformOrigin: 'bottom',
      }} />

      <h1 className="glitch-wrapper" style={{
        fontSize: '64px', fontWeight: 800, color: '#fff',
        textTransform: 'uppercase', letterSpacing: '4px',
        position: 'relative', margin: 0,
      }}>
        CYBER_NET
        {/* Style tag just for the inner keyframes required for the glitch effect to avoid external CSS requirements */}
        <style>{`
          .glitch-wrapper { position: relative; }
          .glitch-wrapper::before, .glitch-wrapper::after {
            content: "CYBER_NET";
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background: #050510;
          }
          .glitch-wrapper::before {
            left: 3px; text-shadow: -2px 0 red;
            clip-path: inset(20% 0 80% 0);
            animation: glitch-anim-1 2s infinite linear alternate-reverse;
          }
          .glitch-wrapper::after {
            left: -3px; text-shadow: -2px 0 cyan;
            clip-path: inset(80% 0 20% 0);
            animation: glitch-anim-2 3s infinite linear alternate-reverse;
          }
          @keyframes glitch-anim-1 {
            0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); }
            20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -1px); }
            40% { clip-path: inset(40% 0 50% 0); transform: translate(2px, 2px); }
            60% { clip-path: inset(80% 0 5% 0); transform: translate(-2px, -2px); }
            80% { clip-path: inset(10% 0 70% 0); transform: translate(2px, -2px); }
            100% { clip-path: inset(30% 0 50% 0); transform: translate(-2px, 1px); }
          }
          @keyframes glitch-anim-2 {
            0% { clip-path: inset(10% 0 60% 0); transform: translate(2px, -1px); }
            20% { clip-path: inset(80% 0 5% 0); transform: translate(-2px, 2px); }
            40% { clip-path: inset(30% 0 20% 0); transform: translate(-2px, -2px); }
            60% { clip-path: inset(70% 0 10% 0); transform: translate(2px, 2px); }
            80% { clip-path: inset(20% 0 50% 0); transform: translate(2px, -1px); }
            100% { clip-path: inset(50% 0 30% 0); transform: translate(-2px, 2px); }
          }
        `}</style>
      </h1>
      
      <div style={{
        marginTop: '20px', display: 'flex', gap: '15px', position: 'relative'
      }}>
        <div style={{
          padding: '8px 24px', background: 'transparent',
          border: '2px solid #0ff', color: '#0ff',
          fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px',
          boxShadow: '0 0 10px rgba(0,255,255,0.4), inset 0 0 10px rgba(0,255,255,0.2)'
        }}>SYSTEM.INIT()</div>
        <div style={{
          padding: '8px 24px', background: '#f0f',
          border: '2px solid #f0f', color: '#fff',
          fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px',
          boxShadow: '0 0 15px rgba(255,0,255,0.6)'
        }}>OVERRIDE</div>
      </div>
    </div>
  );
}

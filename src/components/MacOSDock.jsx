import { useState } from 'react';

export default function MacOSDock() {
  const [hovered, setHovered] = useState(null);
  
  const icons = [
    { id: 1, color: '#f59e0b', emoji: '📁' },
    { id: 2, color: '#3b82f6', emoji: '🌐' },
    { id: 3, color: '#ef4444', emoji: '✉️' },
    { id: 4, color: '#10b981', emoji: '💬' },
    { id: 5, color: '#8b5cf6', emoji: '🎵' },
  ];

  return (
    <div style={{
      width: '600px', height: '400px',
      background: 'radial-gradient(circle at 50% 10%, #4c1d95 0%, #0f172a 100%)',
      display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
      paddingBottom: '20px',
      fontFamily: "'DM Mono', monospace",
    }}>
      <div style={{
        display: 'flex', alignItems: 'flex-end', gap: '10px',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '24px', padding: '10px 14px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.3)',
      }}>
        {icons.map((icon, i) => {
          let scale = 1;
          let margin = 0;
          if (hovered !== null) {
            const distance = Math.abs(hovered - i);
            if (distance === 0) { scale = 1.4; margin = 10; }
            else if (distance === 1) { scale = 1.2; margin = 5; }
          }

          return (
            <div
              key={icon.id}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                width: '48px', height: '48px',
                borderRadius: '12px',
                background: `linear-gradient(135deg, ${icon.color}, ${icon.color}aa)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '24px', cursor: 'pointer',
                transform: `scale(${scale}) translateY(${scale === 1 ? 0 : -8}px)`,
                transformOrigin: 'bottom center',
                margin: `0 ${margin}px`,
                transition: 'all 0.2s cubic-bezier(0.2, 0, 0.2, 1)',
                boxShadow: scale > 1 ? `0 10px 20px ${icon.color}66` : '0 4px 10px rgba(0,0,0,0.2)',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              {icon.emoji}
            </div>
          );
        })}
      </div>
    </div>
  );
}

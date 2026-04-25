import { useState } from 'react';

export default function ExpandableFAB() {
  const [isOpen, setIsOpen] = useState(false);
  
  const actions = [
    { label: 'Chat', icon: '💬', color: '#3b82f6' },
    { label: 'Call', icon: '📞', color: '#10b981' },
    { label: 'Mail', icon: '✉️', color: '#f59e0b' },
  ];

  return (
    <div style={{
      width: '600px', height: '400px',
      background: '#f3f4f6',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Inter', sans-serif",
    }}>
      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute', bottom: '70px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', gap: '12px',
          opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          transform: `translateX(-50%) translateY(${isOpen ? 0 : 20}px)`,
        }}>
          {actions.map((a, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end' }}>
              <span style={{ fontSize: '12px', fontWeight: 500, color: '#1a1a1a', background: '#fff', padding: '4px 12px', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>{a.label}</span>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: a.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '18px', boxShadow: '0 8px 16px rgba(0,0,0,0.1)', cursor: 'pointer' }}>{a.icon}</div>
            </div>
          ))}
        </div>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          style={{
            width: '60px', height: '60px', borderRadius: '50%', 
            background: '#1a1a1a', color: '#fff', border: 'none',
            fontSize: '24px', cursor: 'pointer',
            boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
            transition: 'transform 0.3s ease',
            transform: `rotate(${isOpen ? 45 : 0}deg)`,
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

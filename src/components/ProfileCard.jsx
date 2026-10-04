import { useState } from 'react';
import Icon from './Icon';

export default function ProfileCard() {
  const [following, setFollowing] = useState(false);
  const followers = 12480 + (following ? 1 : 0);

  return (
    <div style={{
      width: '600px', height: '400px', background: 'linear-gradient(160deg, #e0e7ff 0%, #fce7f3 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Inter', sans-serif",
    }}>
      <div style={{
        width: '300px', borderRadius: '24px', background: '#ffffff', overflow: 'hidden',
        boxShadow: '0 30px 60px -20px rgba(79,70,229,0.35), 0 0 0 1px rgba(0,0,0,0.03)',
      }}>
        <div style={{ height: '86px', background: 'linear-gradient(120deg, #6366f1, #ec4899 60%, #f59e0b)', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
        </div>
        <div style={{ padding: '0 22px 22px', marginTop: '-36px', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                width: '72px', height: '72px', borderRadius: '50%', border: '4px solid #fff',
                background: 'linear-gradient(135deg, #fbbf24, #f472b6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Fraunces', serif", fontSize: '28px', fontWeight: 600, color: '#fff',
              }}>R</div>
              <span style={{ position: 'absolute', right: '4px', bottom: '4px', width: '14px', height: '14px', borderRadius: '50%', background: '#22c55e', border: '3px solid #fff' }} />
            </div>
            <button onClick={() => setFollowing(f => !f)} style={{
              height: '34px', padding: '0 16px', borderRadius: '999px', fontFamily: 'inherit',
              fontSize: '12px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s',
              border: following ? '1px solid #e4e4e7' : '1px solid #18181b',
              background: following ? '#fff' : '#18181b', color: following ? '#18181b' : '#fff',
              display: 'flex', alignItems: 'center', gap: '6px',
            }}>
              {following ? <><Icon name="check" size={13} /> Following</> : <><Icon name="plus" size={13} /> Follow</>}
            </button>
          </div>
          <div style={{ marginTop: '10px' }}>
            <div style={{ fontSize: '17px', fontWeight: 700, color: '#18181b' }}>Riya Sharma</div>
            <div style={{ fontSize: '12px', color: '#71717a', marginTop: '2px' }}>@riyadesigns · Product Designer</div>
          </div>
          <p style={{ fontSize: '12px', lineHeight: 1.55, color: '#52525b', margin: '10px 0 14px' }}>
            Crafting calm interfaces at Linear. Type nerd, plant parent, occasional illustrator.
          </p>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
            {['UI', 'Design Systems', 'Motion'].map(t => (
              <span key={t} style={{ fontSize: '10px', fontWeight: 500, padding: '4px 9px', borderRadius: '999px', background: '#f4f4f5', color: '#52525b' }}>{t}</span>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid #f4f4f5', paddingTop: '12px', textAlign: 'center' }}>
            {[['Posts', '248'], ['Followers', followers.toLocaleString('en-US')], ['Following', '312']].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#18181b' }}>{v}</div>
                <div style={{ fontSize: '10px', color: '#a1a1aa', marginTop: '2px' }}>{k}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

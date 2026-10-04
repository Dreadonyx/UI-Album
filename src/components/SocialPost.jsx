import { useState } from 'react';
import Icon from './Icon';

export default function SocialPost() {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [burst, setBurst] = useState(0);

  const like = () => {
    setLiked(l => !l);
    if (!liked) setBurst(b => b + 1);
  };

  return (
    <div style={{ width: '600px', height: '400px', background: '#fafafa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @keyframes uaHeartPop { 0% { transform: scale(0); opacity: 0; } 40% { transform: scale(1.3); opacity: 1; } 70% { transform: scale(0.95); } 100% { transform: scale(1.6); opacity: 0; } }
        @keyframes uaLikeBump { 50% { transform: scale(1.3); } }
      `}</style>
      <article style={{ width: '320px', borderRadius: '18px', background: '#fff', border: '1px solid #efefef', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
        <header style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px' }}>
          <div style={{ padding: '2px', borderRadius: '50%', background: 'linear-gradient(45deg, #f59e0b, #ec4899, #8b5cf6)' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#0ea5e9', border: '2px solid #fff' }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#111' }}>studio.kin</div>
            <div style={{ fontSize: '10px', color: '#888' }}>Kyoto, Japan</div>
          </div>
          <Icon name="more" size={18} color="#555" />
        </header>

        <div onDoubleClick={() => { setLiked(true); setBurst(b => b + 1); }} style={{ position: 'relative', height: '180px', background: 'linear-gradient(160deg, #fde68a 0%, #fb7185 50%, #7c3aed 100%)', cursor: 'pointer', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(255,255,255,0.35)', bottom: '-30px', left: '30px', filter: 'blur(2px)' }} />
          <div style={{ position: 'absolute', inset: 'auto 0 0 0', height: '60px', background: 'linear-gradient(transparent, rgba(0,0,0,0.25))' }} />
          {burst > 0 && <span key={burst} style={{ position: 'absolute', animation: 'uaHeartPop 0.9s ease forwards', filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.25))' }}><Icon name="heart" size={70} color="#fff" fill="#fff" /></span>}
        </div>

        <div style={{ padding: '10px 12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '8px' }}>
            <button onClick={like} aria-pressed={liked} aria-label="Like" style={{ display: 'flex', border: 'none', background: 'none', padding: 0, cursor: 'pointer', animation: liked ? 'uaLikeBump 0.35s ease' : 'none' }}>
              <Icon name="heart" size={21} color={liked ? '#ef4444' : '#111'} fill={liked ? '#ef4444' : 'none'} />
            </button>
            <Icon name="message" size={20} color="#111" />
            <Icon name="send" size={19} color="#111" />
            <button onClick={() => setSaved(s => !s)} aria-pressed={saved} aria-label="Save" style={{ display: 'flex', border: 'none', background: 'none', padding: 0, cursor: 'pointer', marginLeft: 'auto' }}>
              <Icon name="bookmark" size={20} color="#111" fill={saved ? '#111' : 'none'} />
            </button>
          </div>
          <div style={{ fontSize: '12px', fontWeight: 600, color: '#111', marginBottom: '4px' }}>{(2481 + (liked ? 1 : 0)).toLocaleString('en-US')} likes</div>
          <div style={{ fontSize: '12px', color: '#222', lineHeight: 1.45 }}><b>studio.kin</b> Golden hour palettes for the new collection 🌅 Double-tap the photo.</div>
          <div style={{ fontSize: '10px', color: '#999', marginTop: '6px', textTransform: 'uppercase', letterSpacing: '0.4px' }}>2 hours ago</div>
        </div>
      </article>
    </div>
  );
}

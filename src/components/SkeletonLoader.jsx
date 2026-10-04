import { useEffect, useState } from 'react';

function Bone({ w = '100%', h = 10, r = 6, style }) {
  return <div className="ua-bone" style={{ width: w, height: h, borderRadius: r, ...style }} />;
}

const POSTS = [
  { name: 'Nadia Chen', time: '2m', text: 'Just shipped the new onboarding flow. Activation is up 24% in the first week.', color: '#f472b6' },
  { name: 'Leo Brandt', time: '18m', text: 'Hot take: skeleton screens beat spinners for perceived performance every time.', color: '#60a5fa' },
];

export default function SkeletonLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(l => !l), loading ? 2600 : 3200);
    return () => clearTimeout(t);
  }, [loading]);

  return (
    <div style={{ width: '600px', height: '400px', background: '#0e1015', padding: '26px 60px', fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        .ua-bone { background: linear-gradient(90deg, #1a1d25 0%, #262a35 40%, #1a1d25 80%) 0 0 / 300% 100%; animation: uaBoneShimmer 1.4s ease-in-out infinite; }
        @keyframes uaBoneShimmer { from { background-position: 100% 0; } to { background-position: -50% 0; } }
      `}</style>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div style={{ fontSize: '15px', fontWeight: 600, color: '#e5e7eb' }}>Feed</div>
        <button onClick={() => setLoading(l => !l)} style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', padding: '5px 10px', borderRadius: '999px', border: '1px solid #2a2e39', background: 'transparent', color: loading ? '#a78bfa' : '#6b7280', cursor: 'pointer' }}>
          {loading ? '● loading' : '○ loaded'}
        </button>
      </div>
      <div aria-busy={loading} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {POSTS.map(p => (
          <div key={p.name} style={{ padding: '16px', borderRadius: '14px', background: '#14171e', border: '1px solid #1d2029' }}>
            {loading ? (
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <Bone w={36} h={36} r={18} />
                  <div style={{ flex: 1 }}><Bone w="40%" h={10} style={{ marginBottom: '7px' }} /><Bone w="20%" h={8} /></div>
                </div>
                <Bone h={9} style={{ marginBottom: '8px' }} /><Bone w="85%" h={9} style={{ marginBottom: '8px' }} /><Bone w="55%" h={9} />
              </>
            ) : (
              <div style={{ animation: 'fadeSlideUp 0.4s ease' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: `linear-gradient(135deg, ${p.color}, ${p.color}55)` }} />
                  <div><div style={{ fontSize: '13px', fontWeight: 600, color: '#e5e7eb' }}>{p.name}</div><div style={{ fontSize: '11px', color: '#6b7280' }}>{p.time} ago</div></div>
                </div>
                <p style={{ fontSize: '13px', lineHeight: 1.55, color: '#c4c8d2' }}>{p.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

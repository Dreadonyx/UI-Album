import { useState } from 'react';
import Icon from './Icon';

const STEPS = ['Account', 'Workspace', 'Plan', 'Done'];
const PLANS = [
  { id: 'free', name: 'Free', price: '$0' },
  { id: 'pro', name: 'Pro', price: '$12' },
  { id: 'biz', name: 'Business', price: '$40' },
];

export default function MultiStepWizard() {
  const [step, setStep] = useState(1);
  const [workspace, setWorkspace] = useState('acme-studio');
  const [plan, setPlan] = useState('pro');

  const input = { width: '100%', height: '40px', padding: '0 12px', borderRadius: '10px', border: '1px solid #d6d3d1', fontSize: '13px', fontFamily: 'inherit', color: '#1c1917', outline: 'none', background: '#fff' };

  return (
    <div style={{
      width: '600px', height: '400px', background: '#f5f5f4', padding: '26px 44px',
      display: 'flex', flexDirection: 'column', fontFamily: "'Inter', sans-serif",
    }}>
      <ol style={{ display: 'flex', alignItems: 'center', listStyle: 'none', marginBottom: '24px' }}>
        {STEPS.map((s, i) => {
          const done = i < step;
          const current = i === step;
          return (
            <li key={s} style={{ display: 'flex', alignItems: 'center', flex: i < STEPS.length - 1 ? 1 : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{
                  width: '26px', height: '26px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '11px', fontWeight: 600, transition: 'all 0.3s',
                  background: done ? '#0f766e' : current ? '#fff' : '#e7e5e4',
                  color: done ? '#fff' : current ? '#0f766e' : '#a8a29e',
                  border: current ? '2px solid #0f766e' : '2px solid transparent',
                  boxShadow: current ? '0 0 0 4px rgba(15,118,110,0.12)' : 'none',
                }}>{done ? <Icon name="check" size={13} strokeWidth={3} /> : i + 1}</span>
                <span style={{ fontSize: '12px', fontWeight: current ? 600 : 400, color: current || done ? '#1c1917' : '#a8a29e' }}>{s}</span>
              </div>
              {i < STEPS.length - 1 && (
                <div style={{ flex: 1, height: '2px', margin: '0 10px', background: '#e7e5e4', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: done ? '100%' : '0%', background: '#0f766e', transition: 'width 0.4s ease' }} />
                </div>
              )}
            </li>
          );
        })}
      </ol>

      <div key={step} style={{ flex: 1, padding: '22px 24px', borderRadius: '16px', background: '#fff', border: '1px solid #e7e5e4', animation: 'fadeSlideUp 0.35s cubic-bezier(0.16,1,0.3,1)' }}>
        {step === 0 && (
          <>
            <h3 style={{ fontSize: '17px', color: '#1c1917', marginBottom: '14px' }}>Create your account</h3>
            <input style={{ ...input, marginBottom: '10px' }} defaultValue="Jordan Lee" aria-label="Full name" />
            <input style={input} defaultValue="jordan@acme.co" aria-label="Email" />
          </>
        )}
        {step === 1 && (
          <>
            <h3 style={{ fontSize: '17px', color: '#1c1917', marginBottom: '4px' }}>Name your workspace</h3>
            <p style={{ fontSize: '12px', color: '#78716c', marginBottom: '14px' }}>This is where your team will collaborate.</p>
            <div style={{ display: 'flex', alignItems: 'center', borderRadius: '10px', border: '1px solid #0f766e', boxShadow: '0 0 0 3px rgba(15,118,110,0.1)', overflow: 'hidden' }}>
              <span style={{ padding: '0 10px', height: '40px', display: 'flex', alignItems: 'center', background: '#f5f5f4', fontSize: '12px', color: '#78716c', borderRight: '1px solid #e7e5e4' }}>app.co/</span>
              <input value={workspace} onChange={e => setWorkspace(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))} aria-label="Workspace URL" style={{ ...input, border: 'none' }} />
            </div>
            <div style={{ fontSize: '11px', color: '#0f766e', marginTop: '8px', display: 'flex', alignItems: 'center', gap: '5px' }}><Icon name="checkCircle" size={12} /> {workspace || 'workspace'} is available</div>
          </>
        )}
        {step === 2 && (
          <>
            <h3 style={{ fontSize: '17px', color: '#1c1917', marginBottom: '14px' }}>Choose a plan</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
              {PLANS.map(p => (
                <button key={p.id} onClick={() => setPlan(p.id)} style={{
                  flex: 1, padding: '14px', borderRadius: '12px', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit',
                  border: plan === p.id ? '2px solid #0f766e' : '2px solid #e7e5e4', background: plan === p.id ? '#f0fdfa' : '#fff',
                }}>
                  <div style={{ fontSize: '12px', color: '#78716c' }}>{p.name}</div>
                  <div style={{ fontSize: '20px', fontWeight: 700, color: '#1c1917' }}>{p.price}<span style={{ fontSize: '11px', fontWeight: 400, color: '#a8a29e' }}>/mo</span></div>
                </button>
              ))}
            </div>
          </>
        )}
        {step === 3 && (
          <div style={{ textAlign: 'center', paddingTop: '8px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#ccfbf1', color: '#0f766e', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}><Icon name="check" size={24} strokeWidth={3} /></div>
            <h3 style={{ fontSize: '17px', color: '#1c1917', marginBottom: '4px' }}>You’re all set!</h3>
            <p style={{ fontSize: '12px', color: '#78716c' }}>app.co/{workspace} is ready on the {PLANS.find(p => p.id === plan).name} plan.</p>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
        <button onClick={() => setStep(s => Math.max(0, s - 1))} disabled={step === 0} style={{ height: '38px', padding: '0 16px', borderRadius: '10px', border: '1px solid #d6d3d1', background: '#fff', color: step === 0 ? '#d6d3d1' : '#44403c', fontFamily: 'inherit', fontSize: '13px', cursor: step === 0 ? 'not-allowed' : 'pointer' }}>Back</button>
        <button onClick={() => setStep(s => (s === STEPS.length - 1 ? 0 : s + 1))} style={{ height: '38px', padding: '0 18px', borderRadius: '10px', border: 'none', background: '#0f766e', color: '#fff', fontFamily: 'inherit', fontSize: '13px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
          {step === STEPS.length - 1 ? 'Start over' : 'Continue'} <Icon name="arrowRight" size={14} />
        </button>
      </div>
    </div>
  );
}

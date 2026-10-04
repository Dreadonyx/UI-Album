import { useEffect, useState } from 'react';
import Icon from './Icon';

const INITIAL = [
  { name: 'brand-guidelines.pdf', size: '4.2 MB', progress: 100 },
  { name: 'hero-shot@2x.png', size: '1.8 MB', progress: 64 },
];

export default function FileDropzone() {
  const [files, setFiles] = useState(INITIAL);
  const [dragging, setDragging] = useState(false);

  const uploading = files.some(f => f.progress < 100);

  useEffect(() => {
    if (!uploading) return;
    const t = setInterval(() => {
      setFiles(fs => fs.map(f => f.progress < 100 ? { ...f, progress: Math.min(100, f.progress + 4) } : f));
    }, 120);
    return () => clearInterval(t);
  }, [uploading]);

  const addFiles = list => {
    const added = Array.from(list).slice(0, 3).map(f => ({ name: f.name, size: `${(f.size / 1048576).toFixed(1)} MB`, progress: 0 }));
    if (added.length) setFiles(fs => [...added, ...fs].slice(0, 4));
  };

  return (
    <div style={{
      width: '600px', height: '400px', background: '#f6f7fb', padding: '28px 40px',
      display: 'flex', flexDirection: 'column', gap: '16px', fontFamily: "'Inter', sans-serif",
    }}>
      <label
        onDragOver={e => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={e => { e.preventDefault(); setDragging(false); addFiles(e.dataTransfer.files); }}
        style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px',
          height: '150px', borderRadius: '18px', cursor: 'pointer', transition: 'all 0.2s',
          border: `2px dashed ${dragging ? '#7c3aed' : '#cbd2e1'}`,
          background: dragging ? 'rgba(124,58,237,0.06)' : '#fff',
          transform: dragging ? 'scale(1.01)' : 'none',
        }}
      >
        <input type="file" multiple onChange={e => addFiles(e.target.files)} style={{ display: 'none' }} />
        <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#f3e8ff', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="upload" size={20} />
        </div>
        <div style={{ fontSize: '14px', color: '#1e293b' }}><span style={{ color: '#7c3aed', fontWeight: 600 }}>Click to upload</span> or drag and drop</div>
        <div style={{ fontSize: '11px', color: '#94a3b8' }}>PNG, JPG, PDF up to 25 MB</div>
      </label>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {files.map((f, i) => {
          const done = f.progress >= 100;
          return (
            <div key={f.name + i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', borderRadius: '12px', background: '#fff', border: '1px solid #e8ebf2' }}>
              <div style={{ width: '34px', height: '34px', borderRadius: '9px', background: done ? '#ecfdf5' : '#f1f5f9', color: done ? '#10b981' : '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={done ? 'checkCircle' : 'file'} size={17} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                  <span style={{ color: '#1e293b', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.name}</span>
                  <span style={{ color: '#94a3b8', fontFamily: "'DM Mono', monospace", fontSize: '11px', flexShrink: 0, marginLeft: '8px' }}>{done ? f.size : `${f.progress}%`}</span>
                </div>
                <div style={{ height: '4px', borderRadius: '4px', background: '#eef1f6', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${f.progress}%`, borderRadius: '4px', background: done ? '#10b981' : 'linear-gradient(90deg, #a78bfa, #7c3aed)', transition: 'width 0.15s linear' }} />
                </div>
              </div>
              <button onClick={() => setFiles(fs => fs.filter((_, j) => j !== i))} aria-label={`Remove ${f.name}`} style={{ display: 'flex', border: 'none', background: 'none', color: '#94a3b8', cursor: 'pointer', padding: '4px' }}>
                <Icon name="trash" size={15} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

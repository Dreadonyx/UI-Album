import { useEffect, useState } from 'react';

// Shared demo state for the Themes collection: every design style renders the same
// "Deep Work" focus widget so the styles can be compared side by side.
export default function useFocusSession(initial = 72) {
  const [progress, setProgress] = useState(initial);
  const [running, setRunning] = useState(false);
  const [dnd, setDnd] = useState(true);

  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => setProgress(p => (p >= 100 ? initial : p + 1)), 400);
    return () => clearInterval(t);
  }, [running, initial]);

  return {
    progress,
    running,
    toggleRunning: () => setRunning(r => !r),
    dnd,
    toggleDnd: () => setDnd(d => !d),
  };
}

import { useEffect, useState } from 'react';

export function useResponsive(breakpoints: Record<string, number>) {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string | null>(null);

  useEffect(() => {
    function updateBreakpoint() {
      const width = window.innerWidth;
      let matched = null;
      for (const key of Object.keys(breakpoints)) {
        if (width >= breakpoints[key]) {
          matched = key;
        }
      }
      setCurrentBreakpoint(matched);
    }

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, [breakpoints]);

  return currentBreakpoint;
}

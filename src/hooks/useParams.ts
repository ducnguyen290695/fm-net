import { useMemo } from 'react';

export function useParams() {
  return useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const entries = Array.from(params.entries());
    
    return Object.fromEntries(entries);
  }, [window.location.search]);
}

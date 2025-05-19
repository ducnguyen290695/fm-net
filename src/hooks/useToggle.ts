import { useCallback, useState } from 'react';

export function useToggle(initialValue = false) {
  const [state, setState] = useState(initialValue);

  const toggle = useCallback(() => setState(s => !s), []);
  
  return [state, toggle] as const;
}

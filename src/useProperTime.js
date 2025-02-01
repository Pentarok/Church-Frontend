import { useCallback } from 'react';

const useProperTime = () => {
  const getProperTime = useCallback((isoString) => {
    const options = { hour: '2-digit', minute: '2-digit', hour12: true };
    return new Date(isoString).toLocaleTimeString('en-US', options);
  }, []);

  return getProperTime;
};

export default useProperTime;

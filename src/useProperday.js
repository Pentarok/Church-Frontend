import { useCallback } from 'react';

const useProperDay = () => {
  const getProperDay = useCallback((isoString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(isoString).toLocaleDateString('en-US', options);
  }, []);

  return getProperDay;
};

export default useProperDay;

import { useEffect, useState } from 'react';

const isMobile = () => {
  if (typeof window === 'undefined') {
    return true;
  }
  return window.innerWidth <= 696;
};

export const useMobileSize = () => {
  // Initialize the mobile size to an accurate value on initial state set
  const [isMobileSize, setIsMobileSize] = useState(isMobile);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const autoResize = () => {
      setIsMobileSize(isMobile());
    };

    window.addEventListener('resize', autoResize);

    autoResize();

    // Return a function to disconnect the event listener
    return () => window.removeEventListener('resize', autoResize);
  }, []);

  return isMobileSize;
};

import { useState, useEffect, useRef } from 'react';

function usePageScrolling() {
  const [isScrolling, setIsScrolling] = useState(false);
  const timeoutIdRef = useRef<NodeJS.Timeout | number | undefined>(undefined);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      if (timeoutIdRef.current !== undefined) {
        clearTimeout(timeoutIdRef.current);
      }

      timeoutIdRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutIdRef.current !== undefined) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  return isScrolling;
}

export default usePageScrolling;
import { useEffect } from 'react';

interface Options extends IntersectionObserverInit {
}

function useIntersectionObserver(
  elementRef: React.RefObject<HTMLElement>,
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: Options,
): void {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    const current = elementRef.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [elementRef, callback, options]);
}

export default useIntersectionObserver;

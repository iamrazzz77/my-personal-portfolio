import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;

    if (hash) {
      const targetId = hash.replace('#', '');

      const performScroll = () => {
        const element = document.getElementById(targetId);
        if (element) {
          const headerOffset = 90;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      };

      // Perform scroll immediately and retry after render frame
      performScroll();
      const timer1 = setTimeout(performScroll, 100);
      const timer2 = setTimeout(performScroll, 350);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    } else {
      // Scroll to top on normal route change
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return null;
};

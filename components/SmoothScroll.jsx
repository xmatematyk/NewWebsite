import { useEffect } from 'react';

function useSmoothScrollToTarget() {
  useEffect(() => {
    const smoothScroll = (event) => {
      if (event.target.hash) {
        event.preventDefault();
        const targetId = event.target.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth' // Ustawienie smooth scroll
          });
        }
      }
    };

    document.addEventListener('click', smoothScroll);

    return () => {
      document.removeEventListener('click', smoothScroll);
    };
  }, []);
}

export default useSmoothScrollToTarget;

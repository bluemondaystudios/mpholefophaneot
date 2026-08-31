import { useEffect, useRef, useState } from 'react';

/**
 * Single rAF-throttled scroll listener driving the header hide/show,
 * scroll-progress bar, back-to-top visibility and nav scrollspy —
 * mirrors the original vanilla-JS behavior in one place.
 */
export function useScrollState(sectionIds, menuOpen) {
  const [progress, setProgress] = useState(0);
  const [headerHidden, setHeaderHidden] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '');
  const lastY = useRef(0);
  const ticking = useRef(false);
  const menuOpenRef = useRef(menuOpen);

  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    function onScroll() {
      const y = Math.max(window.scrollY, 0);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(y / docHeight, 1) : 0);

      if (!menuOpenRef.current) {
        setHeaderHidden(y > lastY.current && y > 140);
      }

      setShowBackToTop(y > 600);

      lastY.current = y;
      ticking.current = false;
    }

    function requestTick() {
      if (!ticking.current) {
        requestAnimationFrame(onScroll);
        ticking.current = true;
      }
    }

    window.addEventListener('scroll', requestTick, { passive: true });
    onScroll();

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    sections.forEach((section) => spy.observe(section));

    return () => {
      window.removeEventListener('scroll', requestTick);
      spy.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { progress, headerHidden, showBackToTop, activeSection };
}

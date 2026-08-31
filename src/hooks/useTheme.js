import { useCallback, useEffect, useState } from 'react';

function getInitialTheme() {
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Tracks light/dark theme, persists an explicit choice to localStorage,
 * and keeps <html class="dark"> in sync. index.html carries an inline
 * script mirroring getInitialTheme's logic so the correct class is set
 * before React ever mounts (no flash of the wrong theme).
 */
export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Follow the OS theme live, but only until the visitor makes an explicit
  // choice via the toggle (tracked separately so a stored preference wins).
  useEffect(() => {
    if (localStorage.getItem('theme-explicit') === 'true') return;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e) => setTheme(e.matches ? 'dark' : 'light');
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    localStorage.setItem('theme-explicit', 'true');
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme };
}

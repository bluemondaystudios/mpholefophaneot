import { AnimatePresence, motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle.jsx';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#milestones', label: 'Milestones' },
  { href: '#services', label: 'Services' },
];

// Closing the mobile menu re-renders + reflows the page while the browser's
// native smooth-scroll animator is still mid-flight, and that animator
// silently cancels itself on essentially any reflow during the scroll —
// not just one in the same tick, a delay of a few frames doesn't dodge it
// either, since the scroll itself takes hundreds of ms. Driving the scroll
// ourselves frame-by-frame sidesteps that entirely: nothing to cancel, we
// just keep re-setting the position every frame until we arrive.
function smoothScrollTo(targetY, duration = 500) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  if (diff === 0) return;
  const startTime = performance.now();

  function step(now) {
    const t = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
    window.scrollTo(0, startY + diff * eased);
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

export default function Header({ hidden, activeSection, menuOpen, onToggleMenu, onCloseMenu, theme, onToggleTheme }) {
  function handleNavClick(e, href) {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      history.pushState(null, '', href); // matches native hash-navigation, without its scroll step
      const scrollMarginTop = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
      const targetY = window.scrollY + target.getBoundingClientRect().top - scrollMarginTop;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      reduceMotion ? window.scrollTo(0, targetY) : smoothScrollTo(targetY);
    }
    onCloseMenu();
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out ${hidden ? '-translate-y-[130%]' : 'translate-y-0'}`}
    >
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between rounded-2xl border border-cream-200 bg-cream-50/90 px-4 py-3 shadow-lg shadow-navy/5 backdrop-blur-md dark:border-white/10 dark:bg-navy-900/80">
          <a href="#home" className="flex items-center gap-3">
            <img src="/logo.jpg" width="1182" height="922" alt="Mpho Lefophane Occupational Therapy logo" className="h-11 w-auto rounded-lg object-contain" />
            <div className="hidden sm:block leading-tight">
              <p className="font-semibold text-navy dark:text-cream-50">Mpho Lefophane</p>
              <p className="text-xs text-stone-500 dark:text-stone-400">Occupational Therapy</p>
            </div>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition hover:text-coral-600 dark:hover:text-coral-300 ${activeSection === link.href.slice(1) ? 'text-coral-600 dark:text-coral-300' : 'text-stone-600 dark:text-stone-300'}`}
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <a href="#contact" className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-coral-600">
              Book / enquire
            </a>
          </div>

          <div className="flex items-center gap-2.5 md:hidden">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              onClick={onToggleMenu}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="rounded-xl border border-stone-200 p-2.5 text-navy dark:border-white/10 dark:text-cream-50"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mt-2 flex flex-col rounded-2xl border border-cream-200 bg-cream-50 p-4 shadow-xl md:hidden dark:border-white/10 dark:bg-navy-900"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="rounded-xl px-4 py-3 font-medium text-navy hover:bg-coral-50 dark:text-cream-50 dark:hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="mt-2 rounded-xl bg-navy px-4 py-3 text-center font-semibold text-white"
              >
                Book / enquire
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

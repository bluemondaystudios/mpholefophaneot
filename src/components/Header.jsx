import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#milestones', label: 'Milestones' },
  { href: '#services', label: 'Services' },
];

export default function Header({ hidden, activeSection, menuOpen, onToggleMenu, onCloseMenu }) {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out ${hidden ? '-translate-y-[130%]' : 'translate-y-0'}`}
    >
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between rounded-2xl border border-cream-200 bg-cream-50/90 px-4 py-3 shadow-lg shadow-navy/5 backdrop-blur-md">
          <a href="#home" className="flex items-center gap-3">
            <img src="/logo.jpg" width="1182" height="922" alt="Mpho Lefophane Occupational Therapy logo" className="h-11 w-auto rounded-lg object-contain" />
            <div className="hidden sm:block leading-tight">
              <p className="font-semibold text-navy">Mpho Lefophane</p>
              <p className="text-xs text-stone-500">Occupational Therapy</p>
            </div>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition hover:text-coral-600 ${activeSection === link.href.slice(1) ? 'text-coral-600' : 'text-stone-600'}`}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-coral-600">
              Book / enquire
            </a>
          </div>

          <button
            onClick={onToggleMenu}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="rounded-xl border border-stone-200 p-2.5 text-navy md:hidden"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mt-2 flex flex-col rounded-2xl border border-cream-200 bg-cream-50 p-4 shadow-xl md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} onClick={onCloseMenu} className="rounded-xl px-4 py-3 font-medium hover:bg-coral-50">
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={onCloseMenu} className="mt-2 rounded-xl bg-navy px-4 py-3 text-center font-semibold text-white">
                Book / enquire
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from './Reveal.jsx';

export default function ServiceCard({ service, delay = 0 }) {
  const [open, setOpen] = useState(false);
  const hasDetails = Boolean(service.groups);

  return (
    <Reveal
      as="article"
      delay={delay}
      className="rounded-3xl bg-cream-50 p-7 shadow-sm ring-1 ring-stone-100 transition hover:-translate-y-1 hover:shadow-warm dark:bg-navy-800 dark:ring-white/10"
    >
      <img src={service.icon} width="240" height="240" alt="" loading="lazy" decoding="async" className="h-14 w-14 rounded-full object-cover ring-1 ring-stone-100 dark:ring-white/10" />
      <h3 className="mt-5 text-xl font-semibold text-navy dark:text-cream-50">{service.title}</h3>

      {service.summary && <p className="mt-3 leading-7 text-stone-600 dark:text-stone-400">{service.summary}</p>}

      {hasDetails && (
        <div className="mt-4">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-coral-600 transition hover:text-coral-700 dark:text-coral-300 dark:hover:text-coral-200"
          >
            See details
            <motion.svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="overflow-hidden"
              >
                <div className="pt-3">
                  {service.groups.map((group, i) => (
                    <div key={group.label ?? i} className={i > 0 ? 'mt-4' : ''}>
                      {group.label && <p className="text-xs font-semibold uppercase tracking-wide text-navy/70 dark:text-cream-50/70">{group.label}</p>}
                      <ul className={`list-disc space-y-1.5 pl-4 text-sm leading-6 text-stone-600 dark:text-stone-400 ${group.label ? 'mt-2' : ''}`}>
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </Reveal>
  );
}

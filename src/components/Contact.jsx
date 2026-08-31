import { memo } from 'react';
import Reveal from './Reveal.jsx';

function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 bg-teal-50/50 py-20 lg:py-28 dark:bg-navy-800/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.85fr_1fr] lg:px-8">
        <Reveal className="rounded-[2rem] bg-cream-50 p-7 shadow-soft sm:p-9 lg:order-1 dark:bg-navy-800">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-coral-600 dark:text-coral-300">Professional details</p>
          <h3 className="mt-3 text-2xl font-semibold text-navy dark:text-cream-50">A qualified, registered practitioner.</h3>
          <div className="mt-7 divide-y divide-stone-100 dark:divide-white/10">
            <div className="flex justify-between gap-4 py-4">
              <span className="text-stone-500 dark:text-stone-400">Practice number</span>
              <strong className="text-navy dark:text-cream-50">1296477</strong>
            </div>
            <div className="flex justify-between gap-4 py-4">
              <span className="text-stone-500 dark:text-stone-400">HPCSA number</span>
              <strong className="text-navy dark:text-cream-50">OT 0115665</strong>
            </div>
          </div>
          <a
            href="mailto:mpholefophane@icloud.com?subject=Website%20Enquiry&body=Name%3A%20%0APhone%3A%20%0AEnquiry%3A%20"
            className="mt-7 flex w-full items-center justify-center rounded-xl bg-navy px-5 py-3.5 font-semibold text-white transition hover:bg-coral-600"
          >
            Send an enquiry by email
          </a>
          <p className="mt-4 text-center text-xs leading-5 text-stone-400 dark:text-stone-500">
            This opens your email app with a template ready to fill in and send — please avoid including sensitive medical information
            over email.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="lg:order-2">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-coral-600 dark:text-coral-300">Contact</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-navy sm:text-5xl dark:text-cream-50">Ready when you are.</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-stone-600 dark:text-stone-400">
            Get in touch to discuss your needs, ask a question or enquire about an appointment.
          </p>

          <div className="mt-9 space-y-4">
            <a href="tel:+27661342941" className="flex items-center gap-4 rounded-2xl bg-cream-50 p-5 shadow-sm ring-1 ring-stone-100 transition hover:ring-coral-200 dark:bg-navy-800 dark:ring-white/10 dark:hover:ring-coral-500/40">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-coral-100 text-coral-600 dark:bg-coral-500/15 dark:text-coral-300">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 5c0-.6.4-1 1-1h2.2c.5 0 .9.3 1 .8L9 8c.1.4 0 .8-.3 1.1L7.2 10.6a12 12 0 006.2 6.2l1.5-1.5c.3-.3.7-.4 1.1-.3l3.2.8c.5.1.8.5.8 1V19c0 .6-.4 1-1 1h-1C9.9 20 4 14.1 4 6.5V5z" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500">Phone</p>
                <p className="mt-1 font-semibold text-navy dark:text-cream-50">066 134 2941</p>
              </div>
            </a>
            <a
              href="mailto:mpholefophane@icloud.com?subject=Website%20Enquiry&body=Name%3A%20%0APhone%3A%20%0AEnquiry%3A%20"
              className="flex items-center gap-4 rounded-2xl bg-cream-50 p-5 shadow-sm ring-1 ring-stone-100 transition hover:ring-coral-200 dark:bg-navy-800 dark:ring-white/10 dark:hover:ring-coral-500/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-coral-100 text-coral-600 dark:bg-coral-500/15 dark:text-coral-300">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75">
                  <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6.5l8 6.5 8-6.5" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500">Email</p>
                <p className="mt-1 font-semibold text-navy dark:text-cream-50">mpholefophane@icloud.com</p>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl bg-cream-50 p-5 shadow-sm ring-1 ring-stone-100 dark:bg-navy-800 dark:ring-white/10">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-coral-100 text-coral-600 dark:bg-coral-500/15 dark:text-coral-300">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.1 7-11.5a7 7 0 10-14 0C5 14.9 12 21 12 21z" />
                  <circle cx="12" cy="9.5" r="2.4" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500">Office</p>
                <p className="mt-1 font-semibold text-navy dark:text-cream-50">Intercare, The Tramshed, Cnr Francis Baard & Lilian Ngoyi, Pretoria CBD, 0002</p>
                <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">Service area: Pretoria & surrounding areas</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="overflow-hidden rounded-[2rem] shadow-soft lg:order-3 lg:col-span-2">
          <iframe
            src="https://www.google.com/maps?q=Intercare%20The%20Tramshed%2C%20Cnr%20Francis%20Baard%20%26%20Lilian%20Ngoyi%2C%20Pretoria%20CBD&output=embed"
            className="h-72 w-full border-0 sm:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map showing Mpho Lefophane Occupational Therapy's office at Intercare, The Tramshed, Pretoria"
          />
        </Reveal>
      </div>
    </section>
  );
}

export default memo(Contact);

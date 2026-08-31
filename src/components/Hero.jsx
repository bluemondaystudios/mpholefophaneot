import { memo } from 'react';
import Reveal from './Reveal.jsx';
import FadeImage from './FadeImage.jsx';

// Memoized: takes no props, so this bails out of re-rendering when App
// re-renders for scroll-driven state (header hide/show, progress bar,
// back-to-top) that has nothing to do with this section.
function Hero() {
  return (
    <section id="home" className="warm-orb relative overflow-hidden pt-32 text-white lg:pt-40">
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pb-28">
        <Reveal>
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Care that meets <span className="display font-semibold italic text-coral-200">you.</span>
          </h1>

          <div className="mt-12 flex flex-col gap-3 sm:mt-16 sm:flex-row lg:mt-20">
            <a
              href="https://wa.me/27661342941?text=Hello%20Mpho%2C%20I%27d%20like%20to%20make%20an%20occupational%20therapy%20enquiry."
              className="inline-flex items-center justify-center rounded-full bg-cream-50 px-7 py-3.5 font-semibold text-navy shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-coral-100"
            >
              Make an enquiry
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
            >
              Explore services
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-4 rounded-[3rem] bg-coral-100/60 blur-2xl" />
          <div className="warm-orb relative overflow-hidden rounded-[2.5rem] p-3 shadow-soft">
            <div className="relative overflow-hidden rounded-[2rem] bg-cream-50">
              <FadeImage
                src="/mpho-portrait2.jpg"
                width="749"
                height="1248"
                alt="Mpho Lefophane, Occupational Therapist"
                fetchpriority="high"
                className="h-[520px] w-full object-cover object-[75%_15%] sm:h-[600px]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/95 via-navy/55 to-transparent p-7 pt-24 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral-200">Mpho Lefophane</p>
                <p className="display mt-1 text-2xl">Occupational Therapist</p>
                <p className="mt-2 text-sm text-cream-100/90">PR No. 1296477 · HPCSA No. OT 0115665</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 left-[-280px] hidden rounded-2xl bg-cream-50 p-4 shadow-xl lg:block">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-coral-100 text-coral-600">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21s8-4.5 8-10.5A4.5 4.5 0 0012 7a4.5 4.5 0 00-8 3.5C4 16.5 12 21 12 21z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-navy">Compassionate care</p>
                <p className="text-xs text-stone-500">Personalised to your needs</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default memo(Hero);

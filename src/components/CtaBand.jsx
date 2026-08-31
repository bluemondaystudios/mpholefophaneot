import { memo } from 'react';
import Reveal from './Reveal.jsx';

function CtaBand() {
  return (
    <section className="warm-orb py-20 text-white lg:py-24">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-coral-200">Care that meets you</p>
          <h2 className="display mt-4 text-4xl font-semibold italic sm:text-5xl">Let's work toward meaningful progress.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-cream-100/90">
            Whether you are looking for rehabilitation, developmental support, an assessment or practical adaptations, start with a
            conversation.
          </p>
          <a
            href="https://wa.me/27661342941?text=Hello%20Mpho%2C%20I%27d%20like%20to%20make%20an%20occupational%20therapy%20enquiry."
            className="mt-8 inline-flex rounded-full bg-cream-50 px-7 py-3.5 font-semibold text-navy transition hover:-translate-y-0.5 hover:bg-coral-100"
          >
            Start an enquiry on WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default memo(CtaBand);

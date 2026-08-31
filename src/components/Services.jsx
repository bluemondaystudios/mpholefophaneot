import Reveal from './Reveal.jsx';
import ServiceCard from './ServiceCard.jsx';
import { services } from '../data/services.js';

export default function Services() {
  return (
    <section id="services" className="scroll-mt-28 bg-coral-50/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-coral-600">Services</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-navy sm:text-5xl">Support for different stages of life.</h2>
          <p className="mt-5 text-lg leading-8 text-stone-600">
            A broad occupational therapy offering, with care tailored to the individual rather than a one-size-fits-all programme.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} delay={(i % 3) * 0.06} />
          ))}

          <Reveal
            as="article"
            className="flex flex-col items-start gap-5 rounded-3xl bg-navy p-8 text-white shadow-sm sm:col-span-2 sm:flex-row sm:items-center sm:justify-between lg:col-span-3"
          >
            <div>
              <p className="display text-xl italic text-coral-200 sm:text-2xl">Can't come to the practice? We'll come to you.</p>
              <p className="mt-3 max-w-xl leading-7 text-cream-100/80">
                Mobile occupational therapy across Pretoria and surrounding areas — assessment and treatment in the comfort of your
                home, school, workplace, hospital or care facility.
              </p>
            </div>
            <a
              href="https://wa.me/27661342941?text=Hello%20Mpho%2C%20I%27d%20like%20to%20enquire%20about%20mobile%20occupational%20therapy%20sessions."
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-cream-50 px-6 py-3 font-semibold text-navy transition hover:-translate-y-0.5 hover:bg-coral-100"
            >
              Enquire about mobile sessions
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

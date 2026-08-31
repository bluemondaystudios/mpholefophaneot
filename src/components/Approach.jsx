import { memo } from 'react';
import Reveal from './Reveal.jsx';

const STEPS = [
  { num: '01', title: 'At home', desc: 'Care in the environment where daily routines happen.', tone: 'coral' },
  { num: '02', title: 'At school', desc: 'Support for learning, participation and school-based needs.', tone: 'teal' },
  { num: '03', title: 'At our office', desc: 'Professional consultations at the practice in Pretoria.', tone: 'coral' },
];

function Approach() {
  return (
    <section id="approach" className="scroll-mt-28 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal as="p" className="text-sm font-bold uppercase tracking-[0.2em] text-coral-600">
          Our approach
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal
              key={step.num}
              delay={i * 0.08}
              className={`rounded-3xl border p-6 ${step.tone === 'coral' ? 'border-coral-100 bg-coral-50' : 'border-teal-100 bg-teal-50'}`}
            >
              <p className={`display text-2xl font-semibold ${step.tone === 'coral' ? 'text-coral-600' : 'text-teal-700'}`}>{step.num}</p>
              <h3 className="mt-8 text-xl font-semibold text-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Approach);

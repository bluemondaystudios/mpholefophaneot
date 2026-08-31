import { memo } from 'react';
import Reveal from './Reveal.jsx';
import FadeImage from './FadeImage.jsx';

function Milestones() {
  return (
    <section id="milestones" className="scroll-mt-28 bg-cream-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-coral-600">Milestones</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            Qualified, and present in the community.
          </h2>
          <p className="mt-5 text-lg leading-8 text-stone-600">
            From the day the qualification was earned to the sessions shared with clients and community groups, every
            milestone shapes the way care is delivered.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="relative lg:col-span-4">
            <div className="absolute -inset-3 rounded-[2.5rem] bg-coral-100/60 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
              <FadeImage
                src="/grad.jpg"
                width="900"
                height="1241"
                alt="Mpho Lefophane graduating as an Occupational Therapist"
                loading="lazy"
                decoding="async"
                className="h-[420px] w-full object-cover object-top sm:h-[480px]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent p-6 pt-16 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-200">A milestone earned</p>
                <p className="display mt-1 text-xl italic">Graduating as an Occupational Therapist</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col justify-center lg:col-span-4 lg:self-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-coral-600">Her education</p>
            <p className="display mt-3 text-2xl font-semibold italic text-navy">A qualification earned, put into practice.</p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-navy/70">PR No. 1296477 · HPCSA No. OT 0115665</p>
          </Reveal>

          <Reveal delay={0.2} className="relative lg:col-span-4">
            <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
              <FadeImage
                src="/group.jpg"
                width="1600"
                height="1067"
                alt="Group photo from a recent occupational therapy group session"
                loading="lazy"
                decoding="async"
                className="h-[280px] w-full object-cover sm:h-[340px] lg:h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/0 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 pt-12 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-200">Community in practice</p>
                <p className="display mt-1 text-xl italic">A recent group therapy session</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default memo(Milestones);

import Reveal from './Reveal.jsx';

const PRINCIPLES = [
  { num: '01', label: 'Person-centred', tone: 'coral' },
  { num: '02', label: 'Goal-focused', tone: 'teal' },
  { num: '03', label: 'Practical', tone: 'coral' },
];

const WHY_OT = [
  'Support independence and participation in everyday activities.',
  'Build practical skills following injury, illness or developmental challenges.',
  'Adapt environments and recommend assistive solutions where needed.',
  'Support children and families with development, learning and participation.',
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 bg-cream-50 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-coral-600">Meet Mpho</p>
          <h2 className="mt-3 max-w-xl text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            Therapy built around real life.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
            Mpho Lefophane is a qualified Occupational Therapist with a Bachelor of Occupational Therapy (B.Occ) from
            Sefako Makgatho Health Sciences University, registered with the Health Professions Council of South
            Africa (HPCSA). She is passionate about helping people of all ages build independence, improve their
            quality of life and take part in the activities that matter most to them.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <div key={p.num} className={`rounded-2xl p-5 ${p.tone === 'coral' ? 'bg-coral-50' : 'bg-teal-50'}`}>
                <p className={`display text-2xl font-semibold ${p.tone === 'coral' ? 'text-coral-600' : 'text-teal-700'}`}>{p.num}</p>
                <p className="mt-1 text-sm text-stone-600">{p.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="rounded-[2rem] bg-navy p-8 text-white shadow-soft sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-coral-200">Why occupational therapy?</p>
          <h3 className="display mt-4 text-3xl font-semibold italic">Helping you do the things that matter.</h3>
          <p className="mt-4 text-sm italic leading-6 text-cream-100/80">
            "Occupational therapy promotes health and wellbeing by supporting participation in meaningful occupations
            that people want, need, or are expected to do."
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-coral-200/80">
            — World Federation of Occupational Therapists, 2025
          </p>
          <div className="divider-swash mt-6" />
          <div className="mt-7 space-y-5">
            {WHY_OT.map((line) => (
              <div key={line} className="flex gap-4">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-coral-200">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="leading-7 text-cream-100/90">{line}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

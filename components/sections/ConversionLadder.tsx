'use client';

const LADDER_RUNGS = [
  {
    level: '01',
    tier: 'Free · Lead Capture',
    name: 'AI Income Scorecard',
    description:
      'Instant-access PDF revealing your personalised AI readiness score and the exact platform built for your stage. Email capture. No friction.',
    price: 'Free',
    cta: 'Download Now',
    href: '/resources/scorecard',
    highlight: false,
  },
  {
    level: '02',
    tier: 'Entry · Commitment',
    name: 'AI Income for Nurses — Live Workshop',
    description:
      'A focused 90-minute live (or evergreen) session walking through the WEALTH™ Automation Framework. Nurses leave with a 30-day implementation map.',
    price: '$47 – $97',
    cta: 'Register',
    href: '/workshop',
    highlight: false,
  },
  {
    level: '03',
    tier: 'Core · Platform Access',
    name: 'VDASR™ & NOCAiS Platform Suite',
    description:
      'Full access to AI-powered clinical documentation and LTC leadership platforms. Built by a nurse. Validated against real LTC operations. Not a template — an infrastructure.',
    price: '$197 – $497',
    cta: 'Access Platforms',
    href: '/platforms',
    highlight: true,
  },
  {
    level: '04',
    tier: 'High-Ticket · Done-With-You',
    name: 'WEALTH™ Automation Intensive',
    description:
      '90-day implementation program. You arrive with expertise; you leave with a deployed, income-producing digital ecosystem. Limited cohorts.',
    price: 'From $1,997',
    cta: 'Apply Now',
    href: '/intensive',
    highlight: false,
  },
  {
    level: '05',
    tier: 'Continuity · Inner Circle',
    name: 'Limitless Inner Circle Membership',
    description:
      'Monthly live coaching, community of nurse-entrepreneurs, platform updates, and first access to new LIMITLESS tools. Recurring revenue. Recurring results.',
    price: '$297 / month',
    cta: 'Join the Circle',
    href: '/inner-circle',
    highlight: false,
  },
];

export default function ConversionLadder() {
  return (
    <section className="w-full py-24 px-6 bg-[#1a1200]">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <p className="font-mono text-xs tracking-[0.18em] uppercase text-[#c9a84c] mb-3">
          Your Path Forward
        </p>
        <h2 className="font-serif text-4xl font-normal tracking-tight text-[#FAF8F3] mb-4 leading-snug">
          The Scalable Income Ladder
        </h2>
        <p className="text-[#c9b87a] text-lg leading-relaxed mb-14 max-w-xl">
          Five rungs. Each one meets you exactly where you are and moves you to
          where you're meant to go.{' '}
          <span className="italic text-[#c9a84c]">
            AI + Skills + Knowledge = Scalable Income™
          </span>
        </p>

        {/* Ladder */}
        <div className="relative">
          {/* Vertical rail */}
          <div className="absolute left-[28px] top-6 bottom-6 w-px bg-[#c9a84c22]" aria-hidden="true" />

          <div className="space-y-6">
            {LADDER_RUNGS.map((rung) => (
              <div key={rung.level} className="relative flex gap-6">
                {/* Level indicator */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center font-mono text-xs tracking-widest z-10 ${
                      rung.highlight
                        ? 'bg-[#c9a84c] text-[#1a1200]'
                        : 'bg-[#2a1f00] border border-[#c9a84c44] text-[#c9a84c]'
                    }`}
                  >
                    {rung.level}
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`flex-1 rounded-lg p-6 border transition-colors ${
                    rung.highlight
                      ? 'bg-[#2a1f00] border-[#c9a84c55]'
                      : 'bg-[#231800] border-[#c9a84c22]'
                  }`}
                >
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#c9a84c88] mb-1">
                    {rung.tier}
                  </p>
                  <h3 className="text-[#FAF8F3] font-serif text-xl font-normal mb-3 leading-snug">
                    {rung.name}
                  </h3>
                  <p className="text-[#a8956a] text-sm leading-relaxed mb-5">
                    {rung.description}
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <span className="font-mono text-[#c9a84c] text-sm tracking-wide">
                      {rung.price}
                    </span>
                    <a
                      href={rung.href}
                      className={`font-mono text-xs tracking-[0.15em] uppercase px-6 py-2 rounded-sm transition-colors ${
                        rung.highlight
                          ? 'bg-[#c9a84c] text-[#1a1200] hover:bg-[#b89440]'
                          : 'border border-[#c9a84c44] text-[#c9a84c] hover:border-[#c9a84c]'
                      }`}
                    >
                      {rung.cta} →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom equity line */}
        <div className="mt-16 pt-10 border-t border-[#c9a84c22] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-mono text-xs text-[#c9a84c44] tracking-widest uppercase">
            5 Platforms. 1 Ecosystem. Your Income.
          </p>
          <a
            href="/platforms"
            className="font-mono text-xs text-[#c9a84c] tracking-[0.15em] uppercase hover:text-[#FAF8F3] transition-colors"
          >
            See All Platforms →
          </a>
        </div>
      </div>
    </section>
  );
}

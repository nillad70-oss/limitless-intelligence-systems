'use client';

const LADDER_RUNGS = [
  {
    level: '01',
    tier: 'Free · Lead Capture',
    name: 'AI Income Scorecard',
    description: 'Instant-access PDF revealing your personalised AI readiness score and the exact platform built for your stage. Email capture. No friction.',
    price: 'Free',
    cta: 'Download Now',
    href: 'https://limitless-intelligence-systems.vercel.app/resources/scorecard',
  },
  {
    level: '02',
    tier: 'Entry · Commitment',
    name: 'AI Income for Women — Live Workshop',
    description: 'A focused 90-minute live (or evergreen) session walking through the WEALTH™ Automation Framework. Leave with a 30-day implementation map.',
    price: '$47 – $97',
    cta: 'Register',
    href: 'https://limitless-intelligence-systems.vercel.app/workshop',
  },
  {
    level: '03',
    tier: 'Core · Platform Access',
    name: 'VDASR™ & NOCAiS™ Platform Suite',
    description: 'Full access to AI-powered clinical documentation and LTC leadership platforms. Built by a nurse. Validated against real LTC operations. Not a template — an infrastructure.',
    price: '$197 – $497',
    cta: 'Access Platforms',
    href: 'https:
cat > components/sections/ConversionLadder.tsx << 'ENDOFFILE'
'use client';

const LADDER_RUNGS = [
  {
    level: '01',
    tier: 'Free · Lead Capture',
    name: 'AI Income Scorecard',
    description: 'Instant-access PDF revealing your personalised AI readiness score and the exact platform built for your stage. Email capture. No friction.',
    price: 'Free',
    cta: 'Download Now',
    href: 'https://limitless-intelligence-systems.vercel.app/resources/scorecard',
  },
  {
    level: '02',
    tier: 'Entry · Commitment',
    name: 'AI Income for Women — Live Workshop',
    description: 'A focused 90-minute live (or evergreen) session walking through the WEALTH™ Automation Framework. Leave with a 30-day implementation map.',
    price: '$47 – $97',
    cta: 'Register',
    href: 'https://limitless-intelligence-systems.vercel.app/workshop',
  },
  {
    level: '03',
    tier: 'Core · Platform Access',
    name: 'VDASR™ & NOCAiS™ Platform Suite',
    description: 'Full access to AI-powered clinical documentation and LTC leadership platforms. Built by a nurse. Validated against real LTC operations. Not a template — an infrastructure.',
    price: '$197 – $497',
    cta: 'Access Platforms',
    href: 'https://limitless-healthcare-ai.vercel.app/platforms',
  },
  {
    level: '04',
    tier: 'High-Ticket · Done-With-You',
    name: 'WEALTH™ Automation Intensive',
    description: '90-day implementation program. You arrive with expertise; you leave with a deployed, income-producing digital ecosystem. Limited cohorts.',
    price: 'From $1,997',
    cta: 'Apply Now',
    href: 'https://limitless-intelligence-systems.vercel.app/intensive',
  },
  {
    level: '05',
    tier: 'Continuity · Inner Circle',
    name: 'Limitless Inner Circle Membership',
    description: 'Monthly live coaching, community of women building digital income, platform updates, and first access to new LIMITLESS tools. Recurring revenue. Recurring results.',
    price: '$297 / month',
    cta: 'Join the Circle',
    href: 'https://limitless-intelligence-systems.vercel.app/inner-circle',
  },
];

export default function ConversionLadder() {
  return (
    <section className="w-full py-20 px-6 bg-[#1a1200]">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-xs tracking-[0.18em] uppercase text-[#C89B3C] mb-3">
          Your Path Forward
        </p>
        <h2 className="font-serif text-4xl font-bold tracking-tight text-[#FAF8F3] mb-4 leading-snug">
          The Scalable Income Ladder
        </h2>
        <p className="text-[#c9b87a] text-lg leading-relaxed mb-14 max-w-xl">
          Five rungs. Each one meets you exactly where you are and moves you to where you are meant to go.{' '}
          <span className="italic text-[#C89B3C]">AI + Skills + Knowledge = Scalable Income™</span>
        </p>
        <div className="relative">
          <div className="absolute left-[28px] top-6 bottom-6 w-px bg-[#C89B3C44]" aria-hidden="true" />
          <div className="space-y-5">
            {LADDER_RUNGS.map((rung) => (
              <div key={rung.level} className="relative flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center font-mono text-sm font-bold tracking-widest z-10 bg-[#C89B3C] text-[#1a1200]">
                    {rung.level}
                  </div>
                </div>
                <div className="flex-1 rounded-lg p-6 border bg-[#2a1f00] border-[#C89B3C44] hover:border-[#C89B3C88] transition-colors">
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#C89B3C99] mb-1">
                    {rung.tier}
                  </p>
                  <h3 className="text-[#FAF8F3] font-serif text-xl font-normal mb-3 leading-snug">
                    {rung.name}
                  </h3>
                  <p className="text-[#a8956a] text-sm leading-relaxed mb-5">
                    {rung.description}
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <span className="font-mono text-[#C89B3C] text-sm tracking-wide font-semibold">
                      {rung.price}
                    </span>
                    
                      href={rung.href}
                      className="bg-[#C89B3C] text-[#1a1200] font-mono text-xs font-bold tracking-[0.15em] uppercase px-6 py-2.5 rounded hover:bg-[#E8C26A] transition-colors"
                    >
                      {rung.cta} →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-[#C89B3C22] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-mono text-xs text-[#C89B3C55] tracking-widest uppercase">
            5 Platforms. 1 Ecosystem. Your Income.
          </p>
          <a href="https://limitless-healthcare-ai.vercel.app/platforms" className="font-mono text-xs text-[#C89B3C] tracking-[0.15em] uppercase hover:text-[#FAF8F3] transition-colors">
            See All Platforms →
          </a>
        </div>
      </div>
    </section>
  );
}

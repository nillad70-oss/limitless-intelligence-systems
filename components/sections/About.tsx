import Image from 'next/image'

const pillars = [
  { icon: '🏥', label: 'Clinical AI',    sub: 'Home health & LTC documentation' },
  { icon: '⚡', label: 'Automation',     sub: 'Workflows that work while you sleep' },
  { icon: '📚', label: 'Education',      sub: 'AI for non-tech professionals' },
  { icon: '✝️', label: 'Faith-Aligned', sub: 'Purpose over profit, always' },
]

export default function About() {
  return (
    <section className="fade-up" id="about" style={{ padding: '64px 5%', background: '#fff' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '56px',
          alignItems: 'center',
        }}
      >
        {/* Photo */}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              borderRadius: '18px',
              overflow: 'hidden',
              aspectRatio: '3/4',
              position: 'relative',
              background: '#e8dfd0',
            }}
          >
            <Image
              src="/images/founder-about.jpg"
              alt="Leonilla Addeh — CEO and founder of Limitless Intelligence Systems"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>

          {/* Credential tag */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              right: '-14px',
              background: '#fff',
              border: '1px solid var(--border)',
              borderRadius: '9px',
              padding: '8px 14px',
              fontSize: '12px',
              fontWeight: 700,
              color: 'var(--text-dark)',
            }}
          >
            RN, MSN-Ed <span style={{ color: 'var(--gold)' }}>· AI Architect</span>
          </div>

          {/* Experience badge */}
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '-14px',
              background: 'var(--gold)',
              color: '#fff',
              borderRadius: '10px',
              padding: '12px 16px',
              textAlign: 'center',
            }}
          >
            <div style={{ fontFamily: 'Georgia,serif', fontSize: '26px', fontWeight: 700, lineHeight: 1 }}>27</div>
            <div style={{ fontSize: '10px', fontWeight: 500, opacity: 0.9, marginTop: '2px' }}>Years Nursing</div>
          </div>
        </div>

        {/* Copy */}
        <div>
          <p className="section-label">Meet the Founder</p>
          <h2 className="section-title">
            Leonilla Addeh —<br />
            <em>Where Nursing Meets AI</em>
          </h2>

          <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
            I spent <strong style={{ color: 'var(--text-dark)', fontWeight: 600 }}>27 years as a nurse</strong> — in long-term care, home health, auditing, and leadership. I watched brilliant, hardworking people get buried in paperwork, burned out, and left behind by technology.
          </p>
          <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
            So I built the tools I wished existed.{' '}
            <strong style={{ color: 'var(--text-dark)', fontWeight: 600 }}>AI platforms that speak the language of healthcare.</strong>{' '}
            Education that makes AI understandable for people who&apos;ve never coded a day in their life.
          </p>
          <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '24px' }}>
            This is{' '}
            <strong style={{ color: 'var(--text-dark)', fontWeight: 600 }}>faith-aligned, purpose-driven, and built for real people.</strong>{' '}
            Not venture-backed tech bros. You.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {pillars.map((p) => (
              <div
                key={p.label}
                style={{
                  padding: '12px 14px',
                  borderRadius: '9px',
                  border: '1px solid var(--border)',
                  background: 'var(--cream)',
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-dark)' }}>{p.icon} {p.label}</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>{p.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

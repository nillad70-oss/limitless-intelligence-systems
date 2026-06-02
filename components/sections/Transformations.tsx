const cards = [
  {
    icon: '🏥',
    iconBg: 'var(--teal-bg)',
    title: 'Healthcare Workers',
    body: 'AI handles clinical documentation, OASIS forms, and care plans — so you focus on patients, not paperwork.',
    before: '3 hours charting daily',
    after: '30 min with AI',
  },
  {
    icon: '👩‍👧',
    iconBg: '#FEF3C7',
    title: 'Busy Moms',
    body: 'Meal planning, homework support, scheduling — AI handles the mental load you carry alone.',
    before: 'Overwhelmed, exhausted',
    after: 'More time, more peace',
  },
  {
    icon: '💼',
    iconBg: 'var(--blue-bg)',
    title: 'Entrepreneurs',
    body: 'AI writes your content, builds funnels, and automates workflows — scale without burning out.',
    before: 'Working 60-hr weeks',
    after: 'Automated income',
  },
  {
    icon: '🔍',
    iconBg: 'var(--purple-bg)',
    title: 'Job Seekers',
    body: 'AI-crafted resumes, cover letters, and interview prep — walk in prepared and positioned to win.',
    before: 'Getting ignored',
    after: 'Landing interviews',
  },
  {
    icon: '⚡',
    iconBg: 'var(--coral-bg)',
    title: 'Small Business',
    body: 'Automate emails, proposals, scheduling — AI becomes your most reliable team member.',
    before: 'Buried in admin',
    after: 'Running like a CEO',
  },
  {
    icon: '✍️',
    iconBg: 'var(--gold-light)',
    title: 'Content Creators',
    body: 'From blank page to published content in minutes. AI that sounds authentically you.',
    before: "Creator's block weekly",
    after: 'Consistent income',
  },
]

export default function Transformations() {
  return (
    <section className="fade-up" id="solutions" style={{ padding: '64px 5%', background: '#fff' }}>
      <p className="section-label">Real Life AI Transformations</p>
      <h2 className="section-title">
        Finally… AI that makes
        <br />
        <em>sense for your life</em>
      </h2>
      <p className="section-sub">
        No jargon. No overwhelm. Just real AI tools built for the people doing the real work.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '18px',
        }}
      >
        {cards.map((c) => (
          <div key={c.title} className="card-base">
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: c.iconBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                marginBottom: '14px',
              }}
            >
              {c.icon}
            </div>
            <h3 style={{ fontFamily: 'Georgia,serif', fontSize: '17px', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '6px' }}>
              {c.title}
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: 1.6 }}>{c.body}</p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginTop: '14px',
                paddingTop: '12px',
                borderTop: '1px solid var(--border)',
              }}
            >
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', textDecoration: 'line-through' }}>{c.before}</span>
              <span style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '13px' }}>→</span>
              <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--teal)' }}>{c.after}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

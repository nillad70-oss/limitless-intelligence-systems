const steps = [
  { icon: '🎯', iconBg: 'var(--gold-light)', num: 'Step 01', title: 'Identify Your Gaps', body: 'We pinpoint exactly where AI can save you time or generate income in your specific life.' },
  { icon: '🔧', iconBg: 'var(--teal-bg)',   num: 'Step 02', title: 'Build Your System',  body: 'Simple AI tools set up for your exact needs — no complex tech required.' },
  { icon: '📚', iconBg: 'var(--blue-bg)',   num: 'Step 03', title: 'Learn & Implement',  body: "Step-by-step guidance so you're confident using AI daily — not just knowing about it." },
  { icon: '📈', iconBg: 'var(--purple-bg)', num: 'Step 04', title: 'Scale & Grow',        body: 'As AI handles more, you reclaim time and unlock new income possibilities.' },
]

export default function HowItWorks() {
  return (
    <section className="fade-up" style={{ padding: '64px 5%', background: 'var(--cream)' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <p className="section-label">The Process</p>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 0 }}>
          How AI integration works in the real world
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          background: '#fff',
          border: '1.5px solid var(--border)',
          borderRadius: '14px',
          overflow: 'hidden',
        }}
      >
        {steps.map((s, i) => (
          <div
            key={s.num}
            style={{
              padding: '26px 22px',
              textAlign: 'center',
              borderRight: i < steps.length - 1 ? '1px solid var(--border)' : 'none',
            }}
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                background: s.iconBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                margin: '0 auto 14px',
              }}
            >
              {s.icon}
            </div>
            <p style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>
              {s.num}
            </p>
            <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '5px' }}>{s.title}</p>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.55 }}>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

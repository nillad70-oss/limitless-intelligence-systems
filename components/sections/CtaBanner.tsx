export default function CtaBanner() {
  return (
    <section
      style={{
        background: 'var(--gold-light)',
        borderTop: '1px solid #E2B84A',
        borderBottom: '1px solid #E2B84A',
        padding: '48px 5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
        flexWrap: 'wrap',
      }}
    >
      <div>
        <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '4px' }}>
          The future belongs to the AI-ready.
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--text-mid)' }}>
          Don&apos;t get left behind. Start your AI journey today — it&apos;s simpler than you think.
        </p>
      </div>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button className="btn-gold" style={{ fontSize: '14px', padding: '13px 28px' }}>
          Start Learning AI Free
        </button>
        <button className="btn-ghost" style={{ fontSize: '14px', padding: '13px 28px' }}>
          Book a Consult
        </button>
      </div>
    </section>
  )
}

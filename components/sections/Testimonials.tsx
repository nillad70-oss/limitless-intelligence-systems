// ─────────────────────────────────────────────────────────────
// SWAP THESE with real community quotes when you collect them.
// Format: { quote, name, role, avatarInitials, avatarBg }
// ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    quote:
      '"I spent 3 hours charting every day. With VDASR, I\'m done in 30 minutes. This is the tool every home health nurse has been waiting for."',
    name: 'Home Health RN',
    role: '15 years in field nursing',
    initials: 'RN',
    avatarBg: '#0F6E56',
  },
  {
    quote:
      '"Leonilla makes AI feel human. I had zero tech background and now I\'m using AI every single day in my business. She genuinely changed everything."',
    name: 'Health Coach & Entrepreneur',
    role: 'Built first digital product with AI',
    initials: 'HC',
    avatarBg: '#B8892A',
  },
  {
    quote:
      '"As a busy mom and nurse, I never thought AI was for me. Now I use it for everything — meal planning, documentation, content. I finally feel ahead."',
    name: 'LTC Nurse Manager & Mom',
    role: 'AI student & community member',
    initials: 'TM',
    avatarBg: '#534AB7',
  },
]

export default function Testimonials() {
  return (
    <section className="fade-up" style={{ padding: '64px 5%', background: 'var(--cream)' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <p className="section-label">Social Proof</p>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 0 }}>
          Real people. Real results.
          <br />
          <em>Real transformation.</em>
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '18px',
        }}
      >
        {testimonials.map((t) => (
          <div
            key={t.name}
            style={{
              background: '#fff',
              border: '1.5px solid var(--border)',
              borderRadius: '14px',
              padding: '24px',
            }}
          >
            <div style={{ color: 'var(--gold)', fontSize: '14px', marginBottom: '12px', letterSpacing: '2px' }}>
              ★★★★★
            </div>
            <p
              style={{
                fontSize: '14px',
                fontStyle: 'italic',
                color: 'var(--text-mid)',
                lineHeight: 1.7,
                marginBottom: '18px',
                fontFamily: 'Georgia, serif',
              }}
            >
              {t.quote}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: t.avatarBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#fff',
                  flexShrink: 0,
                }}
              >
                {t.initials}
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-dark)' }}>{t.name}</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

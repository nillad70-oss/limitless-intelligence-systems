const platforms = [
  {
    badge: 'Healthcare · Platform 01',
    badgeBg: 'var(--teal-bg)',
    badgeColor: 'var(--teal)',
    name: 'Limitless Healthcare AI™',
    desc: 'AI innovation and workforce solutions built for healthcare organizations. Smarter operations. Better patient outcomes.',
    features: ['LTC & home health AI', 'Workforce transformation', 'Clinical operations systems'],
    checkBg: 'var(--teal-bg)',
    checkColor: 'var(--teal)',
    url: 'https://limitlesshealthcareai.com',
  },
  {
    badge: 'Documentation · Platform 02',
    badgeBg: 'var(--blue-bg)',
    badgeColor: 'var(--blue)',
    name: 'VDASR.ai™',
    desc: 'AI-powered documentation redefining home healthcare. Real-time OASIS-E1, clinical notes, wound care, 9 smart panels.',
    features: ['OASIS-E1 integrated', '9-panel clinical sidebar', 'Built by a nurse, for nurses'],
    checkBg: 'var(--blue-bg)',
    checkColor: 'var(--blue)',
    url: 'https://vdasr-ai.web.app',
  },
  {
    badge: 'Productivity · Platform 03',
    badgeBg: 'var(--purple-bg)',
    badgeColor: 'var(--purple)',
    name: 'NillaFlow Studio™',
    desc: 'AI productivity tools for creators, coaches, and professionals building digital presence and automated income.',
    features: ['AI content creation', 'Digital product systems', 'Funnel & automation builder'],
    checkBg: 'var(--purple-bg)',
    checkColor: 'var(--purple)',
    url: 'https://creatorflowstudio.app',
  },
]

export default function Platforms() {
  return (
    <section className="fade-up" id="platforms" style={{ padding: '64px 5%', background: '#fff' }}>
      <p className="section-label">The Ecosystem</p>
      <h2 className="section-title">
        Three Platforms.
        <br />
        <em>One Mission.</em>
      </h2>
      <p className="section-sub">
        Purpose-built AI platforms solving real problems in healthcare, productivity, and digital income.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '18px',
        }}
      >
        {platforms.map((p) => (
          <div
            key={p.name}
            style={{
              borderRadius: '14px',
              overflow: 'hidden',
              border: '1.5px solid var(--border)',
              background: '#fff',
              transition: 'all 0.2s',
              cursor: 'pointer',
            }}
            onMouseOver={(e) => {
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
              ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'
            }}
            onMouseOut={(e) => {
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
            }}
          >
            <div style={{ padding: '24px 22px 18px', borderBottom: '1px solid var(--border)' }}>
              <div
                style={{
                  display: 'inline-block',
                  fontSize: '10px',
                  fontWeight: 700,
                  padding: '3px 10px',
                  borderRadius: '10px',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  background: p.badgeBg,
                  color: p.badgeColor,
                }}
              >
                {p.badge}
              </div>
              <div style={{ fontFamily: 'Georgia,serif', fontSize: '20px', fontWeight: 700, color: 'var(--text-dark)' }}>
                {p.name}
              </div>
            </div>
            <div style={{ padding: '18px 22px' }}>
              <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: 1.6, marginBottom: '14px' }}>
                {p.desc}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {p.features.map((f) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '12px', color: 'var(--text-dark)' }}>
                    <div
                      style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '9px',
                        flexShrink: 0,
                        background: p.checkBg,
                        color: p.checkColor,
                      }}
                    >
                      ✓
                    </div>
                    {f}
                  </div>
                ))}
              </div>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginTop: '18px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--gold)',
                  textDecoration: 'none',
                  transition: 'gap 0.2s',
                }}
              >
                Visit Platform →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

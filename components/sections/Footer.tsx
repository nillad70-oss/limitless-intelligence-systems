const footerLinks = {
  Platforms: [
    { label: 'Limitless Healthcare AI', href: 'https://limitlesshealthcareai.com' },
    { label: 'VDASR.ai™', href: 'https://vdasr-ai.web.app' },
    { label: 'NillaFlow Studio™', href: 'https://creatorflowstudio.app' },
    { label: 'NOCAiS™', href: '#' },
  ],
  Company: [
    { label: 'About Leonilla', href: '#about' },
    { label: 'Speaking', href: '#' },
    { label: 'Consulting', href: '#' },
    { label: 'Press', href: '#' },
  ],
  Connect: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'YouTube', href: '#' },
    { label: 'Community', href: '#community' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ background: '#1A1410', padding: '48px 5% 24px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '32px',
          paddingBottom: '36px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ fontFamily: 'Georgia,serif', fontSize: '16px', fontWeight: 700, color: '#FDF9F3', marginBottom: '4px' }}>
            Limitless Intelligence Systems™
          </div>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic', fontFamily: 'Georgia,serif' }}>
            Empowering Human Potential Through Practical AI
          </div>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, marginTop: '10px', maxWidth: '240px' }}>
            Founded by Leonilla Addeh, RN MSN-Ed — bridging 27 years of clinical expertise with AI innovation. Built for nurses, moms, entrepreneurs, and everyday people ready to thrive in the AI era.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([col, links]) => (
          <div key={col}>
            <h5 style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gold-mid)', marginBottom: '12px' }}>
              {col}
            </h5>
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{ display: 'block', fontSize: '12px', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', marginBottom: '7px' }}
                onMouseOver={(e) => ((e.target as HTMLElement).style.color = '#FDF9F3')}
                onMouseOut={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.45)')}
              >
                {l.label}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '20px',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)' }}>
          © 2026 Limitless Intelligence Systems™. All rights reserved.
        </div>
        <div style={{ fontSize: '11px', color: 'rgba(184,137,42,0.5)' }}>
          AI Simplified. Life Transformed.
        </div>
      </div>
    </footer>
  )
}

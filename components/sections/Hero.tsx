import Image from 'next/image'

export default function Hero() {
  return (
    <section
      style={{ background: '#fff', padding: '0 5%', paddingTop: '60px' }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          paddingTop: '48px',
          paddingBottom: '56px',
        }}
      >
        {/* Left: Copy */}
        <div>
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--gold-light)',
              border: '1px solid var(--gold-mid)',
              borderRadius: '20px',
              padding: '5px 14px',
              fontSize: '11px',
              fontWeight: 700,
              color: 'var(--gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '20px',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                background: 'var(--gold)',
                borderRadius: '50%',
                display: 'inline-block',
              }}
            />
            The Practical AI Movement
          </div>

          <h1
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(30px, 4.5vw, 48px)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: 'var(--text-dark)',
              marginBottom: '16px',
            }}
          >
            AI That Works
            <br />
            for <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Real Life.</em>
          </h1>

          <p
            style={{
              fontSize: '17px',
              color: 'var(--text-mid)',
              lineHeight: 1.7,
              marginBottom: '28px',
              maxWidth: '480px',
            }}
          >
            Empowering nurses, moms, entrepreneurs, and everyday people to use AI to save time, reduce burnout, and build new income — starting today.
          </p>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '28px' }}>
            <button className="btn-gold" style={{ fontSize: '14px', padding: '13px 28px' }}>
              Explore AI Solutions
            </button>
            <button className="btn-ghost" style={{ fontSize: '14px', padding: '13px 28px' }}>
              Join the Community
            </button>
          </div>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {[
              'No tech background needed',
              'Built by a nurse, for real life',
              'Faith-aligned & purpose-driven',
            ].map((item) => (
              <div
                key={item}
                style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: 'var(--text-muted)' }}
              >
                <span style={{ color: 'var(--teal)', fontWeight: 700 }}>✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Photo */}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              aspectRatio: '3/4',
              position: 'relative',
              background: '#e8dfd0',
            }}
          >
            <Image
              src="/images/founder-hero.jpg"
              alt="Leonilla Addeh, Founder of Limitless Intelligence Systems, working at laptop"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority
            />
          </div>

          {/* Stat cards */}
          <div
            style={{
              position: 'absolute',
              bottom: '60px',
              left: '-20px',
              background: '#fff',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '10px 14px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.09)',
              minWidth: '150px',
            }}
          >
            <div style={{ fontFamily: 'Georgia,serif', fontSize: '26px', fontWeight: 700, color: 'var(--gold)', lineHeight: 1 }}>12+</div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>Hours saved weekly</div>
          </div>

          <div
            style={{
              position: 'absolute',
              top: '30px',
              right: '-16px',
              background: '#fff',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '10px 14px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.09)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 600, color: 'var(--teal)' }}>
              <span style={{ width: '8px', height: '8px', background: '#22C55E', borderRadius: '50%', display: 'inline-block' }} />
              VDASR.ai™ is Live
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>AI home health platform</div>
          </div>

          {/* Name tag */}
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(26,20,16,0.82)',
              color: '#fff',
              borderRadius: '10px',
              padding: '8px 20px',
              textAlign: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            <div style={{ fontFamily: 'Georgia,serif', fontSize: '15px', fontWeight: 700 }}>Leonilla Addeh</div>
            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.65)', marginTop: '2px' }}>Founder & CEO · RN, MSN-Ed</div>
          </div>
        </div>
      </div>
    </section>
  )
}

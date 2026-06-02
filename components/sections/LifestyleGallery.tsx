import Image from 'next/image'

export default function LifestyleGallery() {
  return (
    <section className="fade-up" style={{ padding: '64px 5%', background: 'var(--cream)' }}>
      <p className="section-label">The Lifestyle</p>
      <h2 className="section-title">
        Your future should feel
        <br />
        <em>expensive, not exhausting</em>
      </h2>
      <p className="section-sub">
        AI isn&apos;t just a work tool. It&apos;s your path to financial freedom, location freedom, and a life built on your terms.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: 'auto auto',
          gap: '16px',
        }}
      >
        {/* Left tall card */}
        <div
          style={{
            gridRow: 'span 2',
            borderRadius: '16px',
            overflow: 'hidden',
            position: 'relative',
            minHeight: '480px',
          }}
        >
          <Image
            src="/images/lifestyle-garden1.jpg"
            alt="Leonilla relaxing — living life on her terms"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(transparent, rgba(26,20,16,0.75))',
              padding: '20px',
              color: '#fff',
            }}
          >
            <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>Life by Design</div>
            <div style={{ fontFamily: 'Georgia,serif', fontSize: '16px', fontWeight: 700 }}>Freedom is the goal</div>
          </div>
        </div>

        {/* Top right */}
        <div style={{ borderRadius: '16px', overflow: 'hidden', position: 'relative', minHeight: '220px' }}>
          <Image
            src="/images/lifestyle-freedom.jpg"
            alt="Digital freedom through AI — financial and location independence"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(transparent, rgba(26,20,16,0.75))',
              padding: '16px',
              color: '#fff',
            }}
          >
            <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>Location Freedom</div>
            <div style={{ fontFamily: 'Georgia,serif', fontSize: '14px', fontWeight: 700 }}>Build it online. Live it anywhere.</div>
          </div>
        </div>

        {/* Bottom right */}
        <div style={{ borderRadius: '16px', overflow: 'hidden', position: 'relative', minHeight: '220px' }}>
          <Image
            src="/images/lifestyle-garden2.jpg"
            alt="Leonilla thriving — a new way of living"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(transparent, rgba(26,20,16,0.75))',
              padding: '16px',
              color: '#fff',
            }}
          >
            <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>AI Economy</div>
            <div style={{ fontFamily: 'Georgia,serif', fontSize: '14px', fontWeight: 700 }}>More than a vacation — a new way of living</div>
          </div>
        </div>
      </div>
    </section>
  )
}

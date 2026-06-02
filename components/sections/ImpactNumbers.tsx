const stats = [
  { num: '27+', desc: 'Years clinical nursing expertise' },
  { num: '3',   desc: 'AI platforms built & deployed' },
  { num: '12 hrs', desc: 'Saved weekly with VDASR™' },
  { num: '100%', desc: 'Practical, real-life AI focus' },
]

export default function ImpactNumbers() {
  return (
    <section className="fade-up" style={{ padding: '64px 5%', background: 'var(--cream)' }}>
      <div style={{ textAlign: 'center' }}>
        <p className="section-label">Proven Impact</p>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 0 }}>
          The results speak for themselves
        </h2>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '16px',
          marginTop: '40px',
        }}
      >
        {stats.map((s) => (
          <div
            key={s.num}
            style={{
              textAlign: 'center',
              padding: '24px 12px',
              background: '#fff',
              borderRadius: '14px',
              border: '1px solid var(--border)',
            }}
          >
            <div style={{ fontFamily: 'Georgia,serif', fontSize: '38px', fontWeight: 700, color: 'var(--gold)', lineHeight: 1 }}>
              {s.num}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '5px', fontWeight: 500 }}>
              {s.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

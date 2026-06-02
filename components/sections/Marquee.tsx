const items = [
  'AI for Nurses', 'AI for Moms', 'AI for Healthcare',
  'AI for Entrepreneurs', 'AI for Productivity',
  'AI for Digital Income', 'AI for Real Life',
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div style={{ background: 'var(--gold)', padding: '12px 0', overflow: 'hidden' }}>
      <div className="marquee-track" style={{ display: 'flex', whiteSpace: 'nowrap' }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontSize: '12px',
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '0 28px',
              opacity: 0.9,
            }}
          >
            {item}
            <span style={{ color: 'rgba(255,255,255,0.5)', padding: '0 8px' }}>•</span>
          </span>
        ))}
      </div>
    </div>
  )
}

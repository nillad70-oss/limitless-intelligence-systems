'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.97)' : '#fff',
        borderBottom: '1px solid var(--border)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        height: '60px',
        padding: '0 5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Brand */}
      <div style={{ fontFamily: 'Georgia, serif', fontSize: '14px', fontWeight: 700, color: 'var(--text-dark)' }}>
        Limitless<span style={{ color: 'var(--gold)' }}> Intelligence Systems™</span>
      </div>

      {/* Links — hidden on mobile */}
      <div className="hidden md:flex gap-6">
        {['Solutions', 'About', 'Platforms', 'Community'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500 }}
            onMouseOver={(e) => ((e.target as HTMLElement).style.color = 'var(--gold)')}
            onMouseOut={(e) => ((e.target as HTMLElement).style.color = 'var(--text-muted)')}
          >
            {link}
          </a>
        ))}
      </div>

      {/* CTA */}
      <button className="btn-gold" style={{ fontSize: '12px', padding: '8px 18px' }}>
        Get Started Free
      </button>
    </nav>
  )
}

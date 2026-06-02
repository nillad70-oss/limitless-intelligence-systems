'use client'
import { useState } from 'react'

// ─────────────────────────────────────────────────────────────────────
// STEP 1: Replace CONVERTKIT_FORM_ID with your actual ConvertKit form ID
// STEP 2: Replace CONVERTKIT_API_KEY in /lib/convertkit.ts
// Or wire to any email service — see /lib/convertkit.ts
// ─────────────────────────────────────────────────────────────────────
const FORM_ENDPOINT = '/api/subscribe'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
        setMessage("You're in! Check your inbox for your first AI tip.")
        setEmail('')
      } else {
        throw new Error('Subscription failed')
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <section
      id="community"
      style={{
        background: 'linear-gradient(135deg, #1A1410 0%, #2D1F0A 100%)',
        padding: '64px 5%',
        textAlign: 'center',
      }}
    >
      <p style={{ fontSize: '11px', fontWeight: 700, color: 'var(--gold-mid)', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '8px' }}>
        Weekly AI Intelligence
      </p>
      <h2
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(24px, 3.5vw, 36px)',
          fontWeight: 700,
          color: '#FDF9F3',
          marginBottom: '12px',
          lineHeight: 1.15,
        }}
      >
        Get Practical AI Tips
        <br />
        Delivered Every Week
      </h2>
      <p style={{ fontSize: '15px', color: '#A09070', maxWidth: '480px', margin: '0 auto 28px', lineHeight: 1.7 }}>
        Simple AI strategies that help you save time, work smarter, and grow — no tech background required. Written by a nurse, for real people.
      </p>

      {status === 'success' ? (
        <div
          style={{
            maxWidth: '440px',
            margin: '0 auto',
            background: 'rgba(15,110,86,0.2)',
            border: '1px solid rgba(15,110,86,0.5)',
            borderRadius: '8px',
            padding: '16px',
            color: '#9FE1CB',
            fontSize: '15px',
          }}
        >
          ✓ {message}
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ maxWidth: '440px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              border: '1.5px solid rgba(184,137,42,0.4)',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              style={{
                flex: 1,
                padding: '13px 16px',
                background: 'rgba(255,255,255,0.06)',
                border: 'none',
                outline: 'none',
                color: '#FDF9F3',
                fontSize: '14px',
                fontFamily: 'inherit',
              }}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                background: 'var(--gold)',
                color: '#fff',
                border: 'none',
                padding: '13px 22px',
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                cursor: status === 'loading' ? 'wait' : 'pointer',
                whiteSpace: 'nowrap',
                opacity: status === 'loading' ? 0.7 : 1,
              }}
            >
              {status === 'loading' ? 'Subscribing…' : 'Subscribe Free'}
            </button>
          </div>

          {status === 'error' && (
            <p style={{ color: '#F09595', fontSize: '12px', marginTop: '8px' }}>{message}</p>
          )}

          <p style={{ fontSize: '11px', color: 'rgba(160,144,112,0.6)', marginTop: '10px' }}>
            No spam. No fluff. Unsubscribe anytime.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '20px', flexWrap: 'wrap' }}>
            {['Weekly AI tips', 'Tool recommendations', 'Real-life case studies', 'Income strategies'].map((f) => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: 'rgba(255,255,255,0.55)' }}>
                <span style={{ color: 'var(--gold-mid)', fontWeight: 700 }}>✓</span> {f}
              </div>
            ))}
          </div>
        </form>
      )}
    </section>
  )
}

import { NextResponse } from 'next/server'

// ─────────────────────────────────────────────────────────────────────────
// ConvertKit integration
// 1. Go to app.convertkit.com → Forms → Your form → Settings → ID
// 2. Go to app.convertkit.com → Account → API Keys → API Key (NOT secret)
// 3. Add to .env.local:
//      CONVERTKIT_FORM_ID=your_form_id
//      CONVERTKIT_API_KEY=your_api_key
//
// Alternative: swap the fetch below for Mailchimp, ActiveCampaign, etc.
// ─────────────────────────────────────────────────────────────────────────

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const FORM_ID = process.env.CONVERTKIT_FORM_ID
    const API_KEY = process.env.CONVERTKIT_API_KEY

    if (!FORM_ID || !API_KEY) {
      // During development without env vars — log and return success
      console.log(`[DEV] Email subscription: ${email}`)
      return NextResponse.json({ success: true })
    }

    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ api_key: API_KEY, email }),
      }
    )

    if (!response.ok) {
      const data = await response.json()
      console.error('ConvertKit error:', data)
      return NextResponse.json({ error: 'Subscription failed' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

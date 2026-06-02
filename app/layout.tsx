import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Limitless Intelligence Systems™ — Practical AI for Real Life',
  description:
    'Empowering nurses, moms, entrepreneurs, and everyday people to use AI to save time, reduce burnout, and build new income. Founded by Leonilla Addeh, RN MSN-Ed.',
  keywords: [
    'AI for nurses',
    'practical AI',
    'AI for healthcare',
    'AI education',
    'digital income',
    'Leonilla Addeh',
    'Limitless Intelligence Systems',
  ],
  openGraph: {
    title: 'Limitless Intelligence Systems™',
    description: 'Practical AI for Real Life. Built by a nurse, for real people.',
    url: 'https://limitlessintelligencesystems.com',
    siteName: 'Limitless Intelligence Systems™',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Limitless Intelligence Systems™',
    description: 'Practical AI for Real Life.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

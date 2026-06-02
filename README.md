# Limitless Intelligence Systems™
### Practical AI for Real Life — limitlessintelligencesystems.com

Built with **Next.js 14 · TypeScript · Tailwind CSS**  
Deployed via **GitHub → Vercel**

---

## Project Structure

```
lis/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Main page (assembles all sections)
│   └── api/
│       └── subscribe/
│           └── route.ts    # Email subscription endpoint (ConvertKit-ready)
├── components/
│   ├── sections/           # Each page section as its own component
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Marquee.tsx
│   │   ├── ImpactNumbers.tsx
│   │   ├── Transformations.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── About.tsx
│   │   ├── LifestyleGallery.tsx
│   │   ├── Platforms.tsx
│   │   ├── Testimonials.tsx
│   │   ├── EmailCapture.tsx
│   │   ├── CtaBanner.tsx
│   │   └── Footer.tsx
│   └── ui/
│       └── ScrollAnimator.tsx
├── public/
│   └── images/             # All founder + lifestyle photos
├── styles/
│   └── globals.css         # Brand CSS variables + Tailwind base
├── .env.example            # Copy to .env.local and fill in keys
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

---

## Step 1 — Local Development

```bash
# Install dependencies
npm install

# Copy env template
cp .env.example .env.local
# Edit .env.local with your ConvertKit keys

# Run dev server
npm run dev
# → Opens at http://localhost:3000
```

---

## Step 2 — Add Real Photos

Replace any image in `/public/images/` with your own files.  
Keep the same filenames OR update the `src` props in the components:

| File | Used in |
|---|---|
| `founder-hero.jpg` | Hero section |
| `founder-about.jpg` | About section |
| `lifestyle-freedom.jpg` | Lifestyle gallery (top right) |
| `lifestyle-expensive.jpg` | Lifestyle gallery (optional) |
| `lifestyle-garden1.jpg` | Lifestyle gallery (left tall) |
| `lifestyle-garden2.jpg` | Lifestyle gallery (bottom right) |

**Pro tip:** For your studio headshot, drop it in as `founder-hero.jpg` and the hero section updates automatically.

---

## Step 3 — Add Real Testimonials

Open `components/sections/Testimonials.tsx`.  
Find the `testimonials` array at the top and replace with real community quotes:

```ts
const testimonials = [
  {
    quote: '"Your real quote here…"',
    name: 'First Name, Credential',
    role: 'Their role or context',
    initials: 'AB',
    avatarBg: '#0F6E56',   // teal, gold, or purple
  },
  // add more...
]
```

---

## Step 4 — Wire ConvertKit Email

1. Go to [app.convertkit.com](https://app.convertkit.com) → Forms → Create a form
2. Copy your **Form ID** (in the URL or form settings)
3. Go to Account → API Keys → copy your **API Key** (not secret key)
4. Add to `.env.local`:
   ```
   CONVERTKIT_FORM_ID=123456
   CONVERTKIT_API_KEY=your_key_here
   ```
5. The subscribe form in `EmailCapture.tsx` automatically calls `/api/subscribe`

---

## Step 5 — Deploy to Vercel

```bash
# Push to GitHub first
git init
git add .
git commit -m "initial: Limitless Intelligence Systems launch"
git remote add origin https://github.com/YOUR_USERNAME/limitless-intelligence-systems.git
git push -u origin main
```

Then:
1. Go to [vercel.com](https://vercel.com) → New Project
2. Import your GitHub repo
3. Framework: **Next.js** (auto-detected)
4. Add environment variables from `.env.local`
5. Click **Deploy**

**Custom domain:**  
Vercel Dashboard → Project → Settings → Domains → Add `limitlessintelligencesystems.com`

---

## Customization Quick-Reference

| What to change | Where |
|---|---|
| Brand colors | `styles/globals.css` → `:root` variables |
| Hero headline | `components/sections/Hero.tsx` |
| Platform URLs | `components/sections/Platforms.tsx` → `url` field |
| Footer links | `components/sections/Footer.tsx` → `footerLinks` |
| SEO metadata | `app/layout.tsx` → `metadata` export |
| Social media links | `components/sections/Footer.tsx` |

---

## Tech Stack

- **Next.js 14** — App Router, Server Components, API Routes
- **TypeScript** — full type safety
- **Tailwind CSS** — utility-first styling
- **Vercel** — zero-config deployment, edge network
- **ConvertKit** — email list integration

---

*Built by WEALTH™ — The Automation Architect*  
*Limitless Intelligence Systems™ © 2026*

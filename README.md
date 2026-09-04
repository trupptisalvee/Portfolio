# Trupti Salve — Developer Portfolio

A personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and Three.js.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **3D Effects:** Three.js + React Three Fiber
- **Smooth Scroll:** Lenis
- **Icons:** Lucide React
- **Contact Form:** Resend API

## Getting Started

```bash
# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local

# Add your Resend API key to .env.local
# Get one at: https://resend.com/api-keys

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Before You Deploy

Complete this checklist before going live:

### 1. Profile Photo
- [ ] Replace `/public/images/profile.jpg` with a square headshot (min 500×500px)
- [ ] Update the `<Image>` component in `components/sections/Hero.tsx` (look for TODO comment)
- [ ] Update the `<Image>` component in `components/sections/About.tsx` (look for TODO comment)

### 2. Resume PDF
- [ ] Place your resume at `/public/resume.pdf`
- [ ] The "Download Resume" button in the Navbar will link to it automatically

### 3. Certificate Images
Place certificate images in `/public/images/certificates/`:
- [ ] `cert1.jpg` — IBM Machine Learning Professional Certificate
- [ ] `cert2.jpg` — Software Engineering Specialization (HKUST)
- [ ] `cert3.jpg` — Meta Full Stack Developer
- [ ] `cert4.jpg` — Advanced Golang Concepts (Edureka)
- [ ] `cert5.jpg` — Foundations of Cybersecurity (Google)

Certificate image paths are set in `components/sections/Certifications.tsx`. Update paths if you use different filenames.

### 4. Resend API Key
- [ ] Create a free account at [resend.com](https://resend.com)
- [ ] Generate an API key
- [ ] Add it to `.env.local` as `RESEND_API_KEY=re_your_key_here`

### 5. Contact Form
- The form sends emails to `trupptias90@gmail.com`
- On Resend free tier, emails come from `onboarding@resend.dev`
- For production, verify your domain in Resend and update the `from` field in `app/api/contact/route.ts`

## Project Structure

```
├── app/
│   ├── api/contact/route.ts    # Contact form API (Resend)
│   ├── globals.css             # Global styles + Tailwind
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Main page with all sections
├── components/
│   ├── Navbar.tsx              # Navigation bar
│   ├── BackToTop.tsx           # Scroll-to-top button
│   └── sections/
│       ├── Hero.tsx            # Hero with Three.js background
│       ├── About.tsx           # About + skills grid
│       ├── Experience.tsx      # Work experience timeline
│       ├── Projects.tsx        # Project cards
│       ├── Certifications.tsx  # Certifications gallery
│       ├── Achievements.tsx    # Education + achievements
│       └── Footer.tsx          # Contact form + footer
├── public/
│   ├── images/
│   │   ├── profile.jpg         # Profile photo (placeholder)
│   │   └── certificates/       # Certificate images
│   └── resume.pdf              # Resume file
├── .env.local.example          # Environment variable template
└── package.json
```

## Sections

1. **Hero** — Animated Three.js particle background, profile photo, tagline, social links
2. **About** — Bio, categorized skills grid with icons
3. **Experience** — Timeline with work history
4. **Projects** — Featured project cards with GitHub/demo links
5. **Certifications** — Gallery with modal popups
6. **Education & Achievements** — Academic info and accomplishments
7. **Footer** — Contact form, email, phone, location, social links

## License

Made with ❤️ by Trupti Salve

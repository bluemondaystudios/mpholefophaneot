# Mpho Lefophane Occupational Therapy

Mobile-first practice website, built as a React single-page app and deployed to GitHub Pages.

## Stack
- React 18 + Vite
- Tailwind CSS
- Framer Motion (scroll reveals, transitions, micro-interactions)
- Google Fonts
- No backend required

## Develop
```
npm install
npm run dev
```

## Build
```
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```

## Deploy
Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` via GitHub Pages.

One-time setup: in the repository's **Settings → Pages**, set **Source** to **GitHub Actions** (this repo previously deployed a static `index.html` directly from the branch; that no longer applies now that the site is built).

The custom domain is preserved via `assets/CNAME`, which Vite copies into `dist/` on build (Vite's `publicDir` is configured to `assets/` — see `vite.config.js` — so this folder plays the role Vite normally gives `public/`, keeping images at their original repo path).

## Content
- `src/data/services.js` — service listing copy (titles, summaries, detail lists)
- `src/components/*.jsx` — one component per section (Hero, About, Milestones, Services, Approach, Contact, etc.)
- `assets/` — logos, photos, service icons, and `CNAME`

Before launch, replace/confirm:
- Domain
- Office/service-area details
- Practitioner credentials
- Photos
- Any service wording the practitioner wants changed
- WhatsApp/phone/email details

The site currently uses the supplied logo and portrait from the client's marketing material.

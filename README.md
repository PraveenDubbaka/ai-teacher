# Hey Teacher Prototype

Investor-ready, production-style prototype for a voice-first AI education platform.

Children interact only with physical AI speakers/toys using the wake word "Hey Teacher".
Parents use this web console to manage learning, safety, devices, subscriptions, and family controls.

## Stack

- Next.js 15 + React 19 + TypeScript
- Tailwind CSS + shadcn/ui style primitives
- Framer Motion
- React Hook Form + Zod
- TanStack Query + TanStack Table
- Recharts
- NextAuth (mock credentials)
- Fully mock JSON data

## Product Areas Included

- Landing, Authentication, Onboarding
- Dashboard
- Children
- Devices + 10-step Add Device flow
- Learning Analytics
- Reports
- Safety Center
- Conversation History
- Parent Controls
- Homework Center
- Story Library
- Marketplace
- Subscriptions
- Billing
- Family
- Settings
- Support

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Quality Checks

```bash
npm run lint
npm run build
```

## GitHub Pages Deployment

This project is configured to deploy to GitHub Pages using GitHub Actions.

Files added for deployment:
- `.github/workflows/deploy-pages.yml`
- `public/.nojekyll`

How it works:
1. Push to `main`.
2. GitHub Action builds with static export mode (`GITHUB_PAGES=true`).
3. The `out/` directory is deployed to GitHub Pages.

The workflow auto-detects repository type:
- `username.github.io` repo -> root deploy (`/`)
- any other repo -> subpath deploy (`/repo-name`)

### Important note

GitHub Pages is static hosting, so server routes (like NextAuth API routes) are not deployed.

## Hero Video Configuration

By default, the landing page uses the animated demo banner fallback.

To enable real MP4 hero playback, set this environment variable:

```bash
NEXT_PUBLIC_HERO_VIDEO_SRC=/videos/hey-teacher-device-demo.mp4
```

Then place the MP4 file at:

`public/videos/hey-teacher-device-demo.mp4`

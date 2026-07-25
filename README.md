# GroWithAI

> Helping Businesses Grow with Artificial Intelligence

GroWithAI is a modern, dark-mode-first marketing platform built for an AI business consultancy targeting the Indian market. It features a glassmorphism design system, Framer Motion animations, a multi-step contact form with Zod validation, an interactive ROI calculator, a floating chatbot widget, and 5 fully-built solution sub-pages — all powered by Next.js 15 and React 19.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Pages and Routes](#pages-and-routes)
- [Components](#components)
- [Design System](#design-system)
- [API](#api)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Features

### Core

- **7 Pages** — Home, Blog, and 5 solution detail pages (AI Chatbots, Voice Agents, Receptionists, Sales Assistants, WhatsApp Automation)
- **37 Components** — Organized into layout, sections, solutions, UI primitives, and widgets
- **Interactive ROI Calculator** — Real-time Indian Rupee (INR) calculations with animated results
- **3-Step Contact Form** — Multi-step wizard with Zod schema validation and honeypot spam protection
- **Floating Chatbot Widget** — Client-side mock chatbot with pre-built responses
- **Full SEO Infrastructure** — Dynamic metadata, JSON-LD structured data, sitemap, robots.txt, and Open Graph tags

### Design

- **Dark Mode First** — Class-based dark/light toggle with `surface.deep` (#080812) base
- **Glassmorphism Design System** — Translucent cards, gradient accents, layered blur effects
- **Framer Motion Animations** — Scroll-triggered fade-ups, staggered reveals, floating elements
- **Accessible** — Reduced motion support via `use-reduced-motion` hook, focus-visible ring indicators
- **Custom Brand Colors** — Purple (#6C3BFF), Gold (#F7B500), with full semantic palette

### Technical

- **React 19 + Next.js 15** — App Router, Server Components, static generation
- **TypeScript Strict Mode** — Full type safety with path aliases
- **Tailwind CSS 3.4** — Custom theme with 9 animations, custom spacing, and glass utilities
- **Security Headers** — HSTS, X-Frame-Options DENY, X-XSS-Protection, and more at the config level
- **Indian Market Focus** — INR currency formatting, regional language support, locale `en_IN`

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | [TypeScript 5.7](https://www.typescriptlang.org/) (strict mode) |
| UI Library | [React 19](https://react.dev/) |
| Styling | [Tailwind CSS 3.4](https://tailwindcss.com/) |
| Animation | [Framer Motion 11](https://www.framer.com/motion/) |
| Forms | [React Hook Form 7](https://react-hook-form.com/) + [Zod 3](https://zod.dev/) |
| UI Components | [Radix UI](https://www.radix-ui.com/) (Accordion, Dialog, Dropdown, Slot) |
| Icons | [Lucide React](https://lucide.dev/) |
| Carousel | [Embla Carousel](https://www.embla-carousel.com/) |
| Toasts | [Sonner](https://sonner.emilkowal.ski/) |
| Class Utilities | [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) + [CVA](https://cva.style/) |
| Smooth Scroll | [Lenis](https://lenis.darkroom.engineering/) |

---

## Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** 9+ (recommended) or yarn/pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/GroWithAi.git
cd GroWithAi

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

### Environment Variables

No environment variables are required to run the project. The contact form API currently logs submissions to the console.

To enable email delivery, create a `.env.local` file:

```env
RESEND_API_KEY=your_resend_api_key_here
```

Then uncomment the Resend integration in `app/api/contact/route.ts`.

---

## Project Structure

```
GroWithAi/
├── app/                          # Next.js App Router
│   ├── globals.css               # Global styles and Tailwind directives
│   ├── layout.tsx                # Root layout (fonts, providers, metadata)
│   ├── loading.tsx               # Loading state component
│   ├── not-found.tsx             # Custom 404 page
│   ├── page.tsx                  # Homepage (all sections composed)
│   ├── robots.ts                 # Robots.txt generation
│   ├── sitemap.ts                # Sitemap generation
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── blog/
│   │   └── page.tsx              # Blog listing page
│   └── solutions/
│       ├── ai-chatbots/page.tsx
│       ├── ai-receptionists/page.tsx
│       ├── ai-sales-assistants/page.tsx
│       ├── ai-voice-agents/page.tsx
│       └── whatsapp-automation/page.tsx
├── components/
│   ├── layout/                   # Navbar, Footer, MobileNav
│   ├── sections/                 # 15 homepage sections
│   ├── solutions/                # 8 shared solution page components
│   ├── ui/                       # 10 reusable UI primitives
│   └── widgets/                  # Chatbot widget
├── hooks/                        # 3 custom React hooks
├── lib/                          # Utilities, constants, types, SEO
├── public/                       # Static assets (favicon, logo, OG image)
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind theme customization
├── tsconfig.json                 # TypeScript configuration
└── postcss.config.js             # PostCSS configuration
```

---

## Configuration

### next.config.ts

- **Image optimization** for AVIF and WebP formats with 8 device sizes up to 3840px
- **Security headers** on all routes (HSTS, X-Frame-Options DENY, X-XSS-Protection, etc.)
- **Experimental optimization** for `lucide-react` and `framer-motion` bundle imports

### tailwind.config.ts

| Category | Items |
|----------|-------|
| **Brand Colors** | `purple` (#6C3BFF), `deep-purple` (#4422C8), `gold` (#F7B500), `gold-highlight` (#FFD95A), `blue` (#2F8CFF), `green` (#22C55E) |
| **Surface Colors** | `deep` (#080812), `base` (#11111C), `card` (#171726), `elevated` (#1E1E30), `overlay` |
| **Text Colors** | `primary` (#FFFFFF), `secondary` (#A0A0B8), `muted` (#6B6B80) |
| **Fonts** | `sans` (Inter), `display` (General Sans), `mono` (Geist Mono) |
| **Animations** | `float`, `float-delayed`, `gradient-shift`, `pulse-soft`, `slide-up`, `fade-in`, `scale-in`, `shimmer`, `glow` |

### tsconfig.json

- Strict mode enabled
- Path alias: `@/*` maps to project root
- Target: ES2017, Module: ESNext, Module Resolution: Bundler

---

## Pages and Routes

| Route | Type | Description |
|-------|------|-------------|
| `/` | Static | Homepage with 15 sections: Hero, Business Metrics, AI Solutions, How It Works, Industries, Why GroWithAI, Success Stories, ROI Calculator, Pricing, Testimonials, Trusted By, FAQ, Tech Ecosystem, Contact, Final CTA |
| `/blog` | Static | Blog listing page |
| `/solutions/ai-chatbots` | Static | AI Chatbots solution page |
| `/solutions/ai-voice-agents` | Static | AI Voice Agents solution page |
| `/solutions/ai-receptionists` | Static | AI Receptionists solution page |
| `/solutions/ai-sales-assistants` | Static | AI Sales Assistants solution page |
| `/solutions/whatsapp-automation` | Static | WhatsApp Automation solution page |
| `/api/contact` | Dynamic | Contact form submission endpoint (POST) |

---

## Components

### Layout (components/layout/)

| Component | Description |
|-----------|-------------|
| `navbar` | Fixed top navigation with scroll effects, mobile menu |
| `mobile-nav` | Slide-out mobile navigation drawer |
| `footer` | Site footer with links, social icons, branding |

### Sections (components/sections/)

| Component | Description |
|-----------|-------------|
| `hero` | Animated hero with particle background and metrics |
| `ai-solutions` | AI services grid with icons and outcomes |
| `business-challenges` | Pain points carousel with solutions |
| `how-it-works` | 6-step timeline process |
| `industries` | Industry cards with benefits |
| `why-growithai` | Competitive advantages grid |
| `success-stories` | Case study cards with results |
| `roi-calculator` | Interactive ROI calculator with sliders |
| `pricing` | Pricing tiers with monthly/annual toggle |
| `testimonials` | Client testimonials carousel |
| `trusted-by` | Client logo wall |
| `faq` | Accordion FAQ section |
| `tech-ecosystem` | Technology stack showcase |
| `contact` | 3-step contact form with validation |
| `final-cta` | Final call-to-action banner |

### Solutions (components/solutions/)

Shared components used across all 5 solution pages:

| Component | Description |
|-----------|-------------|
| `solution-hero` | Solution page hero with metrics |
| `solution-features` | Feature grid with icons |
| `solution-how-it-works` | Step-by-step process |
| `solution-use-cases` | Industry use cases with results |
| `solution-integrations` | Integration partners grid |
| `solution-roi` | ROI metrics display |
| `solution-faq` | Solution-specific FAQ |
| `solution-cta` | Solution page CTA |

### UI Primitives (components/ui/)

| Component | Description |
|-----------|-------------|
| `button` | 6 variants (primary, secondary, gold, outline, ghost, link) x 4 sizes |
| `badge` | Styled badge component |
| `card` | Glass card component |
| `accordion` | Radix-based collapsible accordion |
| `carousel` | Embla-based carousel |
| `animated-counter` | Scroll-triggered number animation |
| `magnetic-button` | Cursor-following magnetic button |
| `particle-background` | Animated particle canvas |
| `scroll-progress` | Top-of-page scroll indicator |
| `theme-toggle` | Dark/light mode switcher |

### Widgets (components/widgets/)

| Component | Description |
|-----------|-------------|
| `chatbot` | Floating chatbot widget with mock responses |

### Custom Hooks (hooks/)

| Hook | Description |
|------|-------------|
| `use-active-section` | IntersectionObserver-based section tracking |
| `use-reduced-motion` | Respects `prefers-reduced-motion` media query |
| `use-scroll-position` | Tracks scroll position and scrolled state |

---

## Design System

The design follows a **glassmorphism** aesthetic with layered translucency and gradient accents.

### Color Palette

```
Purple:    #6C3BFF  (Primary brand, CTAs, accents)
Gold:      #F7B500  (Highlights, secondary CTAs)
Blue:      #2F8CFF  (Links, info states)
Green:     #22C55E  (Success, positive metrics)

Deep:      #080812  (Deepest background layer)
Base:      #11111C  (Main background)
Card:      #171726  (Card surfaces)
Elevated:  #1E1E30  (Elevated surfaces)
```

### Glass Effect

```css
.glass {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
}

.glass-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  border-radius: 1.5rem;
  padding: 1.5rem;
}
```

### Animations

| Name | Description |
|------|-------------|
| `float` | Gentle vertical float (6s cycle) |
| `float-delayed` | Same as float with 2s delay (8s cycle) |
| `gradient-shift` | Background gradient position shift (8s cycle) |
| `pulse-soft` | Subtle opacity pulse (4s cycle) |
| `slide-up` | Scroll-triggered slide up with fade |
| `fade-in` | Scroll-triggered fade in |
| `scale-in` | Scroll-triggered scale from 0.9 |
| `shimmer` | Horizontal shimmer sweep (2s cycle) |
| `glow` | Pulsing purple box-shadow (3s cycle) |

### Button Variants

| Variant | Appearance |
|---------|------------|
| `primary` | Solid purple with shadow |
| `secondary` | Glass/translucent with border |
| `gold` | Solid gold with shadow |
| `outline` | Border only, purple hover |
| `ghost` | Text only, subtle background hover |
| `link` | Underlined text link |

---

## API

### POST /api/contact

Validates and processes contact form submissions.

**Request Body:**

```json
{
  "name": "string (min 2 chars)",
  "email": "string (valid email)",
  "company": "string (optional)",
  "phone": "string (optional)",
  "service": "string (min 1 char)",
  "message": "string (min 10 chars)",
  "honeypot": "string (must be empty)"
}
```

**Responses:**

| Status | Body |
|--------|------|
| 200 | `{ "message": "Form submitted successfully" }` |
| 400 | `{ "error": "Validation failed" }` with field-level details |
| 500 | `{ "error": "Failed to process form" }` |

**Spam Protection:** The `honeypot` field must be empty. If it contains any value, the request is silently rejected.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server on port 3000 |
| `npm run build` | Create an optimized production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint across the project |
| `npm run type-check` | Run TypeScript compiler in check-only mode |

---

## Deployment

### Vercel (Recommended)

GroWithAI is optimized for [Vercel](https://vercel.com):

1. Push your code to a GitHub repository
2. Import the repository on [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js and configures the build
4. Deploy — your site is live

### Docker

```bash
# Build the image
docker build -t growithai .

# Run the container
docker run -p 3000:3000 growithai
```

### Self-Hosted

```bash
npm run build
npm run start
```

The production server runs on port 3000 by default.

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m "Add amazing feature"`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Conventions

- Use explicit Lucide icon imports (not barrel `import *` imports)
- Use `href` prop on the Button component (not `asChild`)
- Pass icon names as strings to shared components, resolve with `ICON_MAP`
- Follow existing glassmorphism patterns in `globals.css`
- Run `npm run type-check` before committing

---

## License

This project is proprietary. All rights reserved.

---

Built with Next.js 15, React 19, Tailwind CSS, and Framer Motion.

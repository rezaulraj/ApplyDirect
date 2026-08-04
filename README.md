# MayerDua — Global Recruitment Landing Page

A premium single-page site built with React 19, Vite, Tailwind CSS v4, GSAP + ScrollTrigger,
Framer Motion, Lenis, Lucide React, SplitType, React CountUp and Swiper.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

> This project ships a `.npmrc` with `legacy-peer-deps=true`, so plain `npm install`
> works even though `react-simple-maps` hasn't published an official React 19 peer
> range yet. It's been verified to work correctly at runtime with React 19 (build +
> a static-render smoke test), npm's peer resolver is just being strict. `npm audit`
> reports **0 vulnerabilities** on this dependency set.

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  App.jsx                 Composes every section
  index.css               Design tokens + component CSS (glass, bento, menu, etc.)
  lib/
    useLenis.js            Smooth scroll wired into GSAP's ticker
    useReveal.js            Scroll-triggered entrance/exit animations (reveal AND unreveal,
                             replays both ways as you scroll up or down)
    useShrinkOnScroll.js    Scrubs each full-screen section down in scale/opacity as it
                             scrolls past the top of the viewport, reversible
    useMagnetic.js          Magnetic button hover effect
  components/
    NoiseCanvas.jsx         Ambient film-grain overlay
    CursorGlow.jsx          Mouse-follow glow
    Header.jsx              Floating glass navbar
    HamburgerMenu.jsx       Fullscreen animated menu (Framer Motion), compact nav type
    Hero.jsx                Split-text headline, parallax image collage, CountUp stats
    Services.jsx            Zigzag service rows
    WhyChooseUs.jsx         Bento grid
    GlobalMap.jsx           react-simple-maps world map — Asia-to-Europe talent corridor
    Industries.jsx          Construction / Healthcare / Manufacturing / Agriculture
    Process.jsx             Scroll-driven roadmap with animated progress line
    FeaturedJobs.jsx        EU roles (Croatia, Romania, Serbia) with realistic monthly pay
    SuccessNumbers.jsx      CountUp stat band
    Testimonials.jsx        Swiper carousel
    CTA.jsx                 Gradient call-to-action
    ContactForm.jsx         Dedicated contact form (name, email, phone, message)
    Footer.jsx              Copyright + social links only
```

## Notes

- Every major section is a full-viewport (`100vh`) screen. Scrolling down smoothly **reveals**
  the next section and **shrinks/fades** the previous one away; scrolling back up reverses both
  animations — nothing needs a page reload or re-trigger, it's all scrub-driven.
- Headings are capped near Tailwind's `text-4xl`/`5xl` scale so copy stays inside one screen
  instead of overflowing.
- The hamburger menu keeps large nav type restrained (not oversized) so the whole list fits
  within the viewport when open.
- **Global Reach** uses a real SVG world map (`react-simple-maps`), highlighting three Asian
  sourcing countries (India, Philippines, Nepal) connected by animated lines to three European
  destination countries (Croatia, Romania, Serbia) — the map geography loads from a CDN
  topojson file at runtime.
- Images are real, curated photography from Unsplash (not placeholders) — verified individually and
  linked directly to `images.unsplash.com`, free to use under the Unsplash License:
  - Hero: team briefing around a table; two partners shaking hands outside a building
  - Services: an office interview (Executive Search), airplane cabin (Workforce Mobilisation),
    a handshake over a table (Talent Pipelines)
  - Industries: a construction site, a hospital corridor, a textile factory machine, a farm worker
    harvesting produce
  - The Hero photos get the `.duo` CSS treatment (grayscale + brand-color overlay) for a cohesive
    editorial look; Services/Industries photos run in natural color.
- Headings use **Bricolage Grotesque** (loaded from Google Fonts in `index.html`) as a stand-in for
  the originally requested "amrio," which isn't a distributable typeface.
- `lucide-react` no longer ships brand/social logos (Facebook, Instagram, LinkedIn), so the menu
  footer and page footer use text links instead of icon glyphs.
- This was built and verified with `npm install --legacy-peer-deps && npm run build` — it
  compiles cleanly and the preview server serves a 200.

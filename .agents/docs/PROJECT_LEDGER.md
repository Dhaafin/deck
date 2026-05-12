# PROJECT LEDGER: Deck

> **System**: This ledger is the single source of truth for this project. Located at `.agents/docs/PROJECT_LEDGER.md`. Maintained by the `deck-discuss`, `deck-code`, and `deck-status` workflows.

---

## 🎯 COMMANDER'S INTENT (CCI)

**Vision**: A high-conversion "Selling Deck" website for a specialized digital creative studio that bridges Social Media Branding and High-Conversion Digital Experiences for Indonesian Social-First DTC brands. The site IS the proof of concept.

**Core Constraints**:
- **Stack**: Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion.
- **Vibe**: Light Mode, Luxury, Precision Tech. BMW M1000RR-inspired palette.
- **Color Palette**: Alpine White (Base), Motorsport Blue & Racing Red (Accents, Sparingly).
- **Motion**: Graceful & Floating — Framer Motion ONLY.
- **Architecture**: Atomic Design (Atoms → Molecules → Organisms → Templates → Pages).
- **Market**: Indonesian Social-First DTC brands (Fashion, Skincare, Lifestyle). Secondary: Aesthetic lifestyle brands.
- **Languages**: Indonesian (default) + English. Full i18n language switcher in Navbar.
- **Brief**: See `.agents/docs/BRIEF.md` for full positioning and copy guidance.

---

## 🗺️ MILESTONE ROADMAP

| ID  | Milestone                  | Status     | Due Date   | Details                                      |
| :-- | :------------------------- | :--------: | :--------: | :------------------------------------------- |
| M1  | Project Foundation         | [Complete] | 2026-05-13 | Setup Design System, Style Guide, and PRD.   |
| M2  | Hero & Brand Identity      | [Pending]  | 2026-05-15 | Build the high-impact Hero section.          |
| M3  | Showcase & Portfolio       | [Pending]  | 2026-05-18 | Implement interactive website previews.       |
| M4  | Sales & Process Sections   | [Pending]  | 2026-05-20 | Pricing, Process, and Conversion sections.   |
| M5  | Polishing & Launch         | [Pending]  | 2026-05-22 | Final animations, SEO, and performance check. |

---

## 🛠️ ACTIVE FEATURE

**Feature**: Sprint 1 — Navbar, Hero, Value Props
**Checklist**:
- [ ] Install Framer Motion (`npm install framer-motion`).
- [ ] Configure Tailwind 4 `@theme` with M-Performance color tokens (OKLCH).
- [ ] Setup Google Fonts (Plus Jakarta Sans) in `layout.tsx`.
- [ ] Build `Navbar` organism (Glassmorphism, sticky, Framer scroll effect).
- [ ] Build `Hero` organism (HeroHeadline, HeroSubtext, HeroCTA, FloatingCard).
- [ ] Build `ValueProps` organism (StatCards: Lighthouse 100, < 1s load, 3 revisions).

---

## 📓 RESEARCH PARKING LOT

- [ ] Interactive 3D device mockups (Three.js or pure CSS?).
- [ ] Subtle Carbon Fiber texture implementation.
- [ ] Glassmorphism navbar styling for Next.js 16.

---

## 📋 CHRONOLOGICAL ACTIVITY LOG

| Date       | Role | Commit / Action              | Description                           |
| :--------- | :--- | :--------------------------- | :------------------------------------ |
| 2026-05-12 |  PM  | init: project ledger created | PM system initialized manually.       |
| 2026-05-12 | Discuss | docs: PRD created         | Defined core features, tech stack, and user stories. |
| 2026-05-12 | Discuss | docs: Tech Stack Guide    | Created mandatory rules for Next.js 16 and Tailwind v4. |
| 2026-05-12 | Discuss | architecture: Atomic Design| Implemented Atomic Design and strict Tailwind/Framer rules. |
| 2026-05-12 | Discuss | decision: Deck carousel    | Chose freeform carousel of site-types (Agency, SaaS, etc.) over template tiers. |
| 2026-05-12 | Discuss | decision: pricing approach | Request a Quote with scope descriptors. No prices shown. PRD + Ledger finalized. |
| 2026-05-12 | Discuss | docs: BRIEF.md created    | Defined agency identity, Social-to-Site thesis, 3 target verticals, 3 services. |
| 2026-05-12 | Discuss | feature: i18n added       | ID/EN language switcher added to Navbar. Next.js 16 i18n routing documented. |

---

## 🚩 PM STATUS: GREEN

**Next Immediate Step**: Transition to `/deck-code` to start implementing the project foundation.

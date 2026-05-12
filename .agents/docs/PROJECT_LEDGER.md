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

| ID  | Milestone                |   Status   |  Due Date  | Details                                       |
| :-- | :----------------------- | :--------: | :--------: | :-------------------------------------------- |
| M1  | Project Foundation       | [Complete] | 2026-05-13 | Setup Design System, Style Guide, and PRD.    |
| M2  | Hero & Brand Identity    | [Complete] | 2026-05-15 | Built Navbar, Hero, ValueProps (Sprint 1).    |
| M3  | Showcase & Portfolio     | [Complete] | 2026-05-18 | Built DeckSection carousel (Sprint 2).        |
| M4  | Sales & Process Sections | [Pending]  | 2026-05-20 | Pricing, Process, and Conversion sections.    |
| M5  | Polishing & Launch       | [Pending]  | 2026-05-22 | Final animations, SEO, and performance check. |

---

## 🛠️ ACTIVE FEATURE

**Feature**: Sprint 3 — Process, Request a Quote, Footer
**Checklist**:

- [ ] Build `ProcessSection` organism (Audit → Design → Build → Launch vertical timeline).
- [ ] Build `QuoteSection` organism (Request a Quote form with project type selector).
- [ ] Build `Footer` organism (Minimal, clean, with social links).
- [ ] Add Sprint 3 i18n copy to both locale files.

---

## 📓 RESEARCH PARKING LOT

- [ ] Interactive 3D device mockups (Three.js or pure CSS?).
- [x] Subtle Carbon Fiber texture implementation → used gradient approach.
- [x] Glassmorphism navbar styling for Next.js 16 → implemented with backdrop-blur.

---

## 📋 CHRONOLOGICAL ACTIVITY LOG

| Date       | Role    | Commit / Action              | Description                                                                      |
| :--------- | :------ | :--------------------------- | :------------------------------------------------------------------------------- |
| 2026-05-12 | PM      | init: project ledger created | PM system initialized manually.                                                  |
| 2026-05-12 | Discuss | docs: PRD created            | Defined core features, tech stack, and user stories.                             |
| 2026-05-12 | Discuss | docs: Tech Stack Guide       | Created mandatory rules for Next.js 16 and Tailwind v4.                          |
| 2026-05-12 | Discuss | architecture: Atomic Design  | Implemented Atomic Design and strict Tailwind/Framer rules.                      |
| 2026-05-12 | Discuss | decision: Deck carousel      | Chose freeform carousel of site-types (Agency, SaaS, etc.) over template tiers.  |
| 2026-05-12 | Discuss | decision: pricing approach   | Request a Quote with scope descriptors. No prices shown. PRD + Ledger finalized. |
| 2026-05-12 | Discuss | docs: BRIEF.md created       | Defined agency identity, Social-to-Site thesis, 3 target verticals, 3 services.  |
| 2026-05-12 | Discuss | feature: i18n added          | ID/EN language switcher added to Navbar. Next.js 16 i18n routing documented.     |
| 2026-05-12 | Dev     | feat: Sprint 1 complete      | i18n architecture, Navbar, HeroSection, ValuePropsSection. Atomic Design.        |
| 2026-05-12 | Dev     | feat: Sprint 2 complete      | DeckSection with 3D tilt cards, TagBadge atom, service copy (ID/EN).             |

---

## 🚩 PM STATUS: GREEN

**Next Immediate Step**: Proceed to Sprint 3 — Process timeline, Request a Quote form, and Footer.

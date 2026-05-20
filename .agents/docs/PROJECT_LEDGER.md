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
| M4  | Sales & Process Sections | [Complete] | 2026-05-20 | Process, Quote form, Footer (Sprint 3).       |
| M5  | Polishing & Launch       | [Pending]  | 2026-05-22 | Final animations, SEO, and performance check. |

---

## 🛠️ ACTIVE FEATURE

**Feature**: Sprint 4 — Polishing & Launch
**Checklist**:

- [ ] Full visual QA pass (`npm run dev` — verify all sections, both locales).
- [ ] SEO: Verify metadata, heading hierarchy, semantic HTML.
- [ ] Performance: Audit Lighthouse score, optimize images/fonts.
- [ ] Responsive: Test mobile (320px), tablet (768px), desktop (1440px).
- [ ] Final motion polish: Ensure all animations feel cohesive.

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
| 2026-05-12 | Dev     | feat: Sprint 3 complete      | ProcessSection timeline, QuoteSection form, Footer. Full i18n copy (ID/EN).      |
| 2026-05-20 | Discuss | discussion: pricing strategy | Evaluated price list proposal against luxury positioning and DTC brief. |
| 2026-05-20 | Discuss | discussion: skill vs value  | Discussed developer skill level, pricing psychology, and adjusted pricing sweet spot. |
| 2026-05-20 | Dev     | feat: add interactive PricingSection | Implemented Motorsport Gearbox pricing section and updated dictionaries. |
| 2026-05-20 | Discuss | discussion: package details | Proposed detailing features list in pricing tiers to clarify deliverables. |
| 2026-05-20 | Dev     | style: adjust PricingSection | Updated grid to 50/50 split and styled inactive gear knobs to blue. |
| 2026-05-20 | Dev     | style: refine PricingSection layout & translate | Reverted ratio to 4/8, made heights equal, set pointer cursor, and translated Indonesian CTA. |
| 2026-05-20 | Dev     | fix: resolve HeroSection TS and linter warnings | Typed variants with as const and updated styling to match Tailwind v4 patterns. |
| 2026-05-20 | Discuss | discussion: process flow refactor | Evaluated agency client process workflow and discussed industry best practices. |
| 2026-05-20 | Discuss | discussion: hybrid dev-design flow | Analyzed design-in-code workflow positioning and proposed interactive prototyping. |
| 2026-05-20 | Discuss | planning: racetrack process section | Created implementation plan for Motorsport GP racetrack process flow section. |
| 2026-05-20 | Discuss | discussion: process section concept pivot | Proposed luxury audio mixing deck and Swiss watchmaker concept ideas. |
| 2026-05-20 | Discuss | discussion: layout refactor | Discussed layout variety and proposed horizontal track, stacked deck, and radial dial. |
| 2026-05-20 | Discuss | planning: horizontal scroll process | Created implementation plan for Horizontal Scroll Assembly Line layout. |
| 2026-05-20 | Dev     | feat: interactive process horizontal layout | Rebuilt ProcessSection using framer-motion sticky scroll map and 7-step translation. |
| 2026-05-20 | Dev     | fix: resolve horizontal scroll teleport & UI polish | Replaced static calc string with dynamic useTransform function to fix teleporting. Replaced duration pills with Lucide icons and updated scroll indicator. |
| 2026-05-20 | Dev     | feat: remove services section | Removed DeckSection (Layanan Kami) from home route and updated Navbar navigation links. |



---

## 🚩 PM STATUS: GREEN

**Next Immediate Step**: Run `npm run dev` to verify all sections. Then Sprint 4 — visual QA and polishing pass.

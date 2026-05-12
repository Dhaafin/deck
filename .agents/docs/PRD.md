# PRD: The Selling Deck

## 1. Executive Summary
The goal of this project is to build a high-conversion "Selling Deck" website for selling web development services. The site must serve as a living demonstration of premium design, technical precision, and performance.

## 2. Target Audience
- **Primary**: Indonesian Social-First DTC brands (Fashion, Skincare, Lifestyle) with 50k+ IG/TikTok followers.
- **Secondary**: Experience-Driven Lifestyle brands (Specialty Coffee, Boutique Cafes, Design Studios).
- **Language**: Indonesian (primary) + English (secondary). Full i18n language switcher required.

---

## 2.5 Final Section Map & Build Order

| Sprint | Section | Atomic Organisms | Notes |
| :--- | :--- | :--- | :--- |
| 1 | **Navbar** | `Logo`, `NavLinks`, `CTAButton` | Glassmorphism, sticky, Framer scroll effect. |
| 1 | **Hero** | `HeroHeadline`, `HeroSubtext`, `HeroCTA`, `FloatingCard` | 3-second wow. Bold typography + floating element. |
| 1 | **Value Props** | `StatCard`, `FeatureRow` | Performance score, speed, revision guarantee. |
| 2 | **The Deck (Carousel)** | `DeckCard`, `DeckCarousel`, `TagBadge` | 3 cards: Atmospheric Microsite, Direct-Conversion Engine, Digital Audit. |
| 3 | **The Process** | `StepItem`, `ProcessTimeline` | Audit → Design → Build → Launch. Vertical timeline. |
| 3 | **Request a Quote** | `QuoteForm`, `ProjectTypeSelector`, `SubmitButton` | Scope descriptors, no prices. High-focus layout. |
| 4 | **Footer** | `FooterLinks`, `FooterBrand`, `SocialLink` | Minimal, clean. |

## 3. Core Features & Sections (Single Page)

| Section | Content / Goal | Key Design Element |
| :--- | :--- | :--- |
| **Hero** | Value Prop: "Precision-Engineered Digital Experiences." | Floating 3D/Glass element, high-contrast typography. |
| **The Deck (Carousel)** | Freeform carousel of "website type" cards: Agency, Commerce, SaaS, Local, Editorial. Each with a device mockup, tagline, and reveal CTA. | Glassmorphism cards with 3D Framer Motion tilt on hover. Racing Stripe (Blue/Red) accent at top of each card. |
| **Performance Bench** | Real-time Lighthouse score visualization (100/100). | "Racing" gauge UI with M-Power accents. |
| **The Process** | Step-by-step: Audit -> Design -> Engineering -> Launch. | Vertical timeline with Carbon Fiber accents. |
| **Request a Quote** | No prices shown. Scope descriptors instead ("1–3 pages", "Custom CMS", "Full E-Commerce"). Project type selector + contact form. | Clean, high-focus layout. Framer Motion reveal on form focus. |
| **Contact / CTA** | Simple lead capture form. | Clean, high-focus layout. |

## 4. Technical Requirements

### 4.1 Frontend Stack
- **Framework**: Next.js 16 (App Router).
- **Styling**: Tailwind CSS 4.
- **Animations**: Framer Motion (for "Graceful & Floating" motion).
- **Icons**: Lucide React.
- **Typography**: Plus Jakarta Sans (via Google Fonts).
- **i18n**: Next.js built-in i18n routing. Locale files: `messages/id.json` + `messages/en.json`. Language switcher in Navbar.

### 4.2 Performance Goals
- **Lighthouse Score**: 100/100/100/100.
- **Load Time**: < 1.0s (LCP).
- **Accessibility**: WCAG 2.1 Level AA compliant.

## 5. User Stories
- *As a potential client, I want to feel immediately impressed by the speed and design of the site so that I trust the developer's skills.*
- *As a lead, I want to see previous work clearly displayed so that I can evaluate the quality.*
- *As a visitor, I want to understand the pricing and process without having to book a call first.*

## 6. Success Metrics
- **Conversion Rate**: Percentage of visitors who reach the Contact form.
- **Average Time on Site**: Ensuring visitors engage with "The Deck" portfolio.
- **Portfolio Clicks**: Tracking interest in specific template types.

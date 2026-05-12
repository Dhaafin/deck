# STYLE GUIDE: M-Performance Luxury

This document defines the visual identity and design system for the "Deck" project.

---

## 🎨 Color Palette

| Name | Hex | Usage |
| :--- | :--- | :--- |
| **Alpine White** | `#FFFFFF` | Primary background, surface colors. |
| **Cool Grey** | `#F5F5F7` | Subtle section backgrounds, depth layers. |
| **Carbon Charcoal**| `#111111` | Primary text, high-contrast accents. |
| **Motorsport Blue**| `#0066B2` | Focus accents, link hovers, active states. |
| **Racing Red** | `#E30613` | Alert accents, CTA highlights, branding pops. |

---

## 🔡 Typography

- **System Font**: `Plus Jakarta Sans` (Sans-serif)
- **Headers**: Bold (700) or ExtraBold (800). Use tight letter-spacing (`-0.02em`) for a technical look.
- **Body**: Regular (400) or Medium (500). Optimized for readability.

---

## 💎 Design Elements

### 1. Materials & Textures
- **Glassmorphism**: Navbar and floating cards should use `backdrop-filter: blur(12px)` with a semi-transparent white background (`rgba(255, 255, 255, 0.7)`).
- **Carbon Accents**: Use very subtle SVG patterns or linear-gradients (`45deg, #111 25%, #151515 25%`) for small "technical" details (dividers, button borders).
- **Brushed Metal**: Subtle silver-to-grey linear gradients for premium-feel buttons.

### 2. Borders & Corners
- **Corner Radius**: `8px` (Standard) or `0px` (Extreme Precision).
- **Racing Stripes**: 2px thick borders using Blue or Red as accents on the left or top of specific cards.

---

## 🎬 Motion & Interaction

- **Fade-In**: 0.6s ease-out with a subtle `10px` vertical slide.
- **Hover States**: Scaling (`scale(1.02)`) with a subtle `box-shadow` increase.
- **Scroll**: Use `framer-motion` for viewport-aware animations that "float" into view.

---

## 📐 Layout Rules

- **Max Width**: `1200px` for main content.
- **Spacing**: Use a 4px grid system (4, 8, 16, 32, 64, 128).
- **Whitespace**: Be generous. Let the content breathe to maintain the "Luxury" feel.

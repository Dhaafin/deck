# TECH STACK GUIDE: Next.js 16 & Tailwind v4

> **Critical**: This project uses Next.js 16 and Tailwind v4. These versions have breaking changes and different conventions from earlier versions.

---

## 🚀 Next.js 16 Rules

### This is NOT the Next.js you know
This version has breaking changes — APIs, conventions, and file structure may all differ from your training data.
- **MANDATORY**: Read the relevant guide in `node_modules/next/dist/docs/` before writing any code.
- **Deprecation**: Heed all deprecation notices in the logs.
- **App Router**: Assume App Router is the default unless specified otherwise.

### i18n (Internationalisation)
- **Languages**: Indonesian (`id`) and English (`en`). Indonesian is the default locale.
- **Method**: Use Next.js 16's built-in i18n routing. Check `node_modules/next/dist/docs/` for the exact API — do NOT assume it works the same as Next.js 13/14.
- **Locale Files**: `messages/id.json` and `messages/en.json` at the project root.
- **Switcher**: A `LanguageSwitcher` atom in the Navbar. Toggling it should update the locale without a full page reload.
- **Copy Rule**: Each locale must feel natively written — no direct word-for-word translations.

---

## 🎨 Tailwind CSS v4 Rules (2025 Best Practices)

### General Guidelines
- Use Tailwind utility classes for consistent styling; use custom CSS only for special cases.
- Organize classes logically: Layout -> Spacing -> Color -> Typography.
- Use responsive and state variants (e.g., `sm:`, `md:`, `lg:`, `hover:`, `focus:`, `dark:`).
- **Embrace v4 Features**: Use container queries and CSS variables.
- Rely on Tailwind classes rather than inline styles or external CSS.

### Configuration (CSS Files)
- Use the `@theme` directive to define custom design tokens like fonts, breakpoints, and colors.
- **Modern Colors**: Prefer `oklch` for better color gamut support, defining them in the `:root` scope.
- **Auto-Content**: No `content` array needed in config; the Oxide engine scans project files automatically.
- **Custom Utilities**: Extend Tailwind using the `@utility` directive in CSS files.

### Styling (CSS Files)
- **3D Transforms**: Use `rotate-x-*`, `rotate-y-*`, and `scale-z-*`.
- **Container Queries**: Implement with `@container`, `@max-*`, and `@min-*` utilities.
- **Arbitrary Values**: Use square bracket notation (e.g., `[mask-type:luminance]` or `top-[117px]`).
- **Starting Style**: Use the `starting` variant for `@starting-style` transitions.

### Components (React/TypeScript)
- **Direct Application**: Apply utility classes directly in the markup.
- **Dynamic Classes**: Use template literals for dynamic values (e.g., `className={`p-${padding}`}`).
- **Type Safety**: Prefer TypeScript for component files.
- **A11y**: Pair utilities with appropriate ARIA attributes. Use `sr-only` correctly.

## 🏗️ Architecture: Atomic Design

All components MUST follow Atomic Design principles to ensure scalability and reusability:

- **Atoms**: Smallest functional units (e.g., `Button`, `Input`, `Typography`, `Icon`). They must be logic-free and purely presentational.
- **Molecules**: Simple groups of atoms (e.g., `SearchBar`, `FormInput`, `NavItem`). They manage simple internal state but avoid complex business logic.
- **Organisms**: Complex UI patterns (e.g., `Navbar`, `HeroSection`, `PortfolioGrid`). These can handle data fetching and complex business logic.
- **Templates**: Page layouts that define where organisms sit.
- **Pages**: Final routes populated with data.

---

## 🎨 Styling & Motion: STRICTOR RULES

- **CSS**: Use **Tailwind CSS 4 ONLY**. Do not create external `.css` files unless absolutely necessary for global theme variables (`@theme`). No CSS Modules, No Styled Components.
- **Motion**: Use **Framer Motion ONLY**. Do not use CSS transitions/animations for complex motion; rely on Framer Motion for the "Graceful & Floating" feel.
- **Clean Markup**: Avoid deep nesting of utility classes where possible by breaking components down into Atoms.

# ⚡ React Starter Kit

A lean, production-ready React template with reusable components, design tokens, and a clean folder structure — drop it in, swap the tokens, start building.

---

## 🚀 Quick start

```bash
# 1. Copy this folder to your new project
cp -r react-starter my-new-app
cd my-new-app

# 2. Install dependencies
npm install

# 3. Start dev server
npm start
```

---

## 📁 Folder structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx / .css    ← Sticky nav, mobile menu
│   │   ├── Footer.jsx / .css    ← Multi-column footer
│   │   ├── Container.jsx / .css ← Width constraint + padding
│   │   └── Section.jsx  / .css  ← Full-width row wrapper
│   │
│   ├── ui/
│   │   ├── Button.jsx / .css    ← 5 variants, 4 sizes, loading state
│   │   ├── NavLink.jsx / .css   ← Active-aware nav anchor
│   │   ├── Card.jsx    / .css   ← Surface card, 4 variants
│   │   ├── Badge.jsx   / .css   ← Status/tag pill
│   │   └── SectionHeader.jsx    ← Eyebrow + title + subtitle block
│   │
│   ├── sections/
│   │   ├── Hero.jsx     / .css  ← Centered or split hero
│   │   ├── Features.jsx / .css  ← Icon + title + desc grid
│   │   ├── Testimonials.jsx     ← Quote cards grid
│   │   └── CTABanner.jsx        ← Full-width action strip
│   │
│   └── index.js                 ← Single-line barrel exports
│
├── hooks/
│   └── index.js                 ← useMediaQuery, useDebounce, useToggle …
│
├── utils/
│   └── index.js                 ← cn(), formatDate(), slugify(), truncate() …
│
├── styles/
│   ├── variables.css            ← ALL design tokens (colors, type, spacing …)
│   └── global.css               ← Reset + base styles, imports variables
│
├── App.js                       ← Demo wiring all components together
└── index.js                     ← React root
```

---

## 🎨 Customising the design tokens

Open `src/styles/variables.css` and change the `:root` values:

```css
:root {
  --color-primary:      #2563eb;   /* ← your brand colour */
  --color-secondary:    #7c3aed;
  --color-accent:       #f59e0b;

  --font-display: 'Your Font', sans-serif;
  --font-body:    'Your Font', sans-serif;

  --radius-md: 0.5rem;             /* ← tighten for a sharp look */
  --header-height: 64px;
}
```

Everything downstream updates automatically — no component edits needed.

---

## 🧩 Component quick reference

### `<Header>`
```jsx
<Header
  logo="MyBrand"
  navLinks={[{ label: 'About', href: '/about' }]}
  ctaLabel="Sign up"
  onCtaClick={() => {}}
  transparent={false}   // true → fades in on scroll
/>
```

### `<Footer>`
```jsx
<Footer
  logo="MyBrand"
  tagline="Making great things."
  columns={[{ title: 'Product', links: [{ label: 'Pricing', href: '/pricing' }] }]}
  socials={[{ label: 'Twitter', href: 'https://x.com/…', icon: <TwitterIcon /> }]}
/>
```

### `<Hero>`
```jsx
<Hero
  eyebrow="Introducing v2"
  title="Your headline"
  subtitle="Supporting copy."
  layout="centered"          // or "split"
  primaryCta={{ label: 'Start free', href: '/signup' }}
  secondaryCta={{ label: 'Learn more', href: '#features' }}
  media={<img src="…" alt="…" />}
/>
```

### `<Button>`
```jsx
<Button variant="primary" size="md">Click me</Button>
<Button variant="outline" size="lg" href="/page">Link button</Button>
<Button variant="primary" loading>Saving…</Button>
```
Variants: `primary` `secondary` `outline` `ghost` `danger`
Sizes: `xs` `sm` `md` `lg`

### `<Card>`
```jsx
<Card variant="bordered" padding="md" hover>Content</Card>
```
Variants: `bordered` `elevated` `flat` `default`

### `<Badge>`
```jsx
<Badge variant="success">Active</Badge>
<Badge variant="error">Failed</Badge>
```
Variants: `default` `primary` `success` `warning` `error` `outline`

### `<Section>`
```jsx
<Section id="features" bg="alt" size="lg">
  …
</Section>
```
bg: `default` `alt` `dark` `primary` `none`
size: `sm` `md` `lg` `xl`

### `<Container>`
```jsx
<Container size="xl">…</Container>
```
Sizes: `sm` `md` `lg` `xl` `2xl` `full`

### `<SectionHeader>`
```jsx
<SectionHeader
  eyebrow="Why us"
  title="Built for scale"
  subtitle="Supporting description text."
  align="center"   // or "left"
/>
```

---

## 🪝 Hooks

```js
import { useMediaQuery, useDebounce, useToggle, useLocalStorage, useClickOutside } from './hooks';

const isMobile = useMediaQuery('(max-width: 768px)');
const [open, toggle] = useToggle(false);
const [theme, setTheme] = useLocalStorage('theme', 'light');
```

---

## 🛠 Utils

```js
import { cn, truncate, slugify, formatDate } from './utils';

cn('btn', isActive && 'btn--active')   // → 'btn btn--active'
truncate('Long string…', 80)
slugify('Hello World!')                // → 'hello-world'
formatDate('2024-06-01')              // → 'June 1, 2024'
```

---

## 📋 Checklist for a new project

- [ ] Replace `--color-primary` and brand colours in `variables.css`
- [ ] Update fonts (Google Fonts import in `global.css`)
- [ ] Set logo, nav links, and CTA in `App.js`
- [ ] Update footer columns
- [ ] Replace demo content in `App.js` with real copy
- [ ] Add your pages/routes
- [ ] Update `<title>` and `<meta name="description">` in `public/index.html`

---

Happy shipping! 🚀

import React from 'react';
import './styles/global.css';
import {
  Header, Footer, Hero, Features, Testimonials, CTABanner,
} from './components';

/* ──────────────────────────────────────────────────────────
   CONFIG — swap this section for each new project.
   ────────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: 'Features',     href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing',      href: '#pricing' },
  { label: 'Blog',         href: '#blog' },
];

const FOOTER_COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing',  href: '#pricing'  },
      { label: 'Changelog',href: '#changelog' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About',   href: '#about'   },
      { label: 'Blog',    href: '#blog'    },
      { label: 'Careers', href: '#careers' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#privacy' },
      { label: 'Terms',   href: '#terms'   },
    ],
  },
];

const FEATURES = [
  { icon: '⚡', title: 'Lightning Fast',   description: 'Optimised for speed from day one. Sub-second load times out of the box.'  },
  { icon: '🎨', title: 'Fully Customisable',description: 'Swap colours, fonts, and layout via CSS variables — no component rewrites needed.' },
  { icon: '📱', title: 'Responsive',        description: 'Every component is mobile-first and tested across all screen sizes.' },
  { icon: '♿', title: 'Accessible',        description: 'ARIA labels, keyboard nav, focus management, and reduced-motion support built in.' },
  { icon: '🔌', title: 'Plug & Play',       description: 'Import what you need, skip the rest. Zero lock-in.' },
  { icon: '🛠', title: 'Developer Friendly', description: 'Clear prop APIs, JSDoc comments, and sensible defaults throughout.' },
];

const TESTIMONIALS = [
  {
    quote: 'This starter saved me two days of boilerplate work. The design tokens alone are worth it.',
    name: 'Priya S.',
    role: 'Frontend Engineer',
  },
  {
    quote: 'Finally a React template that isn\'t opinionated about my UI library choices.',
    name: 'Marcus T.',
    role: 'Indie Hacker',
  },
  {
    quote: 'The folder structure makes onboarding new team members so much faster.',
    name: 'Aanya R.',
    role: 'Lead Developer',
  },
];

/* ──────────────────────────────────────────────────────────
   APP
   ────────────────────────────────────────────────────────── */
function App() {
  return (
    <>
      <Header
        logo="StarterKit"
        navLinks={NAV_LINKS}
        ctaLabel="Get Started"
        onCtaClick={() => alert('CTA clicked!')}
      />

      <main>
        <Hero
          eyebrow="Launching faster, together"
          title={<>The React starter that&nbsp;<em style={{ fontStyle: 'normal', color: 'var(--color-primary)' }}>actually</em>&nbsp;scales</>}
          subtitle="A lean, fully-typed component library and folder structure you can drop into any project and customise in minutes — not days."
          layout="centered"
          primaryCta={{ label: 'Explore components', href: '#features' }}
          secondaryCta={{ label: 'View on GitHub', href: 'https://github.com', isExternal: true }}
        />

        <Features
          eyebrow="Why use this?"
          title="Built for real projects"
          subtitle="Not another UI-kit demo. These pieces were extracted from production sites and refined to be genuinely reusable."
          items={FEATURES}
          cols={3}
        />

        <Testimonials
          eyebrow="From the community"
          title="Developers love it"
          items={TESTIMONIALS}
          bg="alt"
        />

        <CTABanner
          title="Ship your next site faster"
          subtitle="Clone the repo, swap the tokens, and start building what matters."
          primaryCta={{ label: 'Start for free', href: '#' }}
          secondaryCta={{ label: 'See docs', href: '#' }}
          bg="primary"
        />
      </main>

      <Footer
        logo="StarterKit"
        tagline="A lean React starter for every project."
        columns={FOOTER_COLUMNS}
      />
    </>
  );
}

export default App;

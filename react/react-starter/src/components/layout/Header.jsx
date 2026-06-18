import React, { useState, useEffect } from 'react';
import NavLink from '../ui/NavLink';
import Button from '../ui/Button';
import './Header.css';

/**
 * Header — sticky top nav with logo, nav links, CTA button, and mobile menu.
 *
 * Props:
 *   logo        {ReactNode}  — brand logo/name
 *   navLinks    {Array}      — [{ label, href, isExternal? }]
 *   ctaLabel    {string}     — CTA button text  (optional)
 *   onCtaClick  {function}   — CTA button handler (optional)
 *   transparent {boolean}    — start transparent, fill on scroll (optional)
 */
const Header = ({
  logo = 'YourBrand',
  navLinks = [],
  ctaLabel = 'Get Started',
  onCtaClick,
  transparent = false,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const headerClass = [
    'header',
    transparent && !scrolled ? 'header--transparent' : '',
    scrolled ? 'header--scrolled' : '',
    menuOpen ? 'header--open' : '',
  ].filter(Boolean).join(' ');

  return (
    <header className={headerClass} role="banner">
      <div className="header__inner">
        {/* Logo */}
        <a href="/" className="header__logo" aria-label="Home">
          {logo}
        </a>

        {/* Desktop nav */}
        <nav className="header__nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} isExternal={link.isExternal}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        {ctaLabel && (
          <div className="header__cta">
            <Button variant="primary" size="sm" onClick={onCtaClick}>
              {ctaLabel}
            </Button>
          </div>
        )}

        {/* Hamburger */}
        <button
          className="header__hamburger"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <nav
        id="mobile-menu"
        className={`header__mobile-menu ${menuOpen ? 'header__mobile-menu--open' : ''}`}
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <NavLink key={link.href} href={link.href} isExternal={link.isExternal}
            onClick={() => setMenuOpen(false)}>
            {link.label}
          </NavLink>
        ))}
        {ctaLabel && (
          <Button variant="primary" size="sm" onClick={() => { onCtaClick?.(); setMenuOpen(false); }}>
            {ctaLabel}
          </Button>
        )}
      </nav>
    </header>
  );
};

export default Header;

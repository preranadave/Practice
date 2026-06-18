import React from 'react';
import './Footer.css';

/**
 * Footer — multi-column links + bottom bar.
 *
 * Props:
 *   logo        {ReactNode}    — brand name/logo
 *   tagline     {string}       — short brand description
 *   columns     {Array}        — [{ title, links: [{ label, href }] }]
 *   socials     {Array}        — [{ label, href, icon: ReactNode }]
 *   copyright   {string}       — override default copyright text
 */
const Footer = ({
  logo = 'YourBrand',
  tagline = 'Building great things.',
  columns = [],
  socials = [],
  copyright,
}) => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">

        {/* Brand column */}
        <div className="footer__brand">
          <a href="/" className="footer__logo">{logo}</a>
          <p className="footer__tagline">{tagline}</p>
          {socials.length > 0 && (
            <div className="footer__socials">
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  className="footer__social-link"
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.icon ?? s.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Link columns */}
        {columns.map((col) => (
          <div key={col.title} className="footer__col">
            <h3 className="footer__col-title">{col.title}</h3>
            <ul className="footer__col-links">
              {col.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer__link"
                    target={link.isExternal ? '_blank' : undefined}
                    rel={link.isExternal ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          {copyright ?? `© ${year} ${logo}. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

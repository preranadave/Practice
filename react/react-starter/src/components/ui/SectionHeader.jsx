import React from 'react';
import './SectionHeader.css';

/**
 * SectionHeader — eyebrow label + heading + optional subtext, centered or left.
 *
 * Props:
 *   eyebrow   {string}   — small label above title
 *   title     {ReactNode}
 *   subtitle  {ReactNode}
 *   align     {'left'|'center'}
 *   titleAs   {'h1'|'h2'|'h3'}
 */
const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align    = 'center',
  titleAs: Title = 'h2',
  className = '',
}) => (
  <div className={`section-header section-header--${align} ${className}`}>
    {eyebrow && <p className="section-header__eyebrow">{eyebrow}</p>}
    {title   && <Title className="section-header__title">{title}</Title>}
    {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
  </div>
);

export default SectionHeader;

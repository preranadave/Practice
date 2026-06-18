import React from 'react';
import Button from '../ui/Button';
import Container from '../layout/Container';
import './Hero.css';

/**
 * Hero — full-width opening section.
 *
 * Props:
 *   eyebrow      {string}
 *   title        {ReactNode}
 *   subtitle     {string}
 *   primaryCta   {{ label, href, onClick }}
 *   secondaryCta {{ label, href, onClick }}
 *   media        {ReactNode}    — image, video, illustration
 *   layout       {'centered'|'split'}
 *   minHeight    {string}       — CSS value e.g. '90vh'
 *   bg           {string}       — inline background CSS
 */
const Hero = ({
  eyebrow,
  title      = 'Your compelling headline here',
  subtitle,
  primaryCta,
  secondaryCta,
  media,
  layout     = 'centered',
  minHeight  = '80vh',
  bg,
  className  = '',
}) => (
  <section
    className={`hero hero--${layout} ${className}`}
    style={{ minHeight, background: bg }}
  >
    <Container>
      <div className="hero__content">
        {eyebrow && <p className="hero__eyebrow">{eyebrow}</p>}

        <h1 className="hero__title">{title}</h1>

        {subtitle && <p className="hero__subtitle">{subtitle}</p>}

        {(primaryCta || secondaryCta) && (
          <div className="hero__actions">
            {primaryCta && (
              <Button
                variant="primary"
                size="lg"
                href={primaryCta.href}
                onClick={primaryCta.onClick}
              >
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button
                variant="outline"
                size="lg"
                href={secondaryCta.href}
                onClick={secondaryCta.onClick}
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
      </div>

      {layout === 'split' && media && (
        <div className="hero__media">{media}</div>
      )}
    </Container>

    {layout === 'centered' && media && (
      <div className="hero__media-centered">{media}</div>
    )}
  </section>
);

export default Hero;

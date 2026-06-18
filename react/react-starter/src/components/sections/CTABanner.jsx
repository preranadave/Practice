import React from 'react';
import Button from '../ui/Button';
import Section from '../layout/Section';
import './CTABanner.css';

/**
 * CTABanner — full-width call-to-action strip.
 *
 * Props:
 *   title        {string}
 *   subtitle     {string}
 *   primaryCta   {{ label, href, onClick }}
 *   secondaryCta {{ label, href, onClick }}
 *   bg           {'primary'|'dark'|'alt'}
 */
const CTABanner = ({
  title      = 'Ready to get started?',
  subtitle,
  primaryCta,
  secondaryCta,
  bg         = 'primary',
  id         = 'cta',
}) => (
  <Section id={id} bg={bg} size="lg" className="cta-banner">
    <div className="cta-banner__content">
      <h2 className="cta-banner__title">{title}</h2>
      {subtitle && <p className="cta-banner__subtitle">{subtitle}</p>}

      {(primaryCta || secondaryCta) && (
        <div className="cta-banner__actions">
          {primaryCta && (
            <Button
              variant={bg === 'primary' ? 'secondary' : 'primary'}
              size="lg"
              href={primaryCta.href}
              onClick={primaryCta.onClick}
            >
              {primaryCta.label}
            </Button>
          )}
          {secondaryCta && (
            <Button
              variant="ghost"
              size="lg"
              href={secondaryCta.href}
              onClick={secondaryCta.onClick}
              style={{ color: '#fff' }}
            >
              {secondaryCta.label}
            </Button>
          )}
        </div>
      )}
    </div>
  </Section>
);

export default CTABanner;

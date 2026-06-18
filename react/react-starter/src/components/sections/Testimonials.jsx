import React from 'react';
import Section from '../layout/Section';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import './Testimonials.css';

/**
 * Testimonials
 *
 * Props:
 *   items  {Array} — [{ quote, name, role, avatar? }]
 */
const Testimonials = ({
  eyebrow  = 'Testimonials',
  title    = 'Loved by our users',
  subtitle,
  items    = [],
  id       = 'testimonials',
  bg       = 'alt',
}) => (
  <Section id={id} bg={bg}>
    <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />

    <div className="testimonials__grid">
      {items.map((item, i) => (
        <Card key={i} variant="elevated" padding="lg" className="testimonial">
          <p className="testimonial__quote">"{item.quote}"</p>
          <div className="testimonial__author">
            {item.avatar && (
              <img src={item.avatar} alt={item.name} className="testimonial__avatar" />
            )}
            <div>
              <p className="testimonial__name">{item.name}</p>
              {item.role && <p className="testimonial__role">{item.role}</p>}
            </div>
          </div>
        </Card>
      ))}
    </div>
  </Section>
);

export default Testimonials;

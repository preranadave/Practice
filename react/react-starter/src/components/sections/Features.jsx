import React from 'react';
import Section from '../layout/Section';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import './Features.css';

/**
 * Features — icon + title + description grid.
 *
 * Props:
 *   eyebrow  {string}
 *   title    {string}
 *   subtitle {string}
 *   items    {Array}  — [{ icon, title, description }]
 *   cols     {2|3|4}
 *   id       {string}
 */
const Features = ({
  eyebrow  = 'Features',
  title    = 'Everything you need',
  subtitle,
  items    = [],
  cols     = 3,
  id       = 'features',
  bg       = 'default',
}) => (
  <Section id={id} bg={bg}>
    <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />

    <div className={`features__grid features__grid--${cols}`}>
      {items.map((item, i) => (
        <Card key={i} variant="bordered" padding="lg" hover className="features__card">
          {item.icon && <div className="features__icon">{item.icon}</div>}
          <h3 className="features__item-title">{item.title}</h3>
          <p  className="features__item-desc">{item.description}</p>
        </Card>
      ))}
    </div>
  </Section>
);

export default Features;

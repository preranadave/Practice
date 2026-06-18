import React from 'react';
import Container from './Container';
import './Section.css';

/**
 * Section — full-width row with optional bg, padding, and a Container inside.
 *
 * Props:
 *   id          {string}
 *   bg          {'default'|'alt'|'dark'|'primary'|'none'}
 *   size        {'sm'|'md'|'lg'|'xl'}  — vertical padding scale
 *   containerSize — passed to Container
 *   className   {string}
 *   as          {string}  — HTML element
 *   noContainer {boolean} — skip inner Container (full bleed)
 */
const Section = ({
  id,
  bg = 'default',
  size = 'lg',
  containerSize = 'xl',
  className = '',
  as: Tag = 'section',
  noContainer = false,
  children,
  ...rest
}) => (
  <Tag
    id={id}
    className={`section section--bg-${bg} section--${size} ${className}`}
    {...rest}
  >
    {noContainer ? children : <Container size={containerSize}>{children}</Container>}
  </Tag>
);

export default Section;

import React from 'react';
import './Card.css';

/**
 * Card — general purpose surface card.
 *
 * Props:
 *   variant   {'default'|'bordered'|'elevated'|'flat'}
 *   hover     {boolean}  — lift on hover
 *   as        {string}   — HTML tag
 *   padding   {'none'|'sm'|'md'|'lg'}
 *   className {string}
 */
const Card = ({
  variant   = 'bordered',
  hover     = false,
  as: Tag   = 'div',
  padding   = 'md',
  className = '',
  children,
  ...rest
}) => (
  <Tag
    className={[
      'card',
      `card--${variant}`,
      `card--pad-${padding}`,
      hover ? 'card--hover' : '',
      className,
    ].filter(Boolean).join(' ')}
    {...rest}
  >
    {children}
  </Tag>
);

export default Card;

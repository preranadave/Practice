import React from 'react';
import './Container.css';

/**
 * Container — constrains width and adds horizontal padding.
 *
 * Props:
 *   size      {'sm'|'md'|'lg'|'xl'|'2xl'|'full'}
 *   as        {string}   — HTML element (default 'div')
 *   className {string}
 *   children  {ReactNode}
 */
const Container = ({ size = 'xl', as: Tag = 'div', className = '', children, ...rest }) => (
  <Tag className={`container container--${size} ${className}`} {...rest}>
    {children}
  </Tag>
);

export default Container;

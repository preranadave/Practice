import React from 'react';
import './Badge.css';

/**
 * Badge — pill label for tags, status, categories.
 *
 * Props:
 *   variant {'default'|'primary'|'success'|'warning'|'error'|'outline'}
 *   size    {'sm'|'md'}
 */
const Badge = ({ variant = 'default', size = 'md', className = '', children }) => (
  <span className={`badge badge--${variant} badge--${size} ${className}`}>
    {children}
  </span>
);

export default Badge;

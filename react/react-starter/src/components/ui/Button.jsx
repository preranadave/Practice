import React from 'react';
import './Button.css';

/**
 * Button — all-purpose button / anchor.
 *
 * Props:
 *   variant  {'primary'|'secondary'|'outline'|'ghost'|'danger'}
 *   size     {'xs'|'sm'|'md'|'lg'}
 *   href     {string}   — renders an <a> tag
 *   isExternal {boolean}
 *   loading  {boolean}
 *   disabled {boolean}
 *   fullWidth {boolean}
 *   leftIcon  {ReactNode}
 *   rightIcon {ReactNode}
 *   onClick  {function}
 *   className {string}
 */
const Button = ({
  variant   = 'primary',
  size      = 'md',
  href,
  isExternal = false,
  loading   = false,
  disabled  = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  onClick,
  className = '',
  children,
  type = 'button',
  ...rest
}) => {
  const cls = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth ? 'btn--full' : '',
    loading   ? 'btn--loading' : '',
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {loading && <span className="btn__spinner" aria-hidden="true" />}
      {!loading && leftIcon && <span className="btn__icon btn__icon--left">{leftIcon}</span>}
      <span>{children}</span>
      {!loading && rightIcon && <span className="btn__icon btn__icon--right">{rightIcon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={cls}
      disabled={disabled || loading}
      onClick={onClick}
      aria-busy={loading}
      {...rest}
    >
      {content}
    </button>
  );
};

export default Button;

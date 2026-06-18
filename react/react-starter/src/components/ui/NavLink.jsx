import React from 'react';
import './NavLink.css';

/**
 * NavLink — nav anchor that highlights when active.
 *
 * Props:
 *   href       {string}
 *   isExternal {boolean}
 *   active     {boolean}  — force active state
 *   onClick    {function}
 */
const NavLink = ({ href = '#', isExternal = false, active, onClick, className = '', children }) => {
  const isActive = active ?? (typeof window !== 'undefined' && window.location.pathname === href);

  return (
    <a
      href={href}
      onClick={onClick}
      className={`nav-link ${isActive ? 'nav-link--active' : ''} ${className}`}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </a>
  );
};

export default NavLink;

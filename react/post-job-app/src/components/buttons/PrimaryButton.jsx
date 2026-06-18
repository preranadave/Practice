import React from 'react';

const PrimaryButton = ({ children, href = '#' }) => {
  return (
    <a href={href} className="btn-bg">
      {children}
    </a>
  );
};

export default PrimaryButton;

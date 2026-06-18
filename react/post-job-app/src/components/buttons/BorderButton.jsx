import React from 'react';

const BorderButton = ({ children, href = '#', classNameBtn = '' }) => {
  return (
    <a href={href} className={`btn-border ${classNameBtn}`}>
      {children}
    </a>
  );
};

export default BorderButton;

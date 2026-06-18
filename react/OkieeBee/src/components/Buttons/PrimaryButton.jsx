import React from "react";
import "./button.css";

const PrimaryButton = ({ children, to = "#", className = "" }) => {
  return (
    <a href={to} className={`primary-btn ${className}`.trim()}>
      {children}
    </a>
  );
};

export default PrimaryButton;

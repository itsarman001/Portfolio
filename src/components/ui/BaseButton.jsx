import React from "react";

const BaseButton = ({ primary, secondary, flat, children, className = "" }) => {
  const baseClasses =
    "px-5 py-3 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50";

  const buttonTypes = {
    primary:
      "bg-flat text-primary border border-transparent focus:ring-secondary",
    secondary:
      "bg-flat text-primary border border-transparent hover:bg-accent active:bg-dark focus:ring-secondary",
    flat: "bg-transparent text-primary border border-primary hover:bg-flat active:bg-secondary focus:ring-primary",
  };

  let buttonClasses = baseClasses;

  if (primary) {
    buttonClasses += ` ${buttonTypes.primary}`;
  } else if (secondary) {
    buttonClasses += ` ${buttonTypes.secondary}`;
  } else if (flat) {
    buttonClasses += ` ${buttonTypes.flat}`;
  }

  return (
    <button className={`${buttonClasses} ${className}`}>{children}</button>
  );
};

export default BaseButton;

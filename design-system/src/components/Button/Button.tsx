import React from "react";
import "./Button.css";
import type { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  color = "blue",
  children,
  onClick,
}) => {
  const className = `btn ${variant} ${size} ${variant}-${color}`;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

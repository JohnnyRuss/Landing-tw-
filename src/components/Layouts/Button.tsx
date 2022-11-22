import React from "react";

interface ButtonType {
  children?: React.ReactNode;
  className?: string;
  value?: string;
}

const Button: React.FC<ButtonType> = ({
  children,
  className,
  value = "get started",
}) => {
  return (
    <button
      className={`px-7 py-3 bg-app-red rounded-3xl capitalize text-app-light-gray hover:opacity-90 ${className}`}
      data-btn-primary
    >
      {value}
    </button>
  );
};

export default Button;

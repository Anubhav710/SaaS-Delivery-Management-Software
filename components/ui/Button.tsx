import React from "react";
import { twMerge as tw } from "tailwind-merge";

const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: any;
}) => {
  return (
    <button className={tw(" text-white px-5  rounded-md", className)}>
      {children}
    </button>
  );
};

export default Button;

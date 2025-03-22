import React from "react";
import { twMerge } from "tailwind-merge";

interface TextProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const Text = ({ children, size = "md", className }: TextProps) => {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  return (
    <p className={twMerge(sizeClasses[size], "text-gray-700", className)}>
      {children}
    </p>
  );
};

export default Text;

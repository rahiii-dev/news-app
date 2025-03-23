import { LabelHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

const Label = ({ children, className, ...props }: LabelProps) => {
  return (
    <label className={twMerge("text-md", className)} {...props}>
      {children}
    </label>
  );
};

export default Label;

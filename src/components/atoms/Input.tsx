import { LucideIcon, LucideProps } from "lucide-react";
import { twMerge } from "tailwind-merge";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  endIcon?: LucideIcon;
  endIconProps?: Omit<LucideProps, "ref">; 
}

const Input = ({ 
  error, 
  endIcon: EndIcon, 
  endIconProps, 
  className, 
  ...inputProps
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="relative flex items-center">
        {/* Input Field */}
        <input
          {...inputProps} 
          className={twMerge(
            "px-4 py-3 w-full bg-white placeholder:text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 pr-10",
            className
          )}
        />
        {/* End Icon */}
        {EndIcon && (
          <EndIcon 
            {...endIconProps} 
            className={twMerge("absolute right-3 text-gray-400 w-5 h-5", endIconProps?.className)}
          />
        )}
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;

import { twMerge } from "tailwind-merge";

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        `px-4 py-2 rounded-lg bg-green-300 hover:bg-green-200 font-semibold transition-all duration-500 ease-in-out cursor-pointer 
        shadow-inner before:content-[''] before:absolute before:inset-0
        before:shadow-[inset_0_2px_6px_rgba(0,0,0,0.2)] relative overflow-hidden`,
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

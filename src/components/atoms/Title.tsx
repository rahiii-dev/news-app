import { twMerge } from "tailwind-merge";

interface TitleProps {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children: React.ReactNode;
    className?: string;
}

const Title = ({ level = 1, children, className }: TitleProps) => {
    const Tag: React.ElementType = `h${level}`;
    const baseStyles = "font-bold text-gray-900";
    const sizeStyles = {
        1: "text-3xl",
        2: "text-2xl",
        3: "text-xl",
        4: "text-lg",
        5: "text-base",
        6: "text-sm",
    };

    return <Tag className={twMerge(baseStyles, sizeStyles[level], className)}>{children}</Tag>;
};

export default Title;

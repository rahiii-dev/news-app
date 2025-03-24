import { LucideIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import Button from "../atoms/Button";

interface IconButtonProps {
  icon: LucideIcon;
  className?: string;
  iconClass?: string;
  onClick?: () => void;
  size?: number;
}

const IconButton = ({ icon: Icon, className, iconClass, onClick, size=40 }: IconButtonProps) => {
  const iconSize = size * 0.6;

  return (
    <Button className={twMerge("p-2 flex items-center justify-center", className)} onClick={onClick}>
      <Icon style={{ width: iconSize, height: iconSize }} className={iconClass} />
    </Button>
  );
};

export default IconButton;

import { CalendarClock } from "lucide-react"; 
import { twMerge } from "tailwind-merge";

type DateDisplayProps = {
  date: string;
  className?: string;
};

const DateDisplay = ({ date, className }: DateDisplayProps) => {
  const formattedDate = new Date(date).toUTCString(); 

  return (
    <div className={twMerge("flex items-center text-gray-400 text-sm gap-2", className)}>
      <CalendarClock size={16} />
      <span>{formattedDate}</span>
    </div>
  );
};

export default DateDisplay;

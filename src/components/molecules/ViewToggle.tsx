import { useState } from "react";
import { GridIcon, ListIcon } from "lucide-react";
import IconButton from "./IconButton";
import Title from "../atoms/Title";
import { twMerge } from "tailwind-merge";

interface ViewToggleProps {
  className?: string;
  onToggle: (view: "grid" | "list") => void;
}

const ViewToggle = ({className, onToggle}: ViewToggleProps) => {
  const [view, setView] = useState<"grid" | "list">("grid");

  const handleClick = (newView: "grid" | "list") => {
    setView(newView);
    onToggle(newView);
  };

  return (
    <div className={twMerge('flex flex-col items-center gap-4 p-4 bg-white rounded-lg shadow-lg', className)}>
      <Title>View Toggle</Title>
      <div className="flex rounded-lg w-max overflow-hidden">
        {/* Grid View Button */}
        <IconButton 
          icon={GridIcon} 
          size={80} 
          className={`px-8 py-4 rounded-none ${view === "grid" ? "bg-green-300" : "bg-gray-200"}`}
          iconClass={`${view === "grid" ? "text-black" : "text-gray-400"}`}
          onClick={() => handleClick("grid")}
        />

        {/* List View Button */}
        <IconButton 
          icon={ListIcon} 
          size={80} 
          className={`px-8 py-4 rounded-none ${view === "list" ? "bg-green-300" : "bg-gray-200"}`}
          iconClass={`${view === "list" ? "text-black" : "text-gray-400"}`}
          onClick={() => handleClick("list")}
        />
      </div>
    </div>
  );
};

export default ViewToggle;

import { useState } from "react";
import { GridIcon, ListIcon } from "lucide-react";
import IconButton from "./IconButton";
import Title from "../atoms/Title";
import { twMerge } from "tailwind-merge";
import { ViewType } from "../../types/view.interface";


interface ViewToggleProps {
  className?: string;
  defaultView?: ViewType;
  onToggle: (view: ViewType) => void;
}

const ViewToggle = ({className, onToggle, defaultView}: ViewToggleProps) => {
  const [view, setView] = useState<ViewType>(defaultView || "grid");

  const handleClick = (newView: ViewType) => {
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

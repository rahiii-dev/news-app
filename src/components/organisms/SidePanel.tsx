import UserInfo from "../molecules/UserInfo";
import ViewToggle from "../molecules/ViewToggle";
import Feedback from "../molecules/Feedback";
import { useState } from "react";
import FeedbackForm from "./FeedbackForm";

interface SidePanelProps {
  onToggleView: (view: "grid" | "list") => void;
}

const SidePanel = ({ onToggleView }: SidePanelProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFeedbackClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  return (
    <div className="relative h-full w-full">
      {/* Overlay */}
      {isExpanded && (
        <div
          className="absolute h-screen w-screen bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-0 cursor-pointer"
          onClick={handleClose}
        />
      )}

      {/* Panel */}
      <div
        className={`${isExpanded ? "max-w-[90vw]" : "max-w-84"} absolute left-0 top-0 h-full shadow-2xl rounded-e-[1.5vw] px-6 py-14 bg-gray-200 flex gap-20 transition-[max-width] duration-300 ease-in-out min-w-84 overflow-hidden z-10`}>
        {/* Left Section */}
        <div className="flex flex-col gap-6 min-w-70 ps-4">
          <UserInfo imageUrl="https://randomuser.me/api/portraits/women/5.jpg" />

          {!isExpanded && <ViewToggle onToggle={onToggleView} />}

          <Feedback buttonProps={{
            onClick: handleFeedbackClick,
            className: `${isExpanded && "bg-red-300 hover:bg-red-200"}`
          }} />
        </div>

        {/* Right Section */}
        <div className={`transition-all duration-300 ${isExpanded ? "opacity-100" : "opacity-0 w-0"}`}>
          <FeedbackForm onSubmitSuccess={handleClose}/>
        </div>
      </div>

    </div>
  );
};

export default SidePanel;

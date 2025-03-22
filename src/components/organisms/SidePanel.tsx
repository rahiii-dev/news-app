import UserInfo from "../molecules/UserInfo";
import ViewToggle from "../molecules/ViewToggle";
import Feedback from "../molecules/Feedback";

interface SidePanelProps {
  onToggleView: (view: "grid" | "list") => void;
}

const SidePanel = ({ onToggleView }: SidePanelProps) => {
  return (
    <div className="h-full bg-gray-200 px-10 py-14 flex flex-col gap-6">
      <UserInfo imageUrl="https://randomuser.me/api/portraits/women/5.jpg" />
      <ViewToggle onToggle={onToggleView} />
      <Feedback />
    </div>
  );
};

export default SidePanel;

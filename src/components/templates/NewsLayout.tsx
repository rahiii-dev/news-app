import React from "react";
import SidePanel from "../organisms/SidePanel";

interface NewsLayoutProps {
  children: React.ReactNode;
  onToggleView: (view: "grid" | "list") => void;
}

const NewsLayout = ({ children, onToggleView }: NewsLayoutProps) => {
  return (
    <div className="flex h-screen bg-gray-200">
      <aside className="w-90 h-full bg-white shadow-2xl rounded-e-[1.5vw] overflow-hidden">
        <SidePanel onToggleView={onToggleView} />
      </aside>

      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  );
};

export default NewsLayout;

import React from "react";
import SidePanel from "../organisms/SidePanel";

interface NewsLayoutProps {
  children: React.ReactNode;
  onToggleView: (view: "grid" | "list") => void;
}

const NewsLayout = ({ children, onToggleView }: NewsLayoutProps) => {
  return (
    <div className="flex h-screen bg-gray-200">
      <aside className="h-full min-w-84">
        <SidePanel onToggleView={onToggleView} />
      </aside>

      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
};

export default NewsLayout;

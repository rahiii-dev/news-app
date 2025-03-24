import React from "react";
import SidePanel from "../organisms/SidePanel";

interface NewsLayoutProps {
  children: React.ReactNode;
}

const NewsLayout = ({ children }: NewsLayoutProps) => {
  return (
    <div className="flex h-screen bg-gray-200">
      <aside className="h-screen min-w-84">
        <SidePanel/>
      </aside>

      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
};

export default NewsLayout;

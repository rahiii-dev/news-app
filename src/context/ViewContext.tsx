import { createContext, useContext, useState } from "react";
import { ViewType } from "../types/view.interface";


interface ViewContextType {
    view: "grid" | "list";
    toggleView: (view?: ViewType) => void;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export const ViewProvider = ({ children }: { children: React.ReactNode }) => {
    const [view, setView] = useState<ViewType>("grid");

    const toggleView = (view?: ViewType) => {
        if(view){
            setView(view);
        } else {
            setView((prev) => (prev === "grid" ? "list" : "grid"));
        }
    };

    return (
        <ViewContext.Provider value={{ view, toggleView }}>
            {children}
        </ViewContext.Provider>
    );
};

export const useView = () => {
    const context = useContext(ViewContext);
    if (!context) {
        throw new Error("useView must be used within a ViewProvider");
    }
    return context;
};

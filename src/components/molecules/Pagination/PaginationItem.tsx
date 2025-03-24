import React from 'react';

interface PaginationItemProps {
    children: React.ReactNode;
    isActive?: boolean;
    onClick?: () => void;
}

const PaginationItem = ({children, isActive, onClick}: PaginationItemProps) => {
    return (
        <button onClick={onClick} className={`w-10 h-10 cursor-pointer flex items-center justify-center rounded-full text-md font-medium transition-all 
            ${isActive ? "bg-white shadow-md text-gray-900 scale-[1.15] mx-1" : "bg-gray-300 text-gray-700 hover:scale-[1.15]"}`}>
            {children}
        </button>
    );
}

export default PaginationItem;

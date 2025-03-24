import { X } from "lucide-react";
import Text from "../atoms/Text";
import DateDisplay from "./DateDisplay";
import Avatar from "../atoms/Avatar";
import { ViewType } from "../../types/view.interface";

interface NewsItemProps {
    title: string;
    description: string;
    imageUrl: string;
    publishedAt: string;
    onCloseClick?: () => void;
    layout?: ViewType;
}

const NewsItem = ({ title, description, imageUrl, publishedAt, onCloseClick, layout = "grid" }: NewsItemProps) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        onCloseClick?.();
    };

    return (
        <div className={`bg-white rounded-lg shadow-md p-6 ${layout === "grid" ? "h-full max-w-[350px] flex flex-col justify-between" : "w-full flex justify-between align-middle gap-5"} transition-all duration-300 ease-in-out`}>

            <div className={`flex ${layout === "grid" ? "order-1 justify-end" : "items-center order-3" }`}>
                <button onClick={handleClick} className={`${layout === "list" && "p-1"} text-red-400 hover:bg-red-400 hover:text-white transition-colors duration-400 ease-in-out cursor-pointer rounded-full`}>
                    <X size={30} />
                </button>
            </div>

            <div className={`${layout === "list" && "flex flex-col"} flex-grow order-2`}>
                <Text size="lg" className={`font-semibold ${layout === "grid" ? "line-clamp-2" : "line-clamp-1"}`}>{title}</Text>
                <Text size="sm" className={`text-gray-600 ${layout === "grid" ? "line-clamp-2" : "line-clamp-1"}`}>{description}</Text>
                <DateDisplay date={publishedAt} className="my-3" />
            </div>

            <Avatar src={imageUrl} alt={title}
                className={`${layout === "grid" ? "w-full h-40 order-3" : "size-20 order-1"}`}
                imageClass={`${layout === "grid" && "object-left-top"}`}
                rounded={layout === "list"} />
        </div>
    );
};

export default NewsItem;

import { X } from "lucide-react";
import Text from "../atoms/Text";
import DateDisplay from "./DateDisplay";
import Avatar from "../atoms/Avatar";

interface NewsListItemProps {
    title: string;
    description: string;
    imageUrl: string;
    publishedAt: string;
    onCloseClick?: () => void;
}

const NewsListItem = ({ title, description, imageUrl, publishedAt, onCloseClick }: NewsListItemProps) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        onCloseClick?.();
    }
    return (
        <div className="w-full flex justify-between align-middle gap-5 bg-white rounded-lg shadow-sm p-6">
            <Avatar src={imageUrl} alt={title} className="size-20" />
            <div className="w-full">
                <Text size="lg" className="font-semibold flex-none line-clamp-1">{title}</Text>
                <Text size="sm" className="text-gray-600 flex-grow overflow-hidden text-ellipsis line-clamp-1">
                    {description}
                </Text>
                <DateDisplay date={publishedAt} className="my-3" />
            </div>
            <div className="flex items-center">
                <button onClick={handleClick} className="text-red-400 hover:bg-red-400 hover:text-white transition-colors duration-400 ease-in-out p-2 cursor-pointer shadow-sm rounded-full"><span><X /></span></button>
            </div>
        </div>
    );
}

export default NewsListItem;

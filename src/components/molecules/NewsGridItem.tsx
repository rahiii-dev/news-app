import Avatar from "../atoms/Avatar";
import DateDisplay from "./DateDisplay";
import Text from "../atoms/Text";
import { X } from "lucide-react";

interface NewsGridItemProps {
    title: string;
    description: string;
    imageUrl: string;
    publishedAt: string;
    onCloseClick?: () => void;
}

const NewsGridItem = ({ title, description, imageUrl, publishedAt, onCloseClick }: NewsGridItemProps) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        onCloseClick?.();
    }
    return (
        <div className="h-full max-w-[350px] flex flex-col justify-between bg-white rounded-lg shadow-md p-6 pt-1 relative">
            <div className="flex justify-end">
                <button onClick={handleClick} className="text-red-400 hover:bg-red-400 hover:text-white transition-colors duration-400 ease-in-out p-1 cursor-pointer rounded-full">
                    <span><X  size={30}/></span>
                </button>
            </div>
            <div>
                <Text size="lg" className="font-semibold flex-none line-clamp-2">{title}</Text>
                <Text size="sm" className="text-gray-600 flex-grow overflow-hidden text-ellipsis line-clamp-2">
                    {description}
                </Text>
                <DateDisplay date={publishedAt}  className="my-3"/>
            </div>
            <Avatar src={imageUrl} alt={title}
                className="w-full h-40"
                imageClass="object-left-top"
                rounded={false} />
        </div>
    );
};

export default NewsGridItem;

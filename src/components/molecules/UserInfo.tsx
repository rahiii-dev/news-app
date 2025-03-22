import { twMerge } from "tailwind-merge";
import Avatar from "../atoms/Avatar";
import Title from "../atoms/Title";
import Text from "../atoms/Text";

interface UserInfoProps {
  imageUrl: string;
  altText?: string;
  className?: string;
}

const UserInfo = ({ imageUrl, altText = "User", className }: UserInfoProps) => {
  return (
    <div className={twMerge("flex items-center p-4 bg-white rounded-lg shadow-lg gap-3", className)}>
      <Avatar src={imageUrl} alt={altText}/>
      <div>
        <Title level={3}>Hi, Reader</Title>
        <Text size="sm" className="font-medium">Here's your News!</Text>
      </div>
    </div>
  );
};

export default UserInfo;

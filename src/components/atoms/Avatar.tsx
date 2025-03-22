type AvatarProps = {
    src: string;
    alt?: string;
    className?: string;
};

const Avatar = ({ src, alt = "Avatar", className }: AvatarProps) => {
    return <img src={src} alt={alt} className={`w-10 h-10 rounded-full ${className}`} />;
};

export default Avatar
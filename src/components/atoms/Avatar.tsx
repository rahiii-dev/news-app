import { useState } from "react";
import { twMerge } from "tailwind-merge";

type AvatarProps = {
    src?: string;
    alt?: string;
    className?: string;
    imageClass?: string;
    rounded?: boolean;
    initials?: string;
};

const Avatar = ({ src, alt = "Avatar", className, imageClass, rounded = true, initials }: AvatarProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const containerClasses = twMerge(
        `flex items-center justify-center bg-gray-200 text-gray-600 font-semibold shrink-0 overflow-hidden`,
        rounded ? "rounded-full" : "rounded-md",
        className
    );

    const imageClasses = twMerge("w-full h-full object-cover object-center", imageClass);

    return (
        <div
            className={containerClasses}
        >
            {isLoading && !hasError && <div className="animate-pulse w-full h-full bg-gray-300" />}
            
            {hasError || !src ? (
                <span className="text-sm">{initials ?? alt.charAt(0)}</span>
            ) : (
                <img
                    src={src}
                    alt={alt}
                    className={imageClasses}
                    onLoad={() => setIsLoading(false)}
                    onError={() => {
                        setHasError(true);
                        setIsLoading(false);
                    }}
                />
            )}
        </div>
    );
};

export default Avatar;

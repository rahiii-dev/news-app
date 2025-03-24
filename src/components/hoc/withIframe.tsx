import { ComponentType, useState } from 'react';

interface WithIframeProps {
    url: string;
    containerClass?: string;
}

function WithIframe<P extends object>(WrappedComponent: ComponentType<P>) {
    return (props: P & WithIframeProps) => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div className={props.containerClass}>
                {/* Wrapped Component*/}
                <div onClick={() => setIsOpen(true)} className="cursor-pointer h-full w-full">
                    <WrappedComponent {...props} />
                </div>

                {/* Iframe Overlay */}
                {isOpen && (
                    <div
                        className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-50 cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    >
                        <div className="relative rounded-2xl bg-gray-600 w-[80%] h-[80%] p-2">
                            <iframe
                                src={props.url}
                                className="w-full h-full rounded-2xl"
                                title="News Website"
                            />
                        </div>
                    </div>
                )}
            </div>
        );
    };
}

export default WithIframe;

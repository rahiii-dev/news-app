import { twMerge } from "tailwind-merge";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

const Textarea = ({ error, className, ...props }: TextareaProps) => {
  return (
    <div className="flex flex-col gap-1">
      <textarea
        {...props}
        className={twMerge(
          "px-4 py-2 bg-white placeholder:text-gray-400 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-gray-300",
          className
        )}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Textarea;

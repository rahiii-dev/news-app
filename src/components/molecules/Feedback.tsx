import Button from "../atoms/Button";
import Title from "../atoms/Title";

interface FeedbackProps {
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}
const Feedback = ({buttonProps}: FeedbackProps) => {
  return (
    <div className="flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-lg">
      <Title>Have Feedback?</Title>
      <Button {...buttonProps} className={`w-full py-3 ${buttonProps?.className && buttonProps.className}`}>
        We're Listening!
      </Button>
    </div>
  );
};

export default Feedback;

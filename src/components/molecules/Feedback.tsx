import { useState } from "react";
import Button from "../atoms/Buttton";
import Title from "../atoms/Title";

interface FeedbackProps {
  onButtonClick?: () => void;
}
const Feedback = ({onButtonClick}: FeedbackProps) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    onButtonClick?.();
  }

  return (
    <div className="flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-lg">
      <Title>Have Feedback?</Title>
      <Button className={`w-full py-3 ${clicked && "bg-red-300 hover:bg-red-200"}`} onClick={handleClick}>
        We're Listening!
      </Button>
    </div>
  );
};

export default Feedback;

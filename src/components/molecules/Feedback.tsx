import Button from "../atoms/Buttton";
import Title from "../atoms/Title";

const Feedback = () => {
  return (
    <div className="flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-lg">
      <Title>Have Feedback?</Title>
      <Button className="w-full py-3">
        We're Listening!
      </Button>
    </div>
  );
};

export default Feedback;

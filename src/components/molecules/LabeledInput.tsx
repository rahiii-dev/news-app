import Label from "../atoms/Label";
import Input, { InputProps } from "../atoms/Input";

interface LabeledInputProps extends InputProps {
  label: string;
}

const LabeledInput = ({ label, ...props }: LabeledInputProps) => {
  return (
    <div>
      <Label>
        <span className="block mb-2">{label}</span>
        <Input {...props} />
      </Label>
    </div>
  );
};


export default LabeledInput;

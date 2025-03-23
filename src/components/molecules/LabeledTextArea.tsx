import Label from '../atoms/Label';
import Textarea, { TextareaProps } from '../atoms/TextArea';

interface LabeledTextAreaProps extends TextareaProps {
    label: string;
}

const LabeledTextArea = ({ label, ...props }: LabeledTextAreaProps) => {
    return (
        <div>
            <Label>
                <span className="block mb-2">{label}</span>
                <Textarea {...props} />
            </Label>
        </div>
    );
}

export default LabeledTextArea;

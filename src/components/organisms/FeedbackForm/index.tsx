import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FeedbackFormData, feedbackSchema } from "./schema";
import { Search } from "lucide-react";
import Title from "../../atoms/Title";
import Text from "../../atoms/Text";
import LabeledInput from "../../molecules/LabeledInput";
import LabeledTextArea from "../../molecules/LabeledTextArea";
import Button from "../../atoms/Buttton";
import PhoneInput from "../../molecules/PhoneInput";

interface FeedbackFormProps {
    onSubmitSuccess?: () => void;
}

const FeedbackForm = ({ onSubmitSuccess }: FeedbackFormProps) => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
        reset,
    } = useForm<FeedbackFormData>({
        resolver: zodResolver(feedbackSchema),
    });

    const onSubmit = (_: FeedbackFormData) => {
        console.log(_);
        onSubmitSuccess?.();
        reset();
    };

    return (
        <div className="w-max">
            <div className="mb-3">
                <Title level={2}>Thank you so much for taking the time!</Title>
                <Text>Please provide the details below!</Text>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <LabeledInput
                    label="Full Name"
                    placeholder="Enter Your Full Name"
                    className="w-[300px] shadow-sm"
                    {...register("fullName")}
                    error={errors.fullName?.message}
                />

                <LabeledTextArea
                    label="Address"
                    placeholder="Enter your full Postal Address"
                    rows={3}
                    {...register("address")}
                    className="shadow-sm"
                />

                <div className="flex gap-5">
                    <LabeledInput
                        label="Country"
                        placeholder="Enter Your Country Name"
                        className="w-[300px] shadow-sm"
                        endIcon={Search}
                        {...register("country")}
                        error={errors.country?.message}
                    />
                    <LabeledInput
                        label="State"
                        placeholder="Enter Your State Name"
                        className="w-[300px] shadow-sm"
                        endIcon={Search}
                        {...register("state")}
                        error={errors.state?.message}
                    />
                </div>

                <div className="flex gap-5">
                    <LabeledInput
                        label="Email Id"
                        placeholder="Enter Your Email ID"
                        className="w-[300px] shadow-sm"
                        {...register("email")}
                        error={errors.email?.message}
                    />
                    <PhoneInput
                        label="Mobile Number"
                        inputClass="w-[300px] shadow-sm"
                        inputPlaceHolder="Enter Your Mobile Number"
                        value={watch("mobile")}
                        onChange={(value) => setValue("mobile", value)}
                    />
                </div>

                <LabeledTextArea
                    label="Feedback"
                    placeholder="Enter Your Feedback"
                    rows={3}
                    className="shadow-sm"
                    {...register("feedback")}
                    error={errors.feedback?.message}
                />

                <div className="flex justify-end">
                    <Button type="submit" className="text-white bg-[#5CC8A1] py-1.5 px-6 hover:bg-[#5CC8A1] hover:opacity-80 shadow-none before:hidden">
                        Submit Feedback
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default FeedbackForm;

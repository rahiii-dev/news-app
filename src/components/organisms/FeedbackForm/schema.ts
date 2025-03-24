import { z } from "zod";

export const feedbackSchema = z.object({
  fullName: z.string().min(3, "Full Name must be at least 3 characters"),
  country: z.string().min(2, "Country is required"),
  state: z.string().min(2, "State is required"),
  email: z.string().email("Please enter a valid e-mail"),
  mobile: z.object({
    countryCode: z.string().min(1, "Country code is required"),
    number: z.string().optional().refine((val) => !val || /^\d+$/.test(val), {
      message: "Mobile number must contain only digits",
    }),
  }),
  address: z.string().optional(),
  feedback: z.string().min(10, "Feedback must be at least 10 characters"),
});


export type FeedbackFormData = z.infer<typeof feedbackSchema>;

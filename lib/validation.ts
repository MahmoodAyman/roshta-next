import { z } from "zod";
export const UserFormValidation = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .refine(
      (phone) => /^01[0125][0-9]{8}$/.test(phone),
      "invalid phone number"
    ),
});

 

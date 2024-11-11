import { z } from "zod";
export const UserFormValidation = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, { message: "Phone must be at least 5 numbers" }),
});

import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "email-required-message" })
    .email({ message: "invalid-email-message" }),
  password: z
    .string()
    .nonempty({ message: "password-required-message" })
    .min(6, "invalid-password-message"),
});

export type ILoginForm = z.infer<typeof LoginSchema>;

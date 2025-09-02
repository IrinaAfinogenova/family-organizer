import { z } from "zod";

export const RegisterSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "name-required-message" })
    .min(3, "invalid-name-message"),
  email: z
    .string()
    .nonempty({ message: "email-required-message" })
    .email({ message: "invalid-email-message" }),
  password: z
    .string()
    .nonempty({ message: "password-required-message" })
    .min(6, "invalid-password-message"),
});

export type IRegisterForm = z.infer<typeof RegisterSchema>;

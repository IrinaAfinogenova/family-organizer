import { z } from "zod";

const repeatValues = ["once", "daily", "monthly"] as const;
const RepeatEnum = z.enum(repeatValues);

export const CreateTaskSchema = z.object({
  title: z
    .string()
    .min(3, "invalid-title-message"),
  note: z.string().optional(),
  repeat: RepeatEnum,
  date: z.string().length(10, "invalid-date-message"),
});

export type ICreateTaskForm = z.infer<typeof CreateTaskSchema>;
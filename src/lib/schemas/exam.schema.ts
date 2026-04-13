import z from "zod";

export const ExamSchema = z.object({
  examId: z.string(),
  answers: z.array(
    z.object({
      questionId: z.string(),
      answerId: z.string(),
    }),
  ),
  startedAt: z.string(), // ISO string format
});

export type AnswersFields = z.infer<typeof ExamSchema>;

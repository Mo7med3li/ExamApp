import { AnswersFields } from "@/lib/schemas/exam.schema";
import { useMutation } from "@tanstack/react-query";
import { checkQuestionAction } from "../_actions/exam.action";

export default function useCheckQuestion() {
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (fields: AnswersFields) => {
      const payload = await checkQuestionAction(fields);
      if ("code" in payload) throw new Error(payload.message);
      return payload;
    },
  });
  return { isPending, error, checkQuestions: mutate };
}

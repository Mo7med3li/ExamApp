import { AnswersFields } from "@/lib/schemas/exam.schema";
import { useMutation } from "@tanstack/react-query";
import { submitExamAction } from "../_actions/exam.action";

export default function useSubmitExam() {
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (fields: AnswersFields) => {
      const payload = await submitExamAction(fields);

      console.log("Payload:2", payload);
      return payload;
    },
  });
  return { isPending, error, submitExam: mutate };
}

import { AnswersFields } from "@/lib/schemas/exam.schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { submitExamAction } from "../_actions/exam.action";
import { toast } from "sonner";

export default function useSubmitExam() {
  const queryClient = useQueryClient();
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (fields: AnswersFields) => {
      const payload = await submitExamAction(fields);
      return payload;
    },
    onSuccess: () => {
      toast.success("Exam submitted successfully");
      queryClient.invalidateQueries({ queryKey: ["user-submissions"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { isPending, error, submitExam: mutate };
}

import { useQuery } from "@tanstack/react-query";

export default function useQuestion(id: string) {
  // Queries
  const { isLoading, error, data } = useQuery({
    queryKey: ["exams"],
    queryFn: async () => {
      const respone = await fetch(`http://localhost:3000/api/questions/${id}`);
      const payload: APIResponse<{ questions: QuestionResponse[] }> =
        await respone.json();
      if ("code" in payload) {
        throw new Error(payload.message);
      }
      return payload;
    },
  });
  return { isLoading, error, payload: data };
}

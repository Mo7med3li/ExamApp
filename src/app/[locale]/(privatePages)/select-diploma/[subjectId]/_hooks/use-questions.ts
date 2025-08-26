import { useQuery } from "@tanstack/react-query";

export default function useQuestion(id: string) {
  // Queries
  const { isLoading, error, data } = useQuery({
    queryKey: ["exams"],
    queryFn: async () => {
      const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
      const respone = await fetch(`${baseUrl}/api/questions/${id}`);
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

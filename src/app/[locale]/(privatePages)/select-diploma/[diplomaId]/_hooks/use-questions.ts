import { useQuery } from "@tanstack/react-query";

export default function useQuestion(id: string) {
  // Queries
  const { isLoading, error, data } = useQuery({
    queryKey: ["Questions", id],
    queryFn: async () => {
      const response = await fetch(`/api/questions/${id}`);
      const payload: APIResponse<QuestionResponse> = await response.json();
      if (!payload.status) {
        throw new Error(payload.message);
      }
      return payload;
    },
  });
  return { isLoading, error, payload: data };
}

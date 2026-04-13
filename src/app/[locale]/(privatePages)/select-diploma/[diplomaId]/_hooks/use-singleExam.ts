import { ExamResponse } from "@/lib/types/privatePages";
import { useQuery } from "@tanstack/react-query";
export default function useSingleExam(id: string) {
  // navigation

  // Queries
  const { isLoading, error, data } = useQuery({
    queryKey: ["exams"],
    queryFn: async () => {
      try {
        const response = await fetch(`/api/get-exams/${id}`);
        const payload: APIResponse<ExamResponse> = await response.json();
        if (!payload.status) {
          throw new Error(payload.message);
        }
        return payload;
      } catch (error) {
        throw new Error("Failed to fetch exam :" + error);
      }
    },
  });
  return { isLoading, error, payload: data };
}

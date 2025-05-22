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
    if ("code" in payload) {
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
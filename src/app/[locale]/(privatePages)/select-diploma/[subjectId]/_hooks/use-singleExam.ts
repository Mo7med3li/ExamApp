import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function useSingleExam(id: string) {
  // navigation

  // Queries
  const { isLoading, error, data } = useQuery({
    queryKey: ["exams"],
    queryFn: async () => {
      const respone = await fetch(`http://localhost:3000/api/get-exams/${id}`);
      const payload: APIResponse<ExamResponse> = await respone.json();
      if ("code" in payload) {
        throw new Error(payload.message);
      }
      return payload;
    },
  });
  return { isLoading, error, payload: data };
}

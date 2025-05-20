"use client";
import { useQuery } from "@tanstack/react-query";

export function useAllExams() {
  const { isPending, error, data } = useQuery({
    queryKey: ["AllExams"],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/api/get-allExams`);
      const payload: APIResponse<ExamResponse> = await response.json();
      if ("code" in payload) {
        throw new Error(payload.message);
      }

      return payload;
    },
  });
  return { isPending, error, Exams: data };
}

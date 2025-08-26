"use client";
import { useQuery } from "@tanstack/react-query";

export function useAllExams() {
  const { isPending, error, data } = useQuery({
    queryKey: ["AllExams"],
    queryFn: async () => {
      const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
      const response = await fetch(`${baseUrl}/api/get-allExams`);
      const payload: APIResponse<ExamResponse> = await response.json();
      if ("code" in payload) {
        throw new Error(payload.message);
      }

      return payload;
    },
  });
  return { isPending, error, Exams: data };
}

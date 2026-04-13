"use client";
import { ExamResponse } from "@/lib/types/privatePages";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export function useAllExams() {
  const searchParams = useSearchParams();
  console.log("searchParams", searchParams.get("page"));
  const { isPending, error, data } = useQuery({
    queryKey: ["AllExams", searchParams.get("page")],
    queryFn: async () => {
      const response = await fetch(
        `/api/get-allExams?page=${searchParams.get("page") || 1}`,
      );
      const payload: APIResponse<ExamResponse> = await response.json();
      if (!payload.status) {
        throw new Error("Failed to fetch exams");
      }

      return payload;
    },
  });
  return { isPending, error, Exams: data };
}

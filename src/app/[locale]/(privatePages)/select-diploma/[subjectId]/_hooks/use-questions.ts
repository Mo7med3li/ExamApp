import { useQuery } from "@tanstack/react-query";

import { useSearchParams } from "next/navigation";

export default function useQuestion() {
  // navigation
  const searchParam = useSearchParams();

  // Queries
  const { isLoading, error, data } = useQuery({
    queryKey: ["exams"],
    queryFn: async () => {
      const respone = await fetch(
        `http://localhost:3000/api/questions?${searchParam.toString()}`
      );
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

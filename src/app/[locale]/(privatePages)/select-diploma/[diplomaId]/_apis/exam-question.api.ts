// import getAuthHeader from "@/lib/utils/get-authHeader";

import { QuestionResponse } from "@/lib/types/privatePages";
import getAuthHeader from "@/lib/utils/get-authHeader";

export async function getQuestions(id: string) {
  const response = await fetch(`${process.env.API}/questions?exam=${id}`, {
    headers: {
      ...(await getAuthHeader()),
    },
  });

  const payload: APIResponse<QuestionResponse> = await response.json();

  if (!payload.status) {
    throw new Error(payload.message);
  }
  return payload;
}

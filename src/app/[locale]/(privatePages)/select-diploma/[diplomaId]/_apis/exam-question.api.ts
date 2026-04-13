// import getAuthHeader from "@/lib/utils/get-authHeader";

import getAuthHeader from "@/lib/utils/get-authHeader";

export async function getQuestions(id: string) {
  const response = await fetch(`${process.env.API}/questions?exam=${id}`, {
    headers: {
      ...(await getAuthHeader()),
    },
  });

  const payload: APIResponse<QuestionResponse> = await response.json();

  if ("code" in payload) {
    throw new Error(payload.message);
  }
  return payload;
}

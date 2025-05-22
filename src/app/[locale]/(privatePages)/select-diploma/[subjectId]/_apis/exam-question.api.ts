// import getAuthHeader from "@/lib/utils/get-authHeader";

import getAuthHeader from "@/lib/utils/get-authHeader";

export async function getQuestions(id: string) {
  const respone = await fetch(`${process.env.API}/questions?exam=${id}`, {
    headers: {
      ...(await getAuthHeader()),
    },
  });

  const payload: APIResponse<{ questions: QuestionResponse[] }> =
    await respone.json();

  if ("code" in payload) {
    throw new Error(payload.message);
  }
  return payload;
}

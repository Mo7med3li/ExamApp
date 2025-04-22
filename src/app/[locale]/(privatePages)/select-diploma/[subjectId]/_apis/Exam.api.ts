import getAuthHeader from "@/lib/utils/get-authHeader";
export async function fetchExams(examId: string) {
  const respone = await fetch(`${process.env.API}/exams?subject=${examId}`, {
    headers: {
      ...(await getAuthHeader()),
    },
  });
  const payload: APIResponse<ExamResponse> = await respone.json();
  if ("code" in payload) {
    throw new Error(payload.message);
  }

  return payload;
}

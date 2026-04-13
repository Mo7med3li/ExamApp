import getAuthHeader from "@/lib/utils/get-authHeader";
export async function fetchExams(diplomaId: string, page: number = 1) {
  const token = (await getAuthHeader()).token; // Replace with your actual token
  const response = await fetch(
    `${process.env.API}/exams?diplomaId=${diplomaId}&page=${page}&limit=5`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const payload: APIResponse<ExamResponse> = await response.json();

  if (!payload.status) {
    throw new Error(`Failed to fetch exams: ${payload.message}`);
  }

  return payload;
}

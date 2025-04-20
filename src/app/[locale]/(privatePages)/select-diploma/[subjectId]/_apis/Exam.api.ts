export default async function getExams({ id }: { id: string }) {
  const respone = await fetch(`http://localhost:3000/api/get-exams/${id}`);
  const payload: APIResponse<ExamRespone> = await respone.json();
  if ("code" in payload) {
    throw new Error(payload.message);
  }
  return payload;
}

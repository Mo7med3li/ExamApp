export default async function getSubjects() {
  const respone = await fetch(`http://localhost:3000/api/get-subjects`);
  const payload: APIResponse<SubjectsResponse> = await respone.json();
  if ("code" in payload) {
    throw new Error(payload.message);
  }
  return payload;
}

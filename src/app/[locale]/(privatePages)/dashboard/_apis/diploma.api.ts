export async function fetchSubjects() {
  const response = await fetch(`/api/get-diplomas`);
  if (!response.ok) {
    throw new Error("Failed to fetch diplomas");
  }
  const payload = (await response.json()) as APIResponse<SubjectsResponse>;

  if (!payload.status) {
    throw new Error(payload.message);
  }

  return payload;
}

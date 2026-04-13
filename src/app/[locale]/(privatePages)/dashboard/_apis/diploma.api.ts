import { SubjectsResponse } from "@/lib/types/privatePages";

export async function fetchSubjects() {
  const response = await fetch(`/api/get-diplomas`);
  const payload = (await response.json()) as APIResponse<SubjectsResponse>;

  if (!payload.status) {
    throw new Error(payload.message);
  }

  return payload;
}

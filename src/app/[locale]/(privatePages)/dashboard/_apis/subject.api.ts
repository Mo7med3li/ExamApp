import getAuthHeader from "@/lib/utils/get-authHeader";

export async function fetchSubjects() {
  const response = await fetch(`${process.env.API}/subjects`, {
    headers: {
      ...(await getAuthHeader()),
    },
  });

  const payload: APIResponse<SubjectsResponse> = await response.json();

  if ("code" in payload) {
    throw new Error(payload.message);
  }

  return payload;
}

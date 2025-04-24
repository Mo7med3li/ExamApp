import getAuthHeader from "@/lib/utils/get-authHeader";

export async function fetchSubjects() {
  const respone = await fetch(`${process.env.API}/subjects`, {
    headers: {
      ...(await getAuthHeader()),
    },
  });
  const payload: APIResponse<SubjectsResponse> = await respone.json();
  if ("code" in payload) {
    throw new Error(payload.message);
  }

  return payload;
}

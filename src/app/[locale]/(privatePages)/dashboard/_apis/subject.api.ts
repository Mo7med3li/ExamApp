import { JSON_HEADER } from "@/lib/Constants/api.constant";
import getAuthHeader from "@/lib/utils/get-authHeader";
import getToken from "@/lib/utils/get-authHeader";

// export default async function getSubjects() {
//   const respone = await fetch(`http://localhost:3000/api/get-subjects`);
//   const payload: APIResponse<SubjectsResponse> = await respone.json();
//   if ("code" in payload) {
//     throw new Error(payload.message);
//   }
//   return payload;
// }

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

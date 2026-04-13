"use server";
import { JSON_HEADER } from "@/lib/Constants/api.constant";
import { UpdateProfileFields } from "@/lib/schemas/update-profile.schema";
import getAuthHeader from "@/lib/utils/get-authHeader";

export async function updateAccount(values: UpdateProfileFields) {
  // Token
  const token = (await getAuthHeader()).token;
  const response = await fetch(`${process.env.API}/users/profile`, {
    method: "PATCH",
    headers: {
      authorization: `Bearer ${token}`,
      ...JSON_HEADER,
    },
    body: JSON.stringify(values),
  });
  const payload: APIResponse<AppUser> = await response.json();
  if (!payload.status) {
    console.log(payload);
    throw new Error(payload.message);
  }
  return payload;
}

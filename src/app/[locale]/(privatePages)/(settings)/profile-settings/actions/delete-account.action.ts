"use server";
import { JSON_HEADER } from "@/lib/Constants/api.constant";

import getAuthHeader from "@/lib/utils/get-authHeader";

export async function deleteAccount() {
  // Token
  const token = (await getAuthHeader()).token;

  const response = await fetch(`${process.env.API}/users/account`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
      ...JSON_HEADER,
    },
  });
  const payload: APIResponse<AppUser> = await response.json();
  if (!payload.status) {
    throw new Error(payload.message);
  }
}

"use server";
import { JSON_HEADER } from "@/lib/Constants/api.constant";

import getAuthHeader from "@/lib/utils/get-authHeader";

export async function deleteAccount() {
  // Token
  const token = (await getAuthHeader()).token;

  const response = await fetch(`${process.env.API}/auth/deleteMe`, {
    method: "DELETE",
    headers: {
      token,
      ...JSON_HEADER,
    },
  });
  const payload: APIResponse<AppUser> = await response.json();
  if ("code" in payload) {
    throw new Error(payload.message);
  }
}

"use server";

import { JSON_HEADER } from "@/lib/Constants/api.constant";
import { ChangePasswordField } from "@/lib/schemas/auth.schema";
import getAuthHeader from "@/lib/utils/get-authHeader";

export async function changePasswordSubmit(values: ChangePasswordField) {
  // Token
  const token = (await getAuthHeader()).token;

  const response = await fetch(`${process.env.API}/users/change-password`, {
    method: "POST",
    headers: {
      ...JSON_HEADER,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(values),
  });

  const payload = await response.json();

  if (!payload.status) {
    throw new Error(payload.message);
  }

  return payload;
}

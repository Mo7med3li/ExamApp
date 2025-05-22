"use server";

import { JSON_HEADER } from "@/lib/Constants/api.constant";
import { ResetPasswordField } from "@/lib/schemas/auth.schema";

export async function resetPasswordSubmit(values: ResetPasswordField) {
  const respone = await fetch(`${process.env.API}/auth/resetPassword`, {
    method: "PUT",
    body: JSON.stringify(values),
    headers: { ...JSON_HEADER },
  });

  const payload: APIResponse<ResetPasswordRespone> = await respone.json();

  if ("code" in payload) {
    throw new Error(payload.message);
  }

  return payload;
}

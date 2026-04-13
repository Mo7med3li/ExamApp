"use server";

import { JSON_HEADER } from "@/lib/Constants/api.constant";
import { ResetPasswordField } from "@/lib/schemas/auth.schema";

export async function resetPasswordSubmit(values: ResetPasswordField) {
  const response = await fetch(`${process.env.API}/auth/reset-password`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: { ...JSON_HEADER },
  });

  const payload: APIResponse<ResetPasswordResponse> = await response.json();

  if (!payload.status) {
    console.log(payload);
    throw new Error(payload.message);
  }

  return payload;
}

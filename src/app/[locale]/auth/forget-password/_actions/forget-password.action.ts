"use server";

import { JSON_HEADER } from "@/lib/Constants/api.constant";
import { ForgetPasswordField } from "@/lib/schemas/auth.schema";

export async function submitForgetPassword(values: ForgetPasswordField) {
  const response = await fetch(`${process.env.API}/auth/forgot-password`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: { ...JSON_HEADER },
  });
  const payload: APIResponse<ForgetPasswordResponse> = await response.json();
  if (!payload.status) {
    throw new Error(payload.message);
  }
}

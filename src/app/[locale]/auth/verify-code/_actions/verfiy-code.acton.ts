"use server";

import { JSON_HEADER } from "@/lib/Constants/api.constant";
import { VerifyCodeField } from "@/lib/schemas/auth.schema";

export async function submitVerifyCode(values: VerifyCodeField) {
  const response = await fetch(`${process.env.API}/auth/verifyResetCode`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: { ...JSON_HEADER },
  });

  const payload: APIResponse<verifyCodeResponse> = await response.json();

  if ("code" in payload) {
    throw new Error(payload.message);
  }

  return payload;
}

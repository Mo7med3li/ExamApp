"use server";

import { JSON_HEADER } from "@/lib/Constants/api.constant";
import { ForgetPasswordField } from "@/lib/schemas/auth.schema";

export async function submitForgetPassword(values: ForgetPasswordField) {
  const reponse = await fetch(`${process.env.API}/auth/forgotPassword`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: { ...JSON_HEADER },
  });
  const payload: APIResponse<ForgetPasswordRespone> = await reponse.json();
  if ("code" in payload) {
    throw new Error(payload.message);
  }
}

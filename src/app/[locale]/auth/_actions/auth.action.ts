"use server";

import { JSON_HEADER } from "@/lib/Constants/api.constant";
import {
  ForgetPasswordField,
  RegisterFields,
  ResetPasswordField,
  VerifyCodeField,
} from "@/lib/schemas/auth.schema";
import { redirect } from "next/navigation";

export async function submitRegister(RegisterFields: RegisterFields) {
  // return paylod;
  const response = await fetch(`${process.env.API!}/auth/signup`, {
    method: "POST",
    body: JSON.stringify(RegisterFields),
    headers: {
      ...JSON_HEADER,
    },
  });
  const payload: APIResponse<SignupResponse> = await response.json();

  if ("code" in payload) {
    const errorMessage = payload.message || "Something went wrong.";
    throw new Error(errorMessage);
  }
  return payload;
}

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

}

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

  redirect("/auth/login");
}

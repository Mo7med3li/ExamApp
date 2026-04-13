"use server";

import { JSON_HEADER } from "@/lib/Constants/api.constant";
import { ConfirmEmailVerificationField } from "@/lib/schemas/auth.schema";

type ConfirmEmailVerificationResponse = {
  message: string;
};

export type ConfirmEmailVerificationResult =
  | { success: true; payload: ConfirmEmailVerificationResponse }
  | { success: false; message: string };

export async function submitConfirmEmailVerification(
  fields: ConfirmEmailVerificationField,
) {
  const baseUrl = process.env.API ?? "https://exam.elevateegy.com/api/v1";
  const response = await fetch(`${baseUrl}/auth/confirm-email-verification`, {
    method: "POST",
    body: JSON.stringify(fields),
    headers: {
      ...JSON_HEADER,
    },
  });

  const payload: APIResponse<ConfirmEmailVerificationResponse> =
    await response.json();
  if (!payload.status) {
    throw new Error(payload.message);
  }
  return payload;
}

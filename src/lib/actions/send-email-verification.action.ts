"use server";

import { JSON_HEADER } from "@/lib/Constants/api.constant";
import { SendEmailVerificationField } from "@/lib/schemas/auth.schema";

type SendEmailVerificationResponse = {
  message: string;
};

export type SendEmailVerificationResult =
  | { success: true; payload: SendEmailVerificationResponse }
  | { success: false; message: string };

export async function submitSendEmailVerification(
  fields: SendEmailVerificationField,
) {
  const baseUrl = process.env.API ?? "https://exam.elevateegy.com/api/v1";
  const response = await fetch(`${baseUrl}/auth/send-email-verification`, {
    method: "POST",
    body: JSON.stringify(fields),
    headers: {
      ...JSON_HEADER,
    },
  });

  const payload: APIResponse<SendEmailVerificationField> =
    await response.json();
  if (!payload.status) {
    throw new Error(payload.message);
  }

  return payload;
}

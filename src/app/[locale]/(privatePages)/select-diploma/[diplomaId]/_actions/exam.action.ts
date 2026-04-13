"use server";

import { JSON_HEADER } from "@/lib/Constants/api.constant";
import { AnswersFields } from "@/lib/schemas/exam.schema";
import getAuthHeader from "@/lib/utils/get-authHeader";
import { CheckResponse } from "@/lib/types/privatePages";

export async function submitExamAction(
  fields: AnswersFields,
): Promise<CheckResponse> {
  const token = await getAuthHeader();
  const response = await fetch(`${process.env.API}/submissions`, {
    method: "POST",
    body: JSON.stringify(fields),
    headers: {
      Authorization: `Bearer ${token.token}`,
      ...JSON_HEADER,
    },
  });

  const payload: APIResponse<CheckResponse> = await response.json();

  // Handle API response format
  if (!payload.status) {
    throw new Error(payload.message);
  }
  console.log("Payload:", payload);
  return payload;
}

"use server";

import { JSON_HEADER } from "@/lib/Constants/api.constant";
import { AnswersFields } from "@/lib/schemas/exam.schema";
import getAuthHeader from "@/lib/utils/get-authHeader";

export async function checkQuestionAction(fields: AnswersFields) {
  const respone = await fetch(`${process.env.API}/questions/check`, {
    method: "POST",
    body: JSON.stringify(fields),
    headers: {
      ...(await getAuthHeader()),
      ...JSON_HEADER,
    },
  });
  const payload: APIResponse<CheckResponse> = await respone.json();
  return payload;
}

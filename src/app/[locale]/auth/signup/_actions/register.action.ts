"use server";

import { JSON_HEADER } from "@/lib/Constants/api.constant";
import { RegisterFields } from "@/lib/schemas/auth.schema";

export async function submitRegister(RegisterFields: RegisterFields) {
  // return payload;
  const response = await fetch(
    "https://exam.elevateegy.com/api/v1/auth/signup",
    {
      method: "POST",
      body: JSON.stringify(RegisterFields),
      headers: {
        ...JSON_HEADER,
      },
    }
  );

  const payload: APIResponse<SignupResponse> = await response.json();

  if ("code" in payload) {
    const errorMessage = payload.message || "Something went wrong.";
    throw new Error(errorMessage);
  }

  return payload;
}

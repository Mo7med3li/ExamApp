"use server";

import { JSON_HEADER } from "@/lib/Constants/api.constant";
import { RegisterFields } from "@/lib/schemas/auth.schema";

export async function submitRegister(registerFields: RegisterFields) {
  const baseUrl = process.env.API ?? "https://exam.elevateegy.com/api/v1";
  const response = await fetch(`${baseUrl}/auth/register`, {
    method: "POST",
    body: JSON.stringify(registerFields),
    headers: {
      ...JSON_HEADER,
    },
  });

  // Try to parse JSON safely
  const payload = await response.json();
  if (!payload.status) {
    console.log("register payload", payload);
    throw new Error(payload.message);
  }

  return payload;
}

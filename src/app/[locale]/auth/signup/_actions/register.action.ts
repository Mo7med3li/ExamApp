"use server";

import { JSON_HEADER } from "@/lib/Constants/api.constant";
import { RegisterFields } from "@/lib/schemas/auth.schema";
export type RegisterResult =
  | { success: true; payload: SignupResponse }
  | { success: false; message: string };

export async function submitRegister(
  registerFields: RegisterFields
): Promise<RegisterResult> {
  try {
    const baseUrl = process.env.API ?? "https://exam.elevateegy.com/api/v1";
    const response = await fetch(`${baseUrl}/auth/signup`, {
      method: "POST",
      body: JSON.stringify(registerFields),
      headers: {
        ...JSON_HEADER,
      },
    });

    // Try to parse JSON safely
    const contentType = response.headers.get("content-type") || "";
    const isJson = contentType.includes("application/json");
    const data = isJson ? await response.json() : await response.text();

    if (!response.ok) {
      let message: string | undefined;
      if (
        isJson &&
        typeof data === "object" &&
        data !== null &&
        "message" in data
      ) {
        const d = data as Record<string, unknown>;
        message = typeof d.message === "string" ? d.message : undefined;
      }
      if (!message) {
        message = typeof data === "string" ? data : "Registration failed.";
      }
      // Do not throw on the server. Return a structured error instead.
      return { success: false, message } as const;
    }
    const payload = data as unknown;
    if (
      payload &&
      typeof payload === "object" &&
      "code" in (payload as Record<string, unknown>)
    ) {
      const p = payload as Record<string, unknown>;
      const message =
        typeof p.message === "string" ? p.message : "Something went wrong.";
      return { success: false, message } as const;
    }
    // Successful path
    return { success: true, payload: data as SignupResponse } as const;
  } catch (err: unknown) {
    const message =
      err instanceof Error
        ? err.message
        : "Unexpected error during registration.";
    // Avoid throwing in server action to prevent Server Components crash in prod
    return { success: false, message } as const;
  }
}

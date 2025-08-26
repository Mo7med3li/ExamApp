import "server-only";
import { decode, JWT } from "next-auth/jwt";
import { cookies } from "next/headers";

export default async function getAuthHeader() {
  // server component /server Action
  const cookieStore = cookies();
  
  // Try different cookie names based on environment
  const possibleCookieNames = [
    "__Secure-next-auth.session-token", // Production HTTPS
    "__Host-next-auth.session-token",   // Production with additional security
    "next-auth.session-token"           // Development HTTP
  ];
  
  let authCookie: string | undefined;
  for (const cookieName of possibleCookieNames) {
    authCookie = cookieStore.get(cookieName)?.value;
    if (authCookie) break;
  }
  
  let jwt: JWT | null = null;
  try {
    if (authCookie) {
      jwt = await decode({
        secret: process.env.NEXTAUTH_SECRET!,
        token: authCookie,
      });
    }
  } catch (error) {
    console.error("JWT decode error:", error);
  }

  return {
    token: jwt?.token || "",
  };
}

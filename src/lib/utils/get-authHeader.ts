import "server-only";
import { decode, JWT } from "next-auth/jwt";
import { cookies } from "next/headers";

export default async function getAuthHeader() {
  // server component /server Action
  const authCookie = cookies().get("next-auth.session-token")?.value;
  let jwt: JWT | null = null;
  try {
    jwt = await decode({
      secret: process.env.NEXTAUTH_SECRET!,
      token: authCookie,
    });
  } catch (error) {}
  console.log("token", jwt?.token);

  return {
    token: jwt?.token || "",
  };
}

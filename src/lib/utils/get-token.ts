import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";
import React from "react";

export default async function getToken() {
  // server component /server Action
  const authCookie = cookies().get("next-auth.seddion-token")?.value;
  const token = await decode({
    secret: process.env.NEXTAUTH_SECRET!,
    token: authCookie,
  });
  return token?.token;
}

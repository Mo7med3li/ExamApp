import { JSON_HEADER } from "@/lib/Constants/api.constant";
import { decode, getToken } from "next-auth/jwt";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = await getToken({ req });

  const respone = await fetch(`${process.env.API}/subjects`, {
    headers: {
      token: token?.token || "",
      ...JSON_HEADER,
    },
  });
  const payload: APIResponse<SubjectsResponse> = await respone.json();
  if ("code" in payload) {
    throw new Error(payload.message);
  }

  return NextResponse.json(payload);
}

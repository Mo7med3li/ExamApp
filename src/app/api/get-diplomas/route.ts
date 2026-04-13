import { JSON_HEADER } from "@/lib/Constants/api.constant";
import { SubjectsResponse } from "@/lib/types/privatePages";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = await getToken({ req });

  const response = await fetch(`${process.env.API}/diplomas`, {
    headers: {
      Authorization: `Bearer ${token?.token || ""}`,
      ...JSON_HEADER,
    },
  });
  const payload: APIResponse<SubjectsResponse> = await response.json();
  if (!payload.status) {
    throw new Error(payload.message);
  }
  console.log(payload);

  return NextResponse.json(payload);
}

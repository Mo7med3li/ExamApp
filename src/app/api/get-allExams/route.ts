import { JSON_HEADER } from "@/lib/Constants/api.constant";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = await getToken({ req });
  if (!token?.token) {
    return NextResponse.json(
      { message: "Unauthorized: token not provided" },
      { status: 401 }
    );
  }
  const respone = await fetch(`${process.env.API}/exams`, {
    headers: {
      token: token?.token,
      ...JSON_HEADER,
    },
  });
  const payload: APIResponse<ExamResponse> = await respone.json();
  if ("code" in payload) {
    throw new Error(payload.message);
  }

  return NextResponse.json(payload);
}

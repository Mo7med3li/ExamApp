import { JSON_HEADER } from "@/lib/Constants/api.constant";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const token = await getToken({ req });

  const respone = await fetch(`${process.env.API}/exams?subject=${params.id}`, {
    headers: {
      token: token?.token || "",
      ...JSON_HEADER,
    },
  });
  const payload: APIResponse<ExamResponse> = await respone.json();
  if ("code" in payload) {
    throw new Error(payload.message);
  }

  return NextResponse.json(payload);
}

import { JSON_HEADER } from "@/lib/Constants/api.constant";
import { ExamResponse } from "@/lib/types/privatePages";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const token = await getToken({ req });

  const response = await fetch(
    `${process.env.API}/exams?subject=${params.id}`,
    {
      headers: {
        token: token?.token || "",
        ...JSON_HEADER,
      },
    },
  );
  const payload: APIResponse<ExamResponse> = await response.json();
  if (!payload.status) {
    throw new Error(payload.message);
  }

  return NextResponse.json(payload);
}

import { JSON_HEADER } from "@/lib/Constants/api.constant";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const token = await getToken({ req });
  const response = await fetch(
    `https://exam-app.elevate-bootcamp.cloud/api/questions/exam/${params.id}`,
    {
      headers: {
        Authorization: `Bearer ${token?.token || ""}`,
        ...JSON_HEADER,
      },
    },
  );
  const payload: APIResponse<QuestionResponse> = await response.json();

  return NextResponse.json(payload);
}

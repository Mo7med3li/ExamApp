import { JSON_HEADER } from "@/lib/Constants/api.constant";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const token = await getToken({ req });
  const response = await fetch(
    `https://exam.elevateegy.com/api/v1/questions?exam=${params.id}`,
    {
      headers: {
        token: token?.token || "",
        ...JSON_HEADER,
      },
    }
  );
  const payload: APIResponse<{ questions: QuestionResponse[] }> =
    await response.json();

  return NextResponse.json(payload);
}

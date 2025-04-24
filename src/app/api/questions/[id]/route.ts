import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const token = await getToken({ req });
  const respone = await fetch(
    `${process.env.API}/questions?exam=${params.id}`,
    {
      headers: {
        token: token?.token || "",
      },
    }
  );
  const payload: APIResponse<{ questions: QuestionResponse[] }> =
    await respone.json();

  return NextResponse.json(payload);
}

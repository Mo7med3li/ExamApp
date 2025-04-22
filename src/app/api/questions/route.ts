import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParam = req.nextUrl.searchParams;
  console.log("search", searchParam);

  const token = await getToken({ req });
  const respone = await fetch(`${process.env.API}/questions?${searchParam}`, {
    headers: {
      token: token?.token || "",
    },
  });
  const payload: APIResponse<{ questions: QuestionResponse[] }> =
    await respone.json();

  return NextResponse.json(payload);
}

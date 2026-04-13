import { JSON_HEADER } from "@/lib/Constants/api.constant";
import { ExamSubmissionsResponse } from "@/lib/types/privatePages";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = await getToken({ req });
  if (!token?.token) {
    return NextResponse.json(
      { message: "Unauthorized: token not provided" },
      { status: 401 },
    );
  }
  const { searchParams } = new URL(req.url);

  const params = searchParams.size
    ? (Object.fromEntries(searchParams.entries()) as unknown as {
        page?: number;
      })
    : undefined;
  const page = params?.page || 1;

  const response = await fetch(
    `${process.env.API}/submissions?page=${page}&limit=4`,
    {
      headers: {
        Authorization: `Bearer ${token?.token}`,
        ...JSON_HEADER,
      },
    },
  );
  const payload: APIResponse<ExamSubmissionsResponse> = await response.json();
  if (!payload.status) {
    throw new Error(payload.message);
  }

  return NextResponse.json(payload);
}

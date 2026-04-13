import { JSON_HEADER } from "@/lib/Constants/api.constant";
import getAuthHeader from "@/lib/utils/get-authHeader";

export async function getUserSubmissionDetails(submissionId: string) {
  const token = await getAuthHeader();
  const response = await fetch(
    `${process.env.API}/submissions/${submissionId}`,
    {
      headers: {
        Authorization: `Bearer ${token?.token}`,
        ...JSON_HEADER,
      },
    },
  );
  const data = await response.json();
  if (!data.status) {
    throw new Error(data.message);
  }
  return data;
}

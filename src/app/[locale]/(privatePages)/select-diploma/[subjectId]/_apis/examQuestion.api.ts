// import getAuthHeader from "@/lib/utils/get-authHeader";

// export async function fetchQuestionOnExam(searchParam: string) {
//   const respone = await fetch(`${process.env.API}/questions?${searchParam}`, {
//     headers: {
//       ...(await getAuthHeader()),
//     },
//   });
//   const payload: APIResponse<{ qusestions: QuestionResponse[] }> =
//     await respone.json();

//   return payload;
// }

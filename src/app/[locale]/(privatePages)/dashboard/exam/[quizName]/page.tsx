// "use client";
// import { useSearchParams } from "next/navigation";
// import useQuestion from "../../../select-diploma/[subjectId]/_hooks/use-questions";
// import QuestionForm from "../../../select-diploma/[subjectId]/_components/questions-form";

// const QuizPage = ({ params }: { params: { quizName: string } }) => {
//   const searchParam = useSearchParams();

//   const examId = searchParam.get("id");
//   const { payload, isLoading } = useQuestion(examId!);

//   if (isLoading) {
//     return (
//       <div className="space-y-4 w-full h-10 bg-blue-100 shadow-lg rounded-lg"></div>
//     );
//   }
//   return (
//     <div>
//       {params.quizName}
//       {examId}
//       <QuestionForm questions={payload.questions} />
//     </div>
//   );
// };
// export default QuizPage;

"use client";
import { useSearchParams } from "next/navigation";
import useQuestion from "../../../select-diploma/[subjectId]/_hooks/use-questions";
import QuestionForm from "../../../select-diploma/[subjectId]/_components/questions-form";
const QuizPage = () => {
  const searchParam = useSearchParams();

  const examId = searchParam.get("id");
  const { payload, isLoading } = useQuestion(examId!);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <section className="bg-white/80 backdrop-blur-sm shadow-2xl border border-white/20 rounded-3xl overflow-hidden">
            <div className="p-6 md:p-10 space-y-4">
              <div className="h-6 w-40 bg-blue-100 rounded-lg shadow" />
              <div className="h-24 w-full bg-blue-100 rounded-xl shadow" />
            </div>
          </section>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <section className="bg-white/80 backdrop-blur-sm shadow-2xl border border-white/20 rounded-3xl overflow-hidden">
          <div className="p-4 md:p-8 lg:p-10">
            {payload?.questions[0] ? (
              <QuestionForm questions={payload!.questions} />
            ) : (
              "There is no exam for this subject"
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
export default QuizPage;

"use client";
import QuestionForm from "@/app/[locale]/(privatePages)/select-diploma/[subjectId]/_components/questions-form";
import useQuestion from "@/app/[locale]/(privatePages)/select-diploma/[subjectId]/_hooks/use-questions";
import { useSearchParams } from "next/navigation";

const QuizSection = () => {
  // Search param
  const searchParam = useSearchParams();

  // Variables
  const examId = searchParam.get("id");
  // Hooks
  const { payload, isLoading } = useQuestion(examId!);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-2xl border border-white/20 dark:border-slate-700/20 rounded-3xl overflow-hidden">
            <div className="p-6 md:p-10 space-y-4">
              <div className="h-6 w-40 bg-slate-200 dark:bg-slate-700 rounded-lg shadow" />
              <div className="h-24 w-full bg-slate-200 dark:bg-slate-700 rounded-xl shadow" />
            </div>
          </section>
        </div>
      </div>
    );
  }
  return (
    <div className="p-2">
      <div className="mx-auto">
        <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-2xl border border-white/20 dark:border-slate-700/20 rounded-3xl overflow-hidden">
          <div className="bg-slate-100 dark:bg-slate-700 p-4">
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
export default QuizSection;

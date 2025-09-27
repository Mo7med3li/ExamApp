import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { CheckCircle, XCircle, ArrowLeft, BookOpen } from "lucide-react";

type Result = {
  result: CheckResponse;
  setShowDetailedResult: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DetailedResult({
  result,
  setShowDetailedResult,
}: Result) {
  // Navigation
  const router = useRouter();

  return (
    <div className="max-w-6xl mx-auto bg-white dark:bg-zinc-800 rounded-2xl shadow-lg border border-slate-200/60 dark:border-slate-700/60 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-zinc-900 dark:to-zinc-700 p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Detailed Results</h2>
              <p className="text-blue-100 dark:text-blue-200">
                Review your incorrect answers
              </p>
            </div>
          </div>

          <Button
            onClick={() => {
              setShowDetailedResult(false);
              router.push("/all-exams");
            }}
            className="bg-white/20 hover:bg-white/30 dark:bg-zinc-500 dark:hover:bg-zinc-900 text-white border-white/30 rounded-xl"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Exams
          </Button>
        </div>
      </div>

      <div className="p-6">
        {result.WrongQuestions.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              Perfect Score!
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              You got all questions correct. Well done!
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-slate-100 mb-2">
                Questions to Review ({result.WrongQuestions.length})
              </h3>
              <p className="text-slate-600 dark:text-zinc-400">
                Here are the questions you answered incorrectly along with the
                correct answers.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {result.WrongQuestions.map((question, index) => {
                return (
                  <div
                    key={question.QID}
                    className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    {/* Question Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                          <span className="text-sm font-bold text-red-600 dark:text-red-400">
                            Q{index + 1}
                          </span>
                        </div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 leading-tight">
                          {question.Question}
                        </h4>
                      </div>
                    </div>

                    {/* Answer Options */}
                    <div className="space-y-3">
                      {/* Correct Answer */}
                      <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700 rounded-xl p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-emerald-700 dark:text-emerald-400 mb-1">
                              Correct Answer
                            </div>
                            <div className="text-slate-900 dark:text-slate-100 font-medium">
                              {question.correctAnswer}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Your Answer */}
                      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <XCircle className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-red-700 dark:text-red-400 mb-1">
                              Your Answer
                            </div>
                            <div className="text-slate-900 dark:text-slate-100 font-medium">
                              {question.inCorrectAnswer}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
          <Button
            onClick={() => setShowDetailedResult(false)}
            className="bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600 rounded-xl font-medium px-6 py-3"
          >
            Back to Score
          </Button>

          <Button
            onClick={() => router.push("/all-exams")}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-zinc-700 dark:to-neutral-800 dark:hover:from-zinc-600 dark:hover:to-neutral-600 text-white rounded-xl font-medium px-6 py-3"
          >
            Take Another Exam
          </Button>
        </div>
      </div>
    </div>
  );
}

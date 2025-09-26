import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/navigation";
import { Clock, FileText, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DiplomaQuizStartCard({
  Exams,
}: {
  Exams: Exam[] | undefined;
}) {
  const router = useRouter();

  return (
    <div className="space-y-4">
      {Exams?.map((exam) => {
        return (
          <div
            key={exam._id}
            className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                {/* Left Side - Exam Info */}
                <div className="flex items-center space-x-4">
                  {/* Exam Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                    <FileText className="w-7 h-7 text-white" />
                  </div>

                  {/* Exam Details */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-2">
                      {exam.title}
                    </h3>

                    <div className="flex items-center space-x-6">
                      {/* Questions Count */}
                      <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                        <FileText className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {exam.numberOfQuestions} Questions
                        </span>
                      </div>

                      {/* Duration */}
                      <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {exam.duration} Minutes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Action */}
                <div className="flex flex-col items-end space-y-3">
                  {/* Difficulty Badge */}
                  <div
                    className={cn(
                      "px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-medium",
                      exam.title === "React Quiz" &&
                        "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                    )}
                  >
                    {exam.title === "React Quiz"
                      ? "Not Available"
                      : "Available"}
                  </div>

                  {/* Start Button */}
                  <Button
                    onClick={() => {
                      router.push(
                        `dashboard/exam/${exam.title}?id=${exam._id}`
                      );
                    }}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center space-x-2"
                  >
                    <Play className="w-4 h-4" />
                    <span>Start Exam</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Progress Bar (Optional - could be used for completed exams) */}
            <div className="h-1 bg-slate-100">
              <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 w-0 group-hover:w-full transition-all duration-1000"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

"use client";
import { BookOpenCheck, Clock, Target } from "lucide-react";
import { useAllExams } from "../../select-diploma/[diplomaId]/_hooks/use-all-exams";
import { Exam } from "@/lib/types/privatePages";

const ExamStats = () => {
  const { Exams } = useAllExams();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm border border-slate-200/60 dark:border-slate-700/60 hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-600 dark:text-zinc-300">
              Total Exams
            </p>
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              {Exams?.payload?.metadata?.total || 0}
            </p>
          </div>
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded- dark:from-black/30 dark:to-zinc-300 rounded-lg flex items-center justify-center">
            <BookOpenCheck className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm border border-slate-200/60 dark:border-slate-700/60 hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-600 dark:text-zinc-300">
              Available Now
            </p>
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              {Exams?.payload?.metadata?.limit || 0}
            </p>
          </div>
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 dark:from-emerald-400 dark:to-emerald-500 rounded-xl flex items-center justify-center">
            <Target className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm border border-slate-200/60 dark:border-slate-700/60 hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-600 dark:text-zinc-300">
              Average Time
            </p>
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              {Exams?.payload?.data?.reduce(
                (acc: number, exam: Exam) => acc + exam.duration,
                0,
              )}
              min
            </p>
          </div>
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 rounded-xl flex items-center justify-center">
            <Clock className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamStats;

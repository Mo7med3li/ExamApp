import React from "react";
import AllExams from "./_components/all-exams";
import PageHeader from "../_components/page-header";
import { BookOpenCheck } from "lucide-react";
import ExamStats from "./_components/exam-stats";

export default function page() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <PageHeader
        title="All Exams"
        icon={BookOpenCheck}
        subtitle="Browse and take exams from all available diplomas"
      />

      {/* Quick Stats */}
      <ExamStats />

      {/* Exams Section */}
      <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-700/60 overflow-hidden">
        <div className="p-6 border-b border-slate-200/60 dark:border-slate-700/60">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                Available Exams
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                Select an exam to begin your assessment
              </p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-black/40 dark:to-zinc-600 rounded-xl flex items-center justify-center">
              <BookOpenCheck className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        <div className="p-6">
          <AllExams />
        </div>
      </div>
    </div>
  );
}

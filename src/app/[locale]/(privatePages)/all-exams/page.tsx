import React from "react";
import AllExams from "./_components/all-exams";
import PageHeader from "../_components/page-header";
import { BookOpenCheck, Clock, Target } from "lucide-react";

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Total Exams</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">4</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <BookOpenCheck className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">
                Available Now
              </p>
              <p className="text-2xl font-bold text-slate-900 mt-1">3</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Average Time</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">45min</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Exams Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
        <div className="p-6 border-b border-slate-200/60">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Available Exams
              </h2>
              <p className="text-slate-600 mt-1">
                Select an exam to begin your assessment
              </p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
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

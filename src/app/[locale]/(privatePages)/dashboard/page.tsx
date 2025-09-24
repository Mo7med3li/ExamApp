import React from "react";
import SubjectList from "./_components/subject-list";
import PageHeader from "../_components/page-header";
import { GraduationCap } from "lucide-react";

export default function Page() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <PageHeader
        title="Dashboard"
        icon={GraduationCap}
        subtitle="Explore available diplomas and start your learning journey"
      />

      {/* Diplomas Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
        <div className="p-6 border-b border-slate-200/60">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Available Diplomas
              </h2>
              <p className="text-slate-600 mt-1">
                Choose a diploma to start your exam journey
              </p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <SubjectList />
          </div>
        </div>
      </div>
    </div>
  );
}

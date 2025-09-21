import React from "react";
import SubjectList from "./_components/subject-list";
import PageHeader from "../_components/page-header";
import { GraduationCap } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <section className="bg-white/80 backdrop-blur-sm shadow-2xl border border-white/20 rounded-3xl overflow-hidden">
          {/* Header */}
          <PageHeader title="Diplomas" icon={GraduationCap} />

          {/* Content */}
          <div className="p-6 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Diplomas */}
              <SubjectList />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

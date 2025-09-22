import React from "react";
import AllExams from "./_components/all-exams";
import PageHeader from "../_components/page-header";
import { BookOpenCheck } from "lucide-react";

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <section className="bg-white/80 backdrop-blur-sm shadow-2xl border border-white/20 rounded-3xl overflow-hidden">
          <PageHeader title="Exams" icon={BookOpenCheck} />
          {/* Exams */}
          <div className="p-6 md:p-8 lg:p-10">
            <AllExams />
          </div>
        </section>
      </div>
    </div>
  );
}

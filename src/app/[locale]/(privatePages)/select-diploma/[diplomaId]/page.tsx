import React, { Suspense } from "react";

import DiplomaQuizStartCard from "./_components/diploma-quizStart-card";
import { fetchExams } from "./_apis/exam.api";
import PaginationComponent from "@/components/common/styled-pagination";

// Loading component
function LoadingSkeleton() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="max-w-4xl mx-auto space-y-4">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 overflow-hidden animate-pulse"
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-zinc-700 dark:to-zinc-600 rounded-2xl flex items-center justify-center">
                    <div className="w-7 h-7 bg-slate-300 dark:bg-zinc-500 rounded-lg animate-pulse"></div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="h-4 bg-slate-200 dark:bg-zinc-700 rounded animate-pulse w-3/4"></div>
                    <div className="h-4 bg-slate-200 dark:bg-zinc-700 rounded animate-pulse w-2/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { diplomaId: string };
  searchParams: { page?: number };
}) {
  const page = searchParams.page || 1;
  const payload = await fetchExams(params.diplomaId, page);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8 border-b border-slate-200/60 dark:border-slate-700/60 pb-4">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Available Exams
          </h1>
          <p className="text-lg text-slate-600 dark:text-zinc-400">
            Choose an exam to get started
          </p>
        </div>

        {/* Exams Section */}
        <section className="space-y-6">
          <Suspense fallback={<LoadingSkeleton />}>
            <DiplomaQuizStartCard
              Exams={await fetchExams(params.diplomaId, page).then(
                (res) => res.payload.data,
              )}
            />
          </Suspense>
        </section>

        {/* Pagination */}
        <Suspense
          fallback={
            <div className="h-12 bg-slate-200 dark:bg-zinc-700 rounded animate-pulse"></div>
          }
        >
          {payload.payload.metadata.totalPages > 1 && (
            <PaginationComponent metaData={payload.payload.metadata} />
          )}
        </Suspense>
      </div>
    </div>
  );
}

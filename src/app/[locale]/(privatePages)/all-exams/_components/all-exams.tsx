"use client";

import React from "react";
import { useAllExams } from "../../select-diploma/[subjectId]/_hooks/use-allExams";
import DiplomaQuizStartCard from "../../select-diploma/[subjectId]/_components/diploma-quizStart-card";
import { Skeleton } from "@/components/ui/skeleton";

export default function AllExams() {
  // Hooks
  const { isPending, error, Exams } = useAllExams();

  // Context

  if (isPending) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-slate-200/60 p-6"
          >
            <div className="flex items-center justify-between">
              {/* Left Side */}
              <div className="flex items-center space-x-4">
                <Skeleton className="w-14 h-14 rounded-2xl" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-6 w-48 rounded" />
                  <div className="flex items-center space-x-6">
                    <Skeleton className="h-4 w-24 rounded" />
                    <Skeleton className="h-4 w-20 rounded" />
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex flex-col items-end space-y-3">
                <Skeleton className="h-6 w-16 rounded-full" />
                <Skeleton className="h-10 w-24 rounded-xl" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  // Error handling
  if (error) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">⚠️</span>
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            Error Loading Exams
          </h3>
          <p className="text-slate-600">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {Array.isArray(Exams?.exams) && Exams.exams.length > 0 ? (
        <DiplomaQuizStartCard Exams={Exams?.exams} />
      ) : (
        <div className="flex items-center justify-center py-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">📝</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              No exams available
            </h3>
            <p className="text-slate-600">Check back later for new content</p>
          </div>
        </div>
      )}
    </div>
  );
}

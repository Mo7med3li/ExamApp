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
          <section
            key={i}
            className="flex justify-between items-center px-6 py-4 bg-blue-100 rounded-xl shadow-cardDiplomaShadow"
          >
            {/* left side */}
            <div className="flex items-center gap-6">
              <div className="flex flex-col gap-4">
                <Skeleton className="h-5 w-32 rounded" />
                <Skeleton className="h-4 w-24 rounded" />
              </div>
            </div>

            {/* right side */}
            <div className="flex flex-col items-end gap-2">
              <Skeleton className="h-4 w-20 rounded" />
              <Skeleton className="h-8 w-20 rounded-xl" />
            </div>
          </section>
        ))}
      </div>
    );
  }
  // Error handling
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      {Array.isArray(Exams?.exams) && Exams.exams.length > 0 ? (
        <DiplomaQuizStartCard Exams={Exams?.exams} />
      ) : (
        <p className="text-center py-4">No exams available</p>
      )}
    </div>
  );
}

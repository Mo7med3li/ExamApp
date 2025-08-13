"use client";

import React from "react";
import { useExamContext } from "@/components/providers/components/exam.provider";
import SearchResult from "../../select-diploma/[subjectId]/_components/search-result";
import { useAllExams } from "../../select-diploma/[subjectId]/_hooks/use-allExams";
import DiplomaQuizStartCard from "../../select-diploma/[subjectId]/_components/diploma-quizStart-card";

export default function AllExams() {
  // Hooks
  const { isPending, error, Exams } = useAllExams();

  // Context
  const { searchExamsList, searchValue } = useExamContext();

  if (isPending) {
    return <p>isLoading</p>;
  }
  // Error handling
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      {searchValue ? (
        searchExamsList.length > 0 ? (
          <SearchResult />
        ) : (
          <p className="text-center py-4">No exams found</p>
        )
      ) : Array.isArray(Exams?.exams) && Exams.exams.length > 0 ? (
        <DiplomaQuizStartCard Exams={Exams?.exams} />
      ) : (
        <p className="text-center py-4">No exams available</p>
      )}
    </div>
  );
}

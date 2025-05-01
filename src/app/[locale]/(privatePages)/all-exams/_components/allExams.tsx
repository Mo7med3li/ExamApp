"use client";
import React from "react";
import { useExamContext } from "@/components/providers/components/exam.provider";
import SearchResult from "../../select-diploma/[subjectId]/_components/search-result";
import { useAllExams } from "../../select-diploma/[subjectId]/_hooks/use-allExams";
import DiplomaQuizStartCard from "../../select-diploma/[subjectId]/_components/diplomaQuizStartCard";

export default function AllExams() {
  // Hooks
  const { isPending, error, Exams } = useAllExams();
  // Context
  const { searchExamsList } = useExamContext();
  if (isPending) {
    return <p>isLoading</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      {searchExamsList.length === 0 ? null : <SearchResult />}
      {searchExamsList.length === 0 ? (
        <DiplomaQuizStartCard Exams={Exams?.exams} />
      ) : null}
    </div>
  );
}

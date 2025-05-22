"use client";
import { useExamContext } from "@/components/providers/components/exam.provider";
import React from "react";
import DiplomaQuizStartCard from "./diploma-quizStart-card";

export default function SearchResult() {
  const { searchExamsList } = useExamContext();
  return (
    <div>
      {searchExamsList && <DiplomaQuizStartCard Exams={searchExamsList} />}
    </div>
  );
}

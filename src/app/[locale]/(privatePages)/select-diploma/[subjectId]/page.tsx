import React, { Suspense } from "react";

import DiplomaQuizStartCard from "./_components/diploma-quizStart-card";
import { fetchExams } from "./_apis/exam.api";

export default async function Page({
  params,
}: {
  params: { subjectId: string };
}) {
  const payload = await fetchExams(params.subjectId);
  return (
    <section>
      <h2 className="font-medium text-lg mb-8">Front-End Quiz</h2>
      {/* Start Quiz */}
      <Suspense fallback="loading....">
        <DiplomaQuizStartCard Exams={payload.exams} />
      </Suspense>
    </section>
  );
}

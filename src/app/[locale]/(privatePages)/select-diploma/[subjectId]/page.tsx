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
      {/* Start Quiz */}
      <Suspense fallback="loading....">
        <DiplomaQuizStartCard Exams={payload.exams} />
      </Suspense>
    </section>
  );
}

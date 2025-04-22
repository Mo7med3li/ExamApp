import React, { Suspense } from "react";

import DiplomaQuizStartCard from "./_components/diplomaQuizStartCard";

export default function Page({ params }: { params: { subjectId: string } }) {
  console.log(params.subjectId);

  return (
    <section>
      <h2 className="font-medium text-lg mb-8">Front-End Quiz</h2>
      {/* Start Quiz */}
      <Suspense fallback="loading....">
        <DiplomaQuizStartCard examId={params.subjectId} />
      </Suspense>
    </section>
  );
}

import React from "react";

import DiplomaQuizStartCard from "./_components/DiplomaQuizStartCard";

export default function Page({ params }: { params: { subjectId: string } }) {
  console.log(params.subjectId);

  return (
    <section>
      <h2 className="font-medium text-lg mb-8">Front-End Quiz</h2>
      {/* Start Quiz */}
      <DiplomaQuizStartCard examId={params.subjectId} />
    </section>
  );
}

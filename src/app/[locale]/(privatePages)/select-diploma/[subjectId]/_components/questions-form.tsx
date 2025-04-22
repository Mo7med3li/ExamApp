"use client";
import React from "react";

import useQuestion from "../_hooks/use-questions";

export default function QuestionForm() {
  // queries
  const { isLoading, error, payload } = useQuestion();
  if (error) return <p>{error.message}</p>;

  if (isLoading) return <p> loading</p>;
  console.log(payload);

  return (
    <div>
      {payload?.questions.map((quesstion) => (
        <li key={quesstion._id}>{quesstion.question}</li>
      ))}
    </div>
  );
}

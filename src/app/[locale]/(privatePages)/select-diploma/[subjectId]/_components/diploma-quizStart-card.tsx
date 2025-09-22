import React from "react";

import QuestionDialog from "./question-dialog";

export default function DiplomaQuizStartCard({
  Exams,
}: {
  Exams: Exam[] | undefined;
}) {
  return (
    <>
      {Exams?.map((exam) => {
        return (
          <section
            key={exam._id}
            className="flex justify-between items-center px-6 py-4 bg-blue-50 rounded-xl shadow-cardDiplomaShadow"
          >
            {/* Exams */}
            <div className="flex items-center gap-6 ">
              <div className="flex flex-col gap-1">
                {/* tittle */}
                <h3 className="font-semibold text-lg text-blue-600">
                  {exam.title}
                </h3>
                <span className="text-sm text-gray-500">
                  {exam.numberOfQuestions} Question
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {/* duration */}
              <span className="text-sm">{exam.duration} Minutes</span>
              {/* actions */}
              <QuestionDialog exam={exam._id} />
            </div>
          </section>
        );
      })}
    </>
  );
}

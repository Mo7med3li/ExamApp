import Image from "next/image";
import React from "react";
import HtmlLogo from "@/assets/imgs/skill-icons_html.png";
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
            className="flex justify-between items-center px-6 py-4 bg-inputColor  rounded-xl shadow-cardDiplomaShadow"
          >
            {/* Exams */}
            <div className="flex items-center gap-6 ">
              <Image
                src={HtmlLogo}
                alt="Html logo"
                width={500}
                height={0}
                className="w-20"
              />
              <div className="flex flex-col gap-1">
                {/* tittle */}
                <h3 className="font-medium text-base">{exam.title}</h3>
                <span className="text-xs text-gray-500">
                  {exam.numberOfQuestions} Question
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {/* dutation */}
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

"use client";
import React from "react";
import Image from "next/image";
import HtmlLogo from "@/assets/imgs/skill-icons_html.png";

import { useExamContext } from "@/components/providers/components/exam.provider";
import SearchResult from "../../select-diploma/[subjectId]/_components/search-result";
import { useAllExams } from "../../select-diploma/[subjectId]/_hooks/use-allExams";
import QuestionDialog from "../../select-diploma/[subjectId]/_components/question-dialog";

export default function AllExams() {
  const { isPending, error, Exams } = useAllExams();
  const { searchExamsList } = useExamContext();
  if (isPending) {
    return <p>isLoading</p>;
  }

  return (
    <div>
      {searchExamsList.length === 0 ? null : <SearchResult />}
      {searchExamsList.length === 0
        ? Exams?.exams.map((exam) => {
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
          })
        : null}
    </div>
  );
}

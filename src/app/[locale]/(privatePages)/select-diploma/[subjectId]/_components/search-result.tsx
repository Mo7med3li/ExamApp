"use client";
import { useExamContext } from "@/components/providers/components/exam.provider";
import React from "react";
import HtmlLogo from "@/assets/imgs/skill-icons_html.png";
import Image from "next/image";
import QuestionDialog from "./question-dialog";

export default function SearchResult() {
  const { searchExamsList } = useExamContext();
  return (
    <div>
      {searchExamsList &&
        searchExamsList.map((exams) => {
          return (
            <section
              key={exams._id}
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
                  <h3 className="font-medium text-base">{exams.title}</h3>
                  <span className="text-xs text-gray-500">
                    {exams.numberOfQuestions} Question
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {/* dutation */}
                <span className="text-sm">{exams.duration} Minutes</span>
                {/* actions */}
                <QuestionDialog exam={exams._id} />
              </div>
            </section>
          );
        })}
    </div>
  );
}

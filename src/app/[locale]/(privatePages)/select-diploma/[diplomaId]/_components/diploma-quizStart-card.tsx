"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/navigation";
import { Clock, FileText, Play } from "lucide-react";
import EmptyExam from "./empty-exam";
import { Badge } from "@/components/ui/badge";
// import Image from "next/image";

export default function DiplomaQuizStartCard({
  Exams,
}: {
  Exams: Exam[] | undefined;
}) {
  // Navigation
  const router = useRouter();

  // Handle empty state
  if (!Exams || Exams.length === 0) {
    return <EmptyExam />;
  }

  return (
    <div className="space-y-4">
      {Exams?.map((exam) => {
        return (
          <div
            key={exam.id}
            className="group bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300 hover:-translate-y-1"
          >
            <Badge className="p-1 m-2 bg-blue-100 text-blue-800">
              {exam.diploma.title} diploma
            </Badge>
            <div className="p-6">
              <div className="flex items-center justify-between">
                {/* Left Side - Exam Info */}
                <div className="flex items-center space-x-4">
                  {/* Exam Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-black/30 dark:to-zinc-300 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                    <FileText className="w-7 h-7 text-white" />
                    {/* <Image
                      src={exam.image}
                      alt={exam.title}
                      width={50}
                      height={50}
                      className="w-14 h-14 object-cover rounded-2xl"
                    /> */}
                  </div>

                  {/* Exam Details */}
                  <div className="flex-1 min-w-0">
                    <div className="mb-3">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-zinc-600 transition-colors duration-200 leading-tight">
                        {exam.title}
                      </h3>

                      {/* Exam Meta Info */}
                      <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400">
                        <div className="flex items-center space-x-2">
                          <FileText className="w-4 h-4" />
                          <span className="font-medium">
                            {exam._count.questions}
                          </span>
                          <span className="text-slate-500 dark:text-slate-500">
                            Questions
                          </span>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span className="font-medium">{exam.duration}</span>
                          <span className="text-slate-500 dark:text-slate-500">
                            Minutes
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Action */}
                <div className="flex flex-col items-end space-y-3">
                  {/* Start Button */}
                  <Button
                    onClick={() => {
                      router.push(
                        `/dashboard/exam?id=${exam.id}&time=${exam.duration}`,
                      );
                    }}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:hover:from-zinc-900 dark:from-black/70 dark:to-zinc-800 dark:hover:to-zinc-600 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center space-x-2"
                  >
                    <Play className="w-4 h-4" />
                    <span>Start Exam</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Progress Bar (Optional - could be used for completed exams) */}
            <div className="h-1 bg-slate-100">
              <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-black dark:to-zinc-900 w-0 group-hover:w-full transition-all duration-1000"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

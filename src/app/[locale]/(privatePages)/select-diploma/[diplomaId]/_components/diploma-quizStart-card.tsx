"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/navigation";
import { BookOpen, Clock, FileText, Play } from "lucide-react";
import EmptyExam from "./empty-exam";
import { Badge } from "@/components/ui/badge";
import { Exam } from "@/lib/types/privatePages";
import Image from "next/image";

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
    <div className="space-y-5">
      {Exams?.map((exam) => (
        <div
          key={exam.id}
          className="group bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300 hover:-translate-y-1"
        >
          {/* ── Banner Image ── */}
          <div className="relative h-60 w-full overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-zinc-800 dark:to-zinc-700">
            {exam.image ? (
              <Image
                src={exam.image}
                alt={exam.title}
                fill
                className="object-fill transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 700px"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-blue-300 dark:text-zinc-500" />
              </div>
            )}

            {/* Gradient overlay so text on top stays readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* Diploma badge pinned to top-left */}
            <Badge className="absolute top-3 left-3 bg-blue-600/90 hover:bg-blue-600 text-white border-0 backdrop-blur-sm shadow-md">
              {exam.diploma.title} diploma
            </Badge>
          </div>

          {/* ── Card Body ── */}
          <div className="p-5 flex items-center justify-between gap-4">
            {/* Left — title + meta */}
            <div className="flex items-center gap-4 min-w-0">
              {/* Icon badge */}
              <div className="shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-zinc-700 dark:to-zinc-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200">
                <FileText className="w-6 h-6 text-white" />
              </div>

              <div className="min-w-0">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 leading-snug truncate">
                  {exam.title}
                </h3>

                <div className="mt-1 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {exam.questionsCount}
                    </span>
                    Questions
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {exam.duration}
                    </span>
                    Min
                  </span>
                </div>
              </div>
            </div>

            {/* Right — CTA */}
            <Button
              onClick={() =>
                router.push(
                  `/dashboard/exam?id=${exam.id}&time=${exam.duration}`,
                )
              }
              className="shrink-0 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-zinc-700 dark:to-zinc-600 dark:hover:from-zinc-600 dark:hover:to-zinc-500 text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-current" />
              Start Exam
            </Button>
          </div>

          {/* ── Animated progress line ── */}
          <div className="h-0.5 bg-slate-100 dark:bg-zinc-800">
            <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 w-0 group-hover:w-full transition-all duration-700 ease-in-out" />
          </div>
        </div>
      ))}
    </div>
  );
}

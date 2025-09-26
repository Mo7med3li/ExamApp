"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import QuestionForm from "./questions-form";
import useQuestion from "../_hooks/use-questions";
import { Play, Loader2 } from "lucide-react";

type QuestionDialogProps = {
  exam: string;
};

export default function QuestionDialog({ exam }: QuestionDialogProps) {
  const { payload, isLoading } = useQuestion(exam);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-10 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-xl shadow-sm">
        <Loader2 className="w-4 h-4 animate-spin text-blue-600 dark:text-blue-400" />
      </div>
    );
  }

  return payload?.questions[0] !== undefined ? (
    <Dialog>
      <DialogTrigger className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white py-2 px-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200">
        <Play className="w-4 h-4" />
        <span>Start Exam</span>
      </DialogTrigger>

      <DialogContent className="w-[90vw] max-w-4xl max-h-[95vh] overflow-y-auto p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Exam
          </DialogTitle>
          <DialogDescription className="text-slate-600 dark:text-slate-400">
            Answer all questions to complete the exam
          </DialogDescription>
        </DialogHeader>

        {/* Form */}
        <div className="p-6 pt-4">
          <QuestionForm questions={payload.questions} />
        </div>
      </DialogContent>
    </Dialog>
  ) : (
    <div className="flex items-center justify-center w-full h-10 bg-slate-100 rounded-xl text-slate-600 text-sm">
      No Exam Available
    </div>
  );
}

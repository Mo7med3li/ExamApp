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

type QuestionDialogProps = {
  exam: string;
};

export default function QuestionDialog({ exam }: QuestionDialogProps) {
  const { payload, isLoading } = useQuestion(exam);

  if (isLoading) {
    return (
      <div className="space-y-4 w-full h-10 bg-blue-100 shadow-lg rounded-lg"></div>
    );
  }

  return payload?.questions[0] !== undefined ? (
    <Dialog>
      <DialogTrigger className="bg-main py-1 px-6 rounded-xl text-white">
        start
      </DialogTrigger>

      <DialogContent className="w-[690px] max-h-[100vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className=""></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        {/* Form */}
        <QuestionForm questions={payload.questions} />
      </DialogContent>
    </Dialog>
  ) : (
    "No Exam for this subject"
  );
}

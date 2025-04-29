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
  // const payload = await getQuestions(exam);
  // console.log(payload);
  const { payload, isLoading } = useQuestion(exam);
  if (isLoading) {
    return <p>loading....</p>;
  }

  return (
    <Dialog>
      <DialogTrigger className="bg-main py-1 px-6 rounded-xl text-white">
        Start
      </DialogTrigger>
      <DialogContent className="w-[690px] max-h-[100vh] overflow-y-auto ">
        <DialogHeader>
          <DialogTitle className="">
            {/* Are you absolutely sure?{exam} */}
          </DialogTitle>
          <DialogDescription>
            {/* This action cannot be undone. This will permanently delete your
            account and remove your data from our servers. */}
          </DialogDescription>
        </DialogHeader>
        {/* Form */}
        {payload?.questions && <QuestionForm questions={payload.questions} />}
      </DialogContent>
    </Dialog>
  );
}

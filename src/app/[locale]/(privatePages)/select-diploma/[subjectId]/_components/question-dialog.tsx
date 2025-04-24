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
import { getQuestions } from "../_apis/examQuestion.api";

type QuestionDialogProps = {
  exam: string;
};
export default async function QuestionDialog({ exam }: QuestionDialogProps) {
  const payload = await getQuestions(exam);
  console.log(payload);

  return (
    <Dialog>
      <DialogTrigger className="bg-main py-1 px-6 rounded-xl text-white">
        Start
      </DialogTrigger>
      <DialogContent className="w-[690px] ">
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

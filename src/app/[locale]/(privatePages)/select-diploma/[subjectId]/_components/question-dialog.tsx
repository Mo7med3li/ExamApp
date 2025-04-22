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

type QuestionDialogProps = {
  exam: string;
};
export default function QuestionDialog({ exam }: QuestionDialogProps) {
  return (
    <Dialog>
      <DialogTrigger className="bg-main py-1 px-6 rounded-xl text-white">
        Start
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?{exam}</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        {/* content */}
        <QuestionForm />
      </DialogContent>
    </Dialog>
  );
}

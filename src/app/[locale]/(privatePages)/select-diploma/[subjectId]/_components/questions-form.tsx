"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnswersFields, ExamSchema } from "@/lib/schemas/exam.schema";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Examduration from "./exam-duration";
// types
type QuestionsFormProps = {
  questions: QuestionResponse[];
};

export default function QuestionForm({ questions }: QuestionsFormProps) {
  // Form
  const form = useForm<AnswersFields>({
    resolver: zodResolver(ExamSchema),
  });

  // state
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState("");

  // variable
  const currentQuestion = questions[step];

  // Functions
  const onSubmit: SubmitHandler<AnswersFields> = (values) => {
    console.log("values", values);
  };

  return (
    <div className="flex flex-col gap-14">
      {/* Header */}
      <header className="flex justify-between items-center ">
        {/* Question Number */}
        <p className="text-sm text-main">
          Question {step + 1} of {questions.length}
        </p>
        {/* Exam duration */}
        <Examduration duration={questions[0]?.exam.duration ?? 0} />
      </header>
      {/* Steps */}
      <ul className="flex justify-between">
        {Array.from({ length: questions.length ?? 0 }, (_, i) => i).map((i) => (
          <li
            key={i}
            className={cn(
              "size-2 bg-gray-300 rounded-full transition-colors",
              step >= i && "bg-main"
            )}
          ></li>
        ))}
      </ul>
      {/* Form */}
      <Form {...form}>
        <form
          {...form}
          onSubmit={form.handleSubmit(onSubmit)}
          className="grow  flex flex-col"
        >
          <FormField
            control={form.control}
            name={`answers.${step}`}
            render={({ field }) => (
              <FormItem>
                {/* label */}
                <FormLabel className="text-xl font-bold mt-12 mb-5 ">
                  {currentQuestion?.question}
                </FormLabel>
                {/* options */}
                <FormControl className="">
                  <RadioGroup
                    value={answer}
                    onValueChange={(value) => {
                      setAnswer(value);
                      field.onChange({
                        questionId: currentQuestion?._id,
                        correct: value,
                      });
                    }}
                    name={currentQuestion?._id}
                    className="flex flex-col space-y-1"
                  >
                    {currentQuestion?.answers.map((answer) => (
                      <FormItem
                        key={answer.key}
                        className="flex items-center space-x-3 space-y-0 border-2 rounded-lg px-2 bg-slate-200 "
                      >
                        <FormControl>
                          {/* Radio */}
                          <RadioGroupItem
                            value={answer.key}
                            className="border-main bg-white"
                          />
                        </FormControl>
                        {/* label */}
                        <FormLabel className="font-normal grow  py-4 px-2 ">
                          {answer.answer}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                {/* Feedback */}
                <FormMessage />
              </FormItem>
            )}
          />
          {/* footer */}
          <div className="grid grid-cols-2 gap-12 mt-auto">
            <Button
              disabled={step == 0}
              type="button"
              className="text-main bg-white border border-main rounded-[100px] font-medium text-2xl"
              onClick={() => {
                const previousAnswer = form.getValues(`answers.${step - 1}`);

                if (!previousAnswer?.correct) {
                  setAnswer("");
                } else {
                  setAnswer(previousAnswer.correct);
                }

                setStep((prev) => prev - 1);
              }}
            >
              Back
            </Button>
            <Button
              className="rounded-[100px] font-medium text-2xl"
              type={`${
                step < (questions.length ?? 0) - 1 ? "button" : "submit"
              }`}
              disabled={(() => {
                const currentAnswer = form.getValues(`answers.${step}`);
                if (currentAnswer?.correct) return false;
                return true;
              })()}
              onClick={() => {
                if (step === (questions.length ?? 0) - 1) return;
                const nextAmswer = form.getValues(`answers.${step + 1}`);
                if (!nextAmswer?.correct) {
                  setAnswer("");
                } else {
                  setAnswer(nextAmswer.correct);
                }
                setStep((prev) => prev + 1);
              }}
            >
              Next
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

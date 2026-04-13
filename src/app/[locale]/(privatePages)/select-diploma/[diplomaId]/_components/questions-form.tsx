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
import Score from "./score";
import ExamDuration from "./exam-duration";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useSubmitExam from "../_hooks/use-submit-exam";
import { useSearchParams } from "next/navigation";
import { CheckResponse, Question } from "@/lib/types/privatePages";
// types
type QuestionsFormProps = {
  questions: Question[];
  examId: string;
};

export default function QuestionForm({
  questions,
  examId,
}: QuestionsFormProps) {
  // Form
  const form = useForm<AnswersFields>({
    resolver: zodResolver(ExamSchema),
    defaultValues: {
      examId: examId,
      answers: [],
      startedAt: new Date().toISOString(),
    },
  });

  // state
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState<CheckResponse | null>(null);
  const [showResult, setShowResult] = useState(false);

  // Get time from URL
  const searchParams = useSearchParams();
  const time = searchParams.get("time");

  // Mutation
  const { isPending, error, submitExam } = useSubmitExam();

  // variable
  const currentQuestion = questions[step];

  // Functions
  const onSubmit: SubmitHandler<AnswersFields> = (values) => {
    submitExam(values, {
      onSuccess: (data) => {
        setResult(data);
        setShowResult(true);
        // Handle wrong answers from analytics
        data.payload.analytics.forEach((analytic) => {
          if (!analytic.isCorrect) {
            let questionIndex: number | null = null;
            // find wrong questions id
            form.getValues("answers").find((answer, j) => {
              if (answer.questionId === analytic.questionId) {
                questionIndex = j;
                return true;
              } else {
                return false;
              }
            });
            if (questionIndex !== null) {
              form.setError(`answers.${questionIndex}`, {
                message: `Correct answer: ${analytic.correctAnswer}`,
              });
            }
          }
        });
      },
      onError: (error) => {
        console.error("Submission failed:", error);
      },
    });
  };

  if (result && showResult === true) {
    return <Score result={result} setShowResult={setShowResult} />;
  }

  return (
    <div className="max-w-4xl mx-auto bg-blue-100 dark:bg-zinc-900 rounded-2xl border border-slate-200/60 overflow-hidden">
      {/* Header */}

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:bg-gradient-to-r dark:from-zinc-800 dark:to-zinc-900 p-3 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <span className="text-lg font-bold">{step + 1}</span>
            </div>
            <div>
              <h2 className="text-xl font-bold dark:text-zinc-300">
                Question {step + 1} of {questions.length}
              </h2>
              <p className="text-blue-100 text-sm">Answer the question below</p>
            </div>
          </div>

          {/* Exam duration */}
          <div className="flex items-center space-x-3">
            <ExamDuration duration={time ? Number(time) : 20} />
          </div>
        </div>
      </div>
      {/* Progress Bar */}
      <div className="px-6 py-4 bg-slate-50 border-b dark:bg-zinc-500 border-slate-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-600 dark:text-zinc-900">
            Progress
          </span>
          <span className="text-sm font-medium text-slate-600 dark:text-zinc-900">
            {Math.round(((step + 1) / questions.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-black dark:to-zinc-950 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((step + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>
      {/* Form Content */}
      <div className="p-6">
        <Form {...form}>
          <form
            {...form}
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name={`answers.${step}`}
              render={({ field }) => (
                <FormItem>
                  {/* Question */}
                  <div className="mb-6">
                    <FormLabel className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-relaxed block">
                      {currentQuestion?.text}
                    </FormLabel>
                  </div>

                  {/* Answer Options */}
                  <FormControl>
                    <RadioGroup
                      disabled={isPending}
                      value={answer}
                      onValueChange={(value) => {
                        setAnswer(value);
                        field.onChange({
                          questionId: currentQuestion?.id,
                          answerId: value,
                        });
                      }}
                      name={currentQuestion?.id}
                      className="space-y-4"
                    >
                      {currentQuestion?.answers.map((answerOption, index) => (
                        <FormItem key={answerOption.id}>
                          <div className="group">
                            <div className="flex items-center space-x-4 p-5 rounded-2xl border-2 border-slate-200 bg-white dark:bg-zinc-400 hover:border-blue-300 dark:hover:border-zinc-200 hover:bg-blue-50/50 transition-all duration-200 cursor-pointer">
                              <FormControl>
                                <RadioGroupItem
                                  value={answerOption.id}
                                  className="w-5 h-5 border-2 border-slate-300 text-blue-600 focus:ring-blue-500"
                                />
                              </FormControl>

                              <div className="flex items-center space-x-3 flex-1">
                                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-200">
                                  <span className="text-sm font-semibold text-slate-600 group-hover:text-blue-600 dark:group-hover:text-zinc-900">
                                    {String.fromCharCode(65 + index)}
                                  </span>
                                </div>
                                <FormLabel className="text-lg font-medium text-slate-900 cursor-pointer flex-1 leading-relaxed">
                                  {answerOption.text}
                                </FormLabel>
                              </div>
                            </div>
                          </div>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>

                  {/* Error Message */}
                  <FormMessage className="text-red-600 text-sm mt-4" />
                </FormItem>
              )}
            />

            {/* Error Display */}
            {error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">Error: {error.message}</p>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-200">
              <Button
                disabled={step === 0 || isPending}
                type="button"
                variant="outline"
                className="flex items-center space-x-2 px-6 py-3 rounded-xl font-medium border-slate-300 text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => {
                  const previousAnswer = form.getValues(`answers.${step - 1}`);
                  if (!previousAnswer?.answerId) {
                    setAnswer("");
                  } else {
                    setAnswer(previousAnswer.answerId);
                  }
                  setStep((prev) => prev - 1);
                }}
              >
                <ArrowLeft className="size-4" />
                <span>Previous</span>
              </Button>

              <div className="flex items-center space-x-4">
                <span className="text-sm text-slate-500 dark:text-zinc-300">
                  {step + 1} of {questions.length}
                </span>
              </div>

              <Button
                type={step < (questions.length ?? 0) - 1 ? "button" : "submit"}
                disabled={(() => {
                  if (isPending) return true;
                  const currentAnswer = form.getValues(`answers.${step}`);
                  return !currentAnswer?.answerId;
                })()}
                className="flex items-center space-x-2 px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-black dark:to-zinc-950 dark:hover:from-black dark:hover:to-zinc-700 hover:from-blue-700 hover:to-indigo-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => {
                  if (step < (questions.length ?? 0) - 1) {
                    const nextAnswer = form.getValues(`answers.${step + 1}`);
                    if (!nextAnswer?.answerId) {
                      setAnswer("");
                    } else {
                      setAnswer(nextAnswer.answerId);
                    }
                    setStep((prev) => prev + 1);
                  }
                }}
              >
                <span>
                  {step < (questions.length ?? 0) - 1 ? "Next" : "Submit Exam"}
                </span>
                {step < (questions.length ?? 0) - 1 ? (
                  <ArrowRight />
                ) : (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

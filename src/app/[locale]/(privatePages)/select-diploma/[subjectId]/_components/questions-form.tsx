// "use client";
// import React, { useState } from "react";
// import { SubmitHandler, useForm } from "react-hook-form";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { AnswersFields, ExamSchema } from "@/lib/schemas/exam.schema";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import Examduration from "./exam-duration";
// import useCheckQuestion from "../_hooks/use-checkQuesstion";
// import Score from "./score";
// // types
// type QuestionsFormProps = {
//   questions: QuestionResponse[];
// };

// export default function QuestionForm({ questions }: QuestionsFormProps) {
//   // Form
//   const form = useForm<AnswersFields>({
//     resolver: zodResolver(ExamSchema),
//   });

//   // state
//   const [step, setStep] = useState(0);
//   const [answer, setAnswer] = useState("");
//   const [result, setResult] =
//     useState<SuccessfullRespone<CheckResponse> | null>(null);
//   const [showResult, setShowResult] = useState(false);

//   // Mutation
//   const { isPending, checkQuestios } = useCheckQuestion();

//   // variable
//   const currentQuestion = questions[step];

//   // Functions
//   const onSubmit: SubmitHandler<AnswersFields> = (values) => {
//     checkQuestios(values, {
//       onSuccess: (data) => {
//         setResult(data);
//         setShowResult(true);
//         data.WrongQuestions.forEach((question) => {
//           let questionIndex: number | null = null;
//           // find wrong questions id
//           form.getValues("answers").find((answer, j) => {
//             if (answer.questionId === question.QID) {
//               questionIndex = j;
//               return true;
//             } else {
//               return false;
//             }
//           });
//           if (questionIndex) {
//             form.setError(`answers.${questionIndex}`, {
//               message: question.correctAnswer,
//             });
//           }
//         });
//       },
//     });
//   };

//   if (result && showResult === true) {
//     return <Score result={result} setShowResult={setShowResult} />;
//   }

//   return (
//     <div className="flex flex-col gap-14">
//       {/* {result && <p>Your result is {result.total}</p>} */}
//       {/* Header */}
//       <header className="flex justify-between items-center ">
//         {/* Question Number */}
//         <p className="text-sm text-main">
//           Question {step + 1} of {questions.length}
//         </p>
//         {/* Exam duration */}
//         <Examduration
//           duration={questions[0]?.exam.duration ?? 0}
//           onTimeChange={(date) => form.setValue("time", date.getMinutes())}
//         />
//       </header>
//       {/* Steps */}
//       <ul className="flex justify-between">
//         {Array.from({ length: questions.length ?? 0 }, (_, i) => i).map((i) => (
//           <li
//             key={i}
//             className={cn(
//               "size-2 bg-gray-300 rounded-full transition-colors",
//               step >= i && "bg-main"
//             )}
//           ></li>
//         ))}
//       </ul>
//       {/* Form */}
//       <Form {...form}>
//         <form
//           {...form}
//           onSubmit={form.handleSubmit(onSubmit)}
//           className="grow  flex flex-col"
//         >
//           <FormField
//             control={form.control}
//             name={`answers.${step}`}
//             render={({ field }) => (
//               <FormItem>
//                 {/* label */}
//                 <FormLabel className="text-xl font-bold py-2">
//                   {currentQuestion?.question}
//                 </FormLabel>
//                 {/* options */}
//                 <FormControl className="my-2">
//                   <RadioGroup
//                     disabled={isPending}
//                     value={answer}
//                     onValueChange={(value) => {
//                       setAnswer(value);
//                       field.onChange({
//                         questionId: currentQuestion?._id,
//                         correct: value,
//                       });
//                     }}
//                     name={currentQuestion?._id}
//                     className="flex flex-col space-y-1"
//                   >
//                     {currentQuestion?.answers.map((answer) => (
//                       <FormItem
//                         key={answer.key}
//                         className="flex items-center space-x-3 space-y-0 border-2 rounded-lg px-2 bg-slate-200 "
//                       >
//                         <FormControl>
//                           {/* Radio */}
//                           <RadioGroupItem
//                             value={answer.key}
//                             className="border-main bg-white"
//                           />
//                         </FormControl>
//                         {/* label */}
//                         <FormLabel className="font-normal grow  py-4 px-2 ">
//                           {answer.answer}
//                         </FormLabel>
//                       </FormItem>
//                     ))}
//                   </RadioGroup>
//                 </FormControl>
//                 {/* Feedback */}
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           {/* footer */}
//           <div className="grid grid-cols-2 gap-12 mt-12 ">
//             <Button
//               disabled={step == 0 || isPending}
//               type="button"
//               className="text-main bg-white border border-main rounded-[100px] font-medium text-2xl"
//               onClick={() => {
//                 const previousAnswer = form.getValues(`answers.${step - 1}`);

//                 if (!previousAnswer?.correct) {
//                   setAnswer("");
//                 } else {
//                   setAnswer(previousAnswer.correct);
//                 }

//                 setStep((prev) => prev - 1);
//               }}
//             >
//               Back
//             </Button>
//             <Button
//               className="rounded-[100px] font-medium text-2xl"
//               type={`${
//                 step < (questions.length ?? 0) - 1 ? "button" : "submit"
//               }`}
//               disabled={(() => {
//                 if (isPending) return true;
//                 const currentAnswer = form.getValues(`answers.${step}`);
//                 if (currentAnswer?.correct) return false;
//                 return true;
//               })()}
//               onClick={() => {
//                 if (step === (questions.length ?? 0) - 1) return;
//                 const nextAnswer = form.getValues(`answers.${step + 1}`);
//                 if (!nextAnswer?.correct) {
//                   setAnswer("");
//                 } else {
//                   setAnswer(nextAnswer.correct);
//                 }
//                 setStep((prev) => prev + 1);
//               }}
//             >
//               Next
//             </Button>
//           </div>
//         </form>
//       </Form>
//     </div>
//   );
// }

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

import Examduration from "./exam-duration";
import useCheckQuestion from "../_hooks/use-checkQuesstion";
import Score from "./score";
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
  const [result, setResult] =
    useState<SuccessfullRespone<CheckResponse> | null>(null);
  const [showResult, setShowResult] = useState(false);

  // Mutation
  const { isPending, checkQuestios } = useCheckQuestion();

  // variable
  const currentQuestion = questions[step];

  // Functions
  const onSubmit: SubmitHandler<AnswersFields> = (values) => {
    checkQuestios(values, {
      onSuccess: (data) => {
        setResult(data);
        setShowResult(true);
        data.WrongQuestions.forEach((question) => {
          let questionIndex: number | null = null;
          // find wrong questions id
          form.getValues("answers").find((answer, j) => {
            if (answer.questionId === question.QID) {
              questionIndex = j;
              return true;
            } else {
              return false;
            }
          });
          if (questionIndex) {
            form.setError(`answers.${questionIndex}`, {
              message: question.correctAnswer,
            });
          }
        });
      },
    });
  };

  if (result && showResult === true) {
    return <Score result={result} setShowResult={setShowResult} />;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-slate-200/60 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <span className="text-lg font-bold">{step + 1}</span>
            </div>
            <div>
              <h2 className="text-xl font-bold">
                Question {step + 1} of {questions.length}
              </h2>
              <p className="text-blue-100 text-sm">Answer the question below</p>
            </div>
          </div>

          {/* Exam duration */}
          <div className="flex items-center space-x-3">
            <Examduration
              duration={questions[0]?.exam.duration ?? 0}
              onTimeChange={(date) => form.setValue("time", date.getMinutes())}
            />
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-600">Progress</span>
          <span className="text-sm font-medium text-slate-600">
            {Math.round(((step + 1) / questions.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((step + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Form Content */}
      <div className="p-8">
        <Form {...form}>
          <form
            {...form}
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name={`answers.${step}`}
              render={({ field }) => (
                <FormItem>
                  {/* Question */}
                  <div className="mb-8">
                    <FormLabel className="text-2xl md:text-3xl font-bold text-slate-900 leading-relaxed block">
                      {currentQuestion?.question}
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
                          questionId: currentQuestion?._id,
                          correct: value,
                        });
                      }}
                      name={currentQuestion?._id}
                      className="space-y-4"
                    >
                      {currentQuestion?.answers.map((answerOption, index) => (
                        <FormItem key={answerOption.key}>
                          <div className="group">
                            <div className="flex items-center space-x-4 p-6 rounded-2xl border-2 border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200 cursor-pointer">
                              <FormControl>
                                <RadioGroupItem
                                  value={answerOption.key}
                                  className="w-5 h-5 border-2 border-slate-300 text-blue-600 focus:ring-blue-500"
                                />
                              </FormControl>

                              <div className="flex items-center space-x-3 flex-1">
                                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-200">
                                  <span className="text-sm font-semibold text-slate-600 group-hover:text-blue-600">
                                    {String.fromCharCode(65 + index)}
                                  </span>
                                </div>
                                <FormLabel className="text-lg font-medium text-slate-900 cursor-pointer flex-1 leading-relaxed">
                                  {answerOption.answer}
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

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-200">
              <Button
                disabled={step === 0 || isPending}
                type="button"
                variant="outline"
                className="flex items-center space-x-2 px-6 py-3 rounded-xl font-medium border-slate-300 text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span>Previous</span>
              </Button>

              <div className="flex items-center space-x-4">
                <span className="text-sm text-slate-500">
                  {step + 1} of {questions.length}
                </span>
              </div>

              <Button
                type={step < (questions.length ?? 0) - 1 ? "button" : "submit"}
                disabled={(() => {
                  if (isPending) return true;
                  const currentAnswer = form.getValues(`answers.${step}`);
                  return !currentAnswer?.correct;
                })()}
                className="flex items-center space-x-2 px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => {
                  if (step === (questions.length ?? 0) - 1) return;
                  const nextAnswer = form.getValues(`answers.${step + 1}`);
                  if (!nextAnswer?.correct) {
                    setAnswer("");
                  } else {
                    setAnswer(nextAnswer.correct);
                  }
                  setStep((prev) => prev + 1);
                }}
              >
                <span>
                  {step < (questions.length ?? 0) - 1 ? "Next" : "Submit Exam"}
                </span>
                {step < (questions.length ?? 0) - 1 ? (
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
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

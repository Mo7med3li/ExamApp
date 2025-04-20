"use client";
import Image from "next/image";
import React from "react";
import HtmlLogo from "@/assets/imgs/skill-icons_html.png";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useQuery } from "@tanstack/react-query";
import getExams from "../_apis/Exam.api";

export default function DiplomaQuizStartCard({ examId }: { examId: string }) {
  const {
    data: payload,
    isLoading,
    error,
  } = useQuery({
    queryKey: [`subject`, examId],
    queryFn: async () => {
      return getExams({ id: examId });
    },
  });

  return (
    <>
      {isLoading && (
        <div className="w-full h-20 bg-inputColor animate-pulse rounded-xl">
          loading.....
        </div>
      )}

      {payload?.exams.map((exam) => {
        return (
          <section
            key={exam._id}
            className="flex justify-between items-center px-6 py-4 bg-inputColor  rounded-xl shadow-cardDiplomaShadow"
          >
            <div className="flex items-center gap-6 ">
              <Image
                src={HtmlLogo}
                alt="Html logo"
                width={500}
                height={0}
                className="w-20"
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-medium text-base">{exam.title}</h3>
                <span className="text-xs text-gray-500">
                  {exam.numberOfQuestions} Question
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm">{exam.duration} Minutes</span>
              <Dialog>
                <DialogTrigger className="bg-main py-1 px-6 rounded-xl text-white">
                  Start
                </DialogTrigger>
                <DialogContent>
                  <div>
                    <h1 className="font-medium text-center text-lg">
                      Instructions
                    </h1>
                    <ul className="list-disc pl-5 pb-4">
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing.
                      </li>
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing.
                      </li>
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing.
                      </li>
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing.
                      </li>
                    </ul>
                  </div>
                  <DialogHeader>
                    <DialogTitle className="font-medium">
                      {/* Instructions */}
                    </DialogTitle>
                    <DialogDescription>
                      <Button className="bg-main py-1 px-6 rounded-xl w-full mt-10">
                        Start
                      </Button>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </section>
        );
      })}
    </>
  );
}

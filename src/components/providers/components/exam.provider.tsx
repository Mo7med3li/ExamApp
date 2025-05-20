"use client";

import { useAllExams } from "@/app/[locale]/(privatePages)/select-diploma/[subjectId]/_hooks/use-allExams";
// context/ExamContext.tsx

import { createContext, useContext, useState, ReactNode } from "react";

type ExamContextType = {
  searchExamsList: Exam[];
  setSearchExamsList: (exams: Exam[]) => void;
  searchExam: (searchValue: string) => Promise<Exam[]>;
};

const ExamContext = createContext<ExamContextType | undefined>(undefined);

export const ExamProvider = ({ children }: { children: ReactNode }) => {
  // state
  const [searchExamsList, setSearchExamsList] = useState<Exam[]>([]);
  const { Exams } = useAllExams();

  // functions
  async function searchExam(searchValue: string): Promise<Exam[]> {
    const examFilter = Exams?.exams.filter((exam) => {
      return exam.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    setSearchExamsList(examFilter || []);
    return examFilter || [];
  }

  return (
    <ExamContext.Provider
      value={{ searchExamsList, setSearchExamsList, searchExam }}
    >
      {children}
    </ExamContext.Provider>
  );
};

export const useExamContext = () => {
  const context = useContext(ExamContext);
  if (!context) {
    throw new Error("useExamContext must be used within an ExamProvider");
  }
  return context;
};

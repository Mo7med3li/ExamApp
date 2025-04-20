type Subject = {
  _id: string;
  name: string;
  icon: string;
  createdAt: string;
};

type Metadata = {
  currentPage: number;
  numberOfPages: number;
  limit: number;
};

declare type SubjectsResponse = {
  metadata: Metadata;
  subjects: Subject[];
};

declare type Exam = {
  _id: string;
  title: string;
  duration: number;
  subject: string;
  numberOfQuestions: number;
  active: boolean;
  createdAt: string;
};
declare type ExamRespone = {
  metadata: Metadata;
  exams: Exam[];
};

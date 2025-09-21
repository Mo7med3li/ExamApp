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
declare type ExamResponse = {
  metadata: Metadata;
  exams: Exam[];
};

type QuestionResponse = {
  _id: string;
  question: string;
  answers: Answer[];
  type: "single_choice";
  correct: string;
  subject: Subject;
  exam: Exam;
  createdAt: string;
};

type Answer = {
  answer: string;
  key: string;
};

declare type CheckResponse = {
  correct: number;
  wrong: number;
  total: string;
  WrongQuestions: {
    QID: string;
    Question: string;
    inCorrectAnswer: string;
    correctAnswer: string;
    // answers: {};
  }[];
  correctQuestions: {
    QID: string;
    Question: string;
    inCorrectAnswer: string;
    correctAnswer: string;
    // answers: {};
  }[];
};

declare type UserDataResponse = {
  message: string;
  user: AppUser;
};

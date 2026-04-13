type Subject = {
  id: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};

type Metadata = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

declare type SubjectsResponse = {
  data: Subject[];
  metadata: Metadata;
};

declare type Exam = {
  id: string;
  title: string;
  description: string;
  image: string;
  immutable: boolean;
  duration: number;
  diplomaId: string;
  createdAt: string;
  updatedAt: string;
  diploma: {
    id: string;
    title: string;
  };
  _count: {
    questions: number;
  };
};

declare type ExamResponse = {
  metadata: Metadata;
  data: Exam[];
};

declare type Question = {
  id: string;
  text: string;
  examId: string;
  immutable: boolean;
  createdAt: string;
  updatedAt: string;
  answers: {
    id: string;
    text: string;
  }[];
};

type QuestionResponse = {
  questions: Question[];
};

type Answer = {
  answer: string;
  key: string;
};

declare type CheckResponse = {
  payload: {
    submission: {
      id: string;
      examId: string;
      examTitle: string;
      score: number;
      totalQuestions: number;
      correctAnswers: number;
      wrongAnswers: number;
      startedAt: string;
      submittedAt: string;
    };
    analytics: {
      questionId: string;
      questionText: string;
      selectedAnswer: {
        id: string;
        text: string;
      };
      isCorrect: boolean;
      correctAnswer: {
        id: string;
        text: string;
      };
    }[];
  };
};

declare type UserDataResponse = {
  message: string;
  user: AppUser;
};

declare type ExamSubmissions = {
  id: string;
  userId: string;
  examId: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  startedAt: string;
  submittedAt: string;
  createdAt: string;
  updatedAt: string;
  exam: {
    id: string;
    title: string;
    duration: number;
  };
};

declare type ExamSubmissionsResponse = {
  data: ExamSubmissions[];
  metadata: Metadata;
};

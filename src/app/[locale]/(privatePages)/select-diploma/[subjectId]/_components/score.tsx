import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import DetailedResult from "./detailed-result";
import { Trophy, CheckCircle, XCircle, Eye, ArrowLeft } from "lucide-react";

type Result = {
  result: CheckResponse;
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Score({ result, setShowResult }: Result) {
  // state
  const [showDetailedResult, setShowDetailedResult] = useState(false);

  if (showDetailedResult) {
    return (
      <DetailedResult
        result={result}
        setShowDetailedResult={setShowDetailedResult}
      />
    );
  }

  const scorePercentage = Math.floor(parseFloat(result.total));
  const isPassing = scorePercentage >= 70;

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-slate-200/60 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white text-center">
        <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Trophy className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-bold mb-2">Exam Completed!</h2>
        <p className="text-blue-100">Here are your results</p>
      </div>

      <div className="p-8">
        {/* Score Display */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
          {/* Score Circle */}
          <div className="relative">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center shadow-lg">
              <div
                className={`w-40 h-40 rounded-full flex items-center justify-center text-4xl font-bold ${
                  isPassing
                    ? "bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg"
                    : "bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg"
                }`}
              >
                {scorePercentage}%
              </div>
            </div>

            {/* Score Status Badge */}
            <div
              className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-medium ${
                isPassing
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {isPassing ? "Passed" : "Failed"}
            </div>
          </div>

          {/* Score Details */}
          <div className="flex-1 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Correct Answers */}
              <div className="bg-white rounded-2xl p-6 border border-emerald-200/60 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Correct</h3>
                    <p className="text-sm text-slate-600">Right answers</p>
                  </div>
                </div>
                <div className="text-3xl font-bold text-emerald-600">
                  {result.correct}
                </div>
              </div>

              {/* Incorrect Answers */}
              <div className="bg-white rounded-2xl p-6 border border-red-200/60 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Incorrect</h3>
                    <p className="text-sm text-slate-600">Wrong answers</p>
                  </div>
                </div>
                <div className="text-3xl font-bold text-red-600">
                  {result.wrong}
                </div>
              </div>
            </div>

            {/* Performance Message */}
            <div
              className={`p-4 rounded-xl border ${
                isPassing
                  ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                  : "bg-red-50 border-red-200 text-red-800"
              }`}
            >
              <p className="font-medium">
                {isPassing
                  ? "🎉 Congratulations! You passed the exam successfully."
                  : "📚 Keep studying! You can retake this exam to improve your score."}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => setShowResult(false)}
            className="flex items-center space-x-2 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-xl font-medium px-6 py-3"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Exams</span>
          </Button>

          <Button
            onClick={() => setShowDetailedResult(true)}
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-medium px-6 py-3"
          >
            <Eye className="w-4 h-4" />
            <span>View Detailed Results</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

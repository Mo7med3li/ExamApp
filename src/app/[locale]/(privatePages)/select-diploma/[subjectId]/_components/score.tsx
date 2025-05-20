import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import DetailedResult from "./detailed-result";

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

  return (
    <section className="flex flex-col gap-7">
      {/* Header */}
      <h2 className="text-2xl font-medium">Your Score</h2>
      <div className="flex items-center justify-center gap-8">
        {/* Score */}
        <div
          className={`size-40 rounded-full border-2 ${
            result.total === "100%" ? "border-green-600" : "border-red-600"
          } border-2 flex items-center justify-center`}
        >
          {result.total}
        </div>
        <div>
          <div className="text-blue-800 text-2xl flex items-center gap-12 ">
            <p>Correct</p>{" "}
            <p className="border-2 border-blue-700 rounded-full p-1 size-6 flex items-center justify-center text-base">
              {result.correct}
            </p>
          </div>
          <div className="text-red-700 text-2xl flex items-center gap-12 ">
            <p>INCorrect</p>{" "}
            <p className="border-2 border-red-700 rounded-full p-1 size-6 flex items-center justify-center text-base">
              {result.wrong}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-12 ">
        {/* Actions */}
        <Button
          className="text-main bg-white border border-main rounded-[100px] font-medium text-lg"
          onClick={() => {
            setShowResult(false);
          }}
        >
          Back
        </Button>
        <Button
          className="rounded-[100px] font-medium text-lg"
          onClick={() => {
            setShowDetailedResult(true);
          }}
        >
          Show results
        </Button>
      </div>
    </section>
  );
}

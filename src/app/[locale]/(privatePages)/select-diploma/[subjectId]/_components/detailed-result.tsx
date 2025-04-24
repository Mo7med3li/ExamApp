import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";

type Result = {
  result: CheckResponse;
  setShowDetailedResult: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function DetailedResult({
  result,
  setShowDetailedResult,
}: Result) {
  return (
    <section className="grid grid-cols-2 items-center gap-4   ">
      {result.WrongQuestions.map((question) => {
        return (
          <div
            key={question.QID}
            className="border py-4 px-2 border-bordercolor rounded-lg shadow-questionCardShadow "
          >
            <h3 className="font-medium py-1">{question.Question}</h3>
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2 bg-green-200 py-4 px-2 rounded-lg border border-green-500">
                <RadioGroupItem value="" disabled className="bg-green-200 " />
                <Label htmlFor="option-one" className=" w-full">
                  {question.correctAnswer}{" "}
                </Label>
              </div>
              <div className="flex items-center space-x-2  bg-red-200 py-4 px-2 rounded-lg border border-red-500">
                <RadioGroupItem value="" className="bg-red-200" />
                <Label htmlFor="option-two">{question.inCorrectAnswer}</Label>
              </div>
            </RadioGroup>
          </div>
        );
      })}
      <Button
        className="w-100 text-lg font-medium"
        onClick={() => {
          setShowDetailedResult(false);
        }}
      >
        close
      </Button>
    </section>
  );
}

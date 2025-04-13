import React from "react";
import { Button } from "@/components/ui/button";
import DiplomaQuizStartCard from "./_components/DiplomaQuizStartCard";
export default function page() {
  return (
    <section>
      <h2 className="font-medium text-lg mb-8">Front-End Quiz</h2>
      <DiplomaQuizStartCard />
      <section className="mt-10">
        <h2 className="font-medium text-lg mb-8">FrameWork Quiz</h2>
        <DiplomaQuizStartCard />
      </section>
    </section>
  );
}

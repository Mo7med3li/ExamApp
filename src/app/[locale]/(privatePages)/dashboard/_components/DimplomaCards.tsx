"use client";

import React, { useEffect } from "react";

import { useQuery } from "@tanstack/react-query";
import SubjectCard from "./SubjectCard";
import UseSubjects from "../_hooks/Use-subjects";

export default function DimplomaCards() {
  const { isLoading, error, payload } = UseSubjects();
  // loading
  if (isLoading)
    return (
      <div className="w-full h-96 flex items-center justify-center">
        Loading...
      </div>
    );
  if (error) {
    return (
      <div className="w-full h-96 flex items-center justify-center">
        <h1 className="text-red-500 text-xl font-bold">{`${error}`}</h1>
      </div>
    );
  }
  return payload?.subjects.map((subject) => {
    // data
    return <SubjectCard key={subject._id} subject={subject} />;
  });
}

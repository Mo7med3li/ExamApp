import React from "react";
import { fetchSubjects } from "../_apis/subject.api";
import SubjectCard from "./subject-card";

export default async function SubjectList() {
  const payload = await fetchSubjects();

  return payload?.subjects.map((subject) => {
    // data
    return <SubjectCard key={subject._id} subject={subject} />;
  });
}

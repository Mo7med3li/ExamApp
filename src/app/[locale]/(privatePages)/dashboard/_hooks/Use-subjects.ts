import { useQuery } from "@tanstack/react-query";
import React from "react";
import getSubjects from "../_apis/subject.api";

export default function UseSubjects() {
  const {
    isLoading,
    error,
    data: payload,
  } = useQuery({
    queryKey: ["subjects"],
    queryFn: getSubjects,
  });
  return {
    isLoading,
    error,
    payload,
  };
}

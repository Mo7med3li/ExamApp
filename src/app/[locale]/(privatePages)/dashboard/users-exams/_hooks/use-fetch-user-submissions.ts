"use client";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { getUserSubmissions } from "../_api/get-user-submissions.api";

export default function useFetchUserSubmissions() {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");
  const page = pageParam ? parseInt(pageParam, 10) : 1;

  const { data, isLoading, error } = useQuery({
    queryKey: ["user-submissions", page],
    queryFn: () => getUserSubmissions(page),
  });
  return { data, isLoading, error };
}

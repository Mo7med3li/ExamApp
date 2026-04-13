import { useQuery } from "@tanstack/react-query";
import { fetchSubjects } from "../_apis/diploma.api";

export default function UseSubjects() {
  const {
    isLoading,
    error,
    data: payload,
  } = useQuery({
    queryKey: ["subjects"],
    queryFn: fetchSubjects,
  });

  return {
    isLoading,
    error,
    payload,
  };
}

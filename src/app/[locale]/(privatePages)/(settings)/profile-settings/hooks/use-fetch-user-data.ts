import { useQuery } from "@tanstack/react-query";

const useFetchUserData = () => {
  // Queries
  const { data: userData, isLoading } = useQuery<UserDataResponse>({
    queryKey: ["User Data"],
    queryFn: async () => {
      const response = await fetch(`/api/get-user-data`);

      const payload = await response.json();

      return payload;
    },
  });

  return { userData, isLoading };
};

export default useFetchUserData;

import { useQuery } from "@tanstack/react-query";

const useFetchUserData = () => {
  // Queries
  const { data: userData, isLoading } = useQuery({
    queryKey: ["User Data"],
    queryFn: async () => {
      const response = await fetch(`/api/get-user-data`);

      const payload: APIResponse<{ user: AppUser }> = await response.json();

      if (!payload.status) {
        throw new Error(payload.message);
      }

      return payload;
    },
  });

  return { userData, isLoading };
};

export default useFetchUserData;

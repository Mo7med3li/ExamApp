import { UpdateProfileFields } from "@/lib/schemas/update-profile.schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateAccount } from "../actions/update-account.action";
import { toast } from "sonner";

export default function useUpdateProfile() {
  // Query
  const queryClient = useQueryClient();

  // mutation
  const {
    isPending,
    error,
    mutate: updateProfileMutate,
  } = useMutation({
    mutationFn: async (updateProfileValues: UpdateProfileFields) => {
      return await updateAccount(updateProfileValues);
    },

    onSuccess: () => {
      toast.success("Account Updated successfully");
      queryClient.invalidateQueries({ queryKey: ["User Data"] });
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    isPending,
    error,
    updateProfileMutate,
  };
}

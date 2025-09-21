import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteAccount } from "../actions/delete-account.action";
import { signOut } from "next-auth/react";

export default function useDeleteProfile() {
  // mutation
  const {
    isPending,
    error,
    mutate: deleteProfileMutate,
  } = useMutation({
    mutationFn: async () => {
      return await deleteAccount();
    },

    onSuccess: () => {
      toast.success("Account Deleted successfully");
      signOut();
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    isPending,
    error,
    deleteProfileMutate,
  };
}

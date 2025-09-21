import { ChangePasswordField } from "@/lib/schemas/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { changePasswordSubmit } from "../_actions/change-password.action";
import { signOut } from "next-auth/react";

export default function useChangePassword() {
  // mutation
  const {
    isPending,
    error,
    mutate: changePasswordMutate,
  } = useMutation({
    mutationFn: async (changePasswordValues: ChangePasswordField) => {
      return await changePasswordSubmit(changePasswordValues);
    },

    onSuccess: () => {
      toast.success("Password Updated successfully");
      signOut();
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    isPending,
    error,
    changePasswordMutate,
  };
}

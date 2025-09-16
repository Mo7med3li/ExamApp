import { UpdateProfileFields } from "@/lib/schemas/update-profile.schema";
import { useMutation } from "@tanstack/react-query";
import { updateAccount } from "../actions/update-account.action";
import { toast } from "sonner";

export default function useUpdateProfile() {
  // // translation
  // const t = useTranslations();

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

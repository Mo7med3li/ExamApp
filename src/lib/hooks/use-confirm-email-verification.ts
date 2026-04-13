import { ConfirmEmailVerificationField } from "@/lib/schemas/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { submitConfirmEmailVerification } from "@/lib/actions/confirm-email-verification.action";

export default function useConfirmEmailVerification() {
  // translation
  const t = useTranslations();

  // mutation
  const {
    isPending,
    error,
    mutateAsync: confirmEmailVerification,
  } = useMutation({
    mutationFn: async (fields: ConfirmEmailVerificationField) => {
      const result = await submitConfirmEmailVerification(fields);
      return result;
    },

    onSuccess: () => {
      toast.success(t("email-verified-successfully"));
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    isPending,
    error,
    confirmEmailVerification,
  };
}

import { SendEmailVerificationField } from "@/lib/schemas/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { submitSendEmailVerification } from "@/lib/actions/send-email-verification.action";

export default function useSendEmailVerification() {
  // translation
  const t = useTranslations();

  // mutation
  const {
    isPending,
    error,
    mutateAsync: sendEmailVerification,
  } = useMutation({
    mutationFn: async (fields: SendEmailVerificationField) => {
      const result = await submitSendEmailVerification(fields);
      return result;
    },

    onSuccess: () => {
      toast.success(t("verification-email-sent"));
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    isPending,
    error,
    sendEmailVerification,
  };
}

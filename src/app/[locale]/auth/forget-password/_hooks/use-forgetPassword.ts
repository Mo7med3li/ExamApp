"use client";

import { ForgetPasswordField } from "@/lib/schemas/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { submitForgetPassword } from "../../_actions/auth.action";
import { toast } from "sonner";
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function useForgetPassword() {
  // translation
  const t = useTranslations();
  // navigation
  const router = useRouter();
  // mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (forgetPasswordField: ForgetPasswordField) => {
      return await submitForgetPassword(forgetPasswordField);
    },
    onSuccess: () => {
      toast.success(t("sending-code-to-email"));
      setTimeout(() => {
        router.push("auth/verify-code");
      }, 1000);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { isPending, error, forgetPasswordFn: mutate };
}

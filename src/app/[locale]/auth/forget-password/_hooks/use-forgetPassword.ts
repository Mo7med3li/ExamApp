"use client";

import { ForgetPasswordField } from "@/lib/schemas/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { submitForgetPassword } from "../_actions/forget-password.action";

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
    onSuccess: (data, forgetPasswordField) => {
      toast.success(t("sending-code-to-email"));
      setTimeout(() => {
        router.push(`/auth/verify-code?email=${forgetPasswordField.email}`);
      }, 1000);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { isPending, error, forgetPasswordFn: mutate };
}

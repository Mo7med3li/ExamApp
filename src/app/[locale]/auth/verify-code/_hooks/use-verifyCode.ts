"use client";

import { useRouter } from "@/i18n/navigation";
import { VerifyCodeField } from "@/lib/schemas/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { submitVerifyCode } from "../_actions/verfiy-code.acton";

export default function useVerifyCode() {
  // translation
  const t = useTranslations();

  // navigation
  const router = useRouter();

  // mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (verifyCodeField: VerifyCodeField) => {
      return await submitVerifyCode(verifyCodeField);
    },

    onSuccess: () => {
      toast.success(t("going-to-create-password"));
      setTimeout(() => {
        router.push("/auth/set-password");
      }, 1000);
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isPending, error, verifyCodeFn: mutate };
}

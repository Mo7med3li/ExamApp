"use client";
import { loginFields } from "@/lib/schemas/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

export default function useLogin() {
  // translation
  const t = useTranslations();
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (loginFields: loginFields) => {
      const respone = await signIn("credentials", {
        callbackUrl: "/",
        redirect: false,
        email: loginFields.email,
        password: loginFields.password,
      });
      if (respone?.error) {
        toast.error(respone.error);
        throw new Error(respone.error);
      }
      return respone;
    },
    onSuccess: (data) => {
      setTimeout(() => {
        window.location.href = data?.url || "/";
      }, 1000);
      toast.success(`${t("login-success")}`);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { isPending, error, login: mutate };
}

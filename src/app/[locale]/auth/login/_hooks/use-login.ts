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
      const response = await signIn("credentials", {
        callbackUrl: "/dashboard",
        redirect: false,
        email: loginFields.email,
        password: loginFields.password,
      });
      if (response?.error) {
        toast.error(response.error);
        throw new Error(response.error);
      }
      return response;
    },
    onSuccess: (data) => {
      setTimeout(() => {
        window.location.href = data?.url || "/dashboard";
      }, 1000);
      toast.success(`${t("login-success")}`);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { isPending, error, login: mutate };
}

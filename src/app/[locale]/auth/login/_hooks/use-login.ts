"use client";
import { loginFields } from "@/lib/schemas/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { useRouter } from "@/i18n/navigation";

export default function useLogin() {
  // translation
  const t = useTranslations();
  const router = useRouter();
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (loginFields: loginFields) => {
      const respone = await signIn("credentials", {
        callbackUrl: "/dashboard",
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
    onSuccess: () => {
      toast.success(`${t("login-success")}`);
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { isPending, error, login: mutate };
}

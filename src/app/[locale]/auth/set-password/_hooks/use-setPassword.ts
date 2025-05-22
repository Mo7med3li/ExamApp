import { useRouter } from "@/i18n/navigation";
import { ResetPasswordField } from "@/lib/schemas/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { resetPasswordSubmit } from "../_actions/set-password.action";

export default function useResetPassword() {
  // translation
  const t = useTranslations();

  // navigation
  const router = useRouter();

  // mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (resetPasswordField: ResetPasswordField) => {
      return await resetPasswordSubmit(resetPasswordField);
    },
    onSuccess: () => {
      toast.success(t("password-changed-successfully"));
      setTimeout(() => {
        router.push("/auth/login");
      }, 1000);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isPending, error, resetPasswordFn: mutate };
}

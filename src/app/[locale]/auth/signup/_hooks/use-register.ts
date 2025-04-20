import { RegisterFields } from "@/lib/schemas/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { submitRegister } from "../../_actions/auth.action";

import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { toast } from "sonner";

export default function useRegister() {
  // navigation
  const router = useRouter();
  // translation
  const t = useTranslations();
  // mutation
  const {
    isPending,
    error,
    mutate: register,
  } = useMutation({
    mutationFn: async (registerFields: RegisterFields) => {
      return await submitRegister(registerFields);
    },
    onSuccess: () => {
      toast.success(t("account-created-sucessfully"));

      setTimeout(() => {
        router.push("/auth/login");
      }, 1000);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    isPending,
    error,
    register,
  };
}

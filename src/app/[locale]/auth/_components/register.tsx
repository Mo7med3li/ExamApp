import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const RegisterLink = () => {
  // Translation
  const t = useTranslations();

  // variables
  const signupText = t("dont-have-an-account");
  return (
    <p className="text-center text-sm text-muted-foreground">
      {/* Register */}
      {signupText}
      <Link prefetch href="/auth/signup" className="text-primary px-1">
        {t("create-yours")}
      </Link>
    </p>
  );
};
export default RegisterLink;

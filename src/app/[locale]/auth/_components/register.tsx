import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const RegisterLink = () => {
  // Translation
  const t = useTranslations();

  // variables
  const signupText = t("dont-have-an-account");
  return (
    <p className="text-center text-sm text-gray-500">
      {/* Register */}
      {signupText}
      <Link prefetch href="/auth/signup" className="text-blue-600">
        {t("create-yours")}
      </Link>
    </p>
  );
};
export default RegisterLink;

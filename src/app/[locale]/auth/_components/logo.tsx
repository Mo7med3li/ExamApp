import { FolderCode } from "lucide-react";
import { useTranslations } from "next-intl";

const Logo = () => {
  // Translations
  const t = useTranslations();
  return (
    <div className="flex items-center text-primary gap-3 rtl:flex-row-reverse w-fit">
      <FolderCode size={30} className="text-blue-600" />
      <p className="font-semibold text-xl text-blue-600">{t("exam-app")}</p>
    </div>
  );
};

export default Logo;

import React from "react";

import { useTranslations } from "next-intl";
import {
  BookOpenCheck,
  Brain,
  FolderCode,
  RectangleEllipsis,
} from "lucide-react";

export default function Welcome() {
  // Translatiions
  const t = useTranslations();

  // variables
  const slugs = [
    {
      title: t("tailored-diplomas"),
      description: t("Diplomas"),
      icon: Brain,
    },
    {
      title: t("focused-exams"),
      description: t("topics"),
      icon: BookOpenCheck,
    },
    {
      title: t("smart-multi-step-forms"),
      description: t("Diplomas"),
      icon: RectangleEllipsis,
    },
  ];
  return (
    <section className="bg-[#EFF6FF] backdrop-blur-[200px] flex justify-center lg:col-span-1 flex-col items-center">
      <section className="w-[500px]">
        <div className="flex items-center text-blue-600 gap-3 rtl:flex-row-reverse w-fit">
          <FolderCode size={40} className="text-blue-600" />
          <p className="font-semibold text-xl">{t("exam-app")}</p>
        </div>
        <section className="flex flex-col justify-around  gap-20 py-28">
          <p className="text-gray-800 font-bold text-3xl">{t("slug")}</p>
          <section className="flex flex-col gap-9">
            {slugs.map((slug) => (
              <div className="flex gap-5 rtl:flex-row-reverse" key={slug.title}>
                <div className="size-9 border flex items-center p-1 border-blue-600">
                  <slug.icon className="text-blue-600" size={24} />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-semibold text-xl text-blue-600">
                    {slug.title}
                  </h3>
                  <p className="text-gray-700">{slug.description}</p>
                </div>
              </div>
            ))}
          </section>
        </section>
      </section>
    </section>
  );
}

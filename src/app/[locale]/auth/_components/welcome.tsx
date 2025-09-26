import React from "react";

import { useTranslations } from "next-intl";
import { BookOpenCheck, Brain, RectangleEllipsis } from "lucide-react";
import Logo from "./logo";

export default function Welcome() {
  // Translation
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
    <section className="bg-blue-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 backdrop-blur-[200px] flex justify-center lg:col-span-1 flex-col items-center">
      <section className="w-full max-w-md sm:max-w-lg lg:max-w-xl px-4 sm:px-6 lg:px-8 py-6">
        <Logo />
        <section className="flex flex-col justify-around gap-10 sm:gap-14 lg:gap-16 py-10 sm:py-14 lg:py-16">
          <p className="font-bold text-2xl sm:text-3xl text-slate-900 dark:text-slate-100">
            {t("slug")}
          </p>
          <section className="flex flex-col gap-9">
            {slugs.map((slug) => (
              <div className="flex gap-5 rtl:flex-row-reverse" key={slug.title}>
                <div className="size-9 border flex items-center p-1 border-slate-300 dark:border-slate-600">
                  <slug.icon
                    className="text-slate-600 dark:text-slate-400"
                    size={24}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-semibold text-lg sm:text-xl text-slate-900 dark:text-slate-100">
                    {slug.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {slug.description}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </section>
      </section>
    </section>
  );
}

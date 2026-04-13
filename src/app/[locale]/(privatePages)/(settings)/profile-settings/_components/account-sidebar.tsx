"use client";

import { Lock, User2, Info } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const AccountSidebar = () => {
  // Translations
  const t = useTranslations();
  const locale = useLocale();

  // Variables
  const items = [
    {
      title: t("profile"),
      url: "/profile-settings",
      icon: User2,
      description: "Personal information",
    },
    {
      title: t("change-password"),
      url: "/change-password",
      icon: Lock,
      description: "Security settings",
    },
    {
      title: "Account Info",
      url: "/account",
      icon: Info,
      description: "Account details",
    },
  ];

  // Navigation
  const pathName = usePathname();

  return (
    <div className="bg-slate-50 dark:bg-zinc-800 rounded-2xl shadow-sm border border-slate-200/60 dark:border-zinc-700/60 p-6">
      <div className="space-y-2">
        {items.map((item) => (
          <Link
            key={item.title}
            className={cn(
              "group flex items-center p-4 rounded-xl transition-all duration-200",
              pathName === item.url
                ? "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-zinc-900/20 dark:to-neutral-900/20 border border-blue-200/60 dark:border-zinc-700/60 shadow-sm"
                : "hover:bg-slate-50 dark:hover:bg-zinc-700/50 hover:shadow-sm",
              locale === "ar" ? "flex-row-reverse" : "",
            )}
            href={item.url}
          >
            <div
              className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200",
                pathName === item.url
                  ? "bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-zinc-500 dark:to-neutral-500 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400",
              )}
            >
              <item.icon className="w-5 h-5" />
            </div>
            <div
              className={cn(
                "ml-3 flex-1",
                locale === "ar" ? "ml-0 mr-3 text-right" : "",
              )}
            >
              <div
                className={cn(
                  "font-medium transition-colors duration-200",
                  pathName === item.url
                    ? "text-blue-900 dark:text-blue-100"
                    : "text-slate-900 dark:text-slate-100 group-hover:text-slate-900 dark:group-hover:text-slate-100",
                )}
              >
                {item.title}
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300">
                {item.description}
              </div>
            </div>
            {pathName === item.url && (
              <div className="w-2 h-2 bg-blue-600 dark:bg-zinc-400 rounded-full animate-pulse"></div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AccountSidebar;

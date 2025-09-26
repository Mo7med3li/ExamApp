"use client";

import { Lock, LogOut, User2, Info } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { signOut } from "next-auth/react";

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
    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-700/60 p-6">
      <div className="space-y-2">
        {items.map((item) => (
          <Link
            key={item.title}
            className={cn(
              "group flex items-center p-4 rounded-xl transition-all duration-200",
              pathName === item.url
                ? "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200/60 dark:border-blue-700/60 shadow-sm"
                : "hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:shadow-sm",
              locale === "ar" ? "flex-row-reverse" : ""
            )}
            href={item.url}
          >
            <div
              className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200",
                pathName === item.url
                  ? "bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400"
              )}
            >
              <item.icon className="w-5 h-5" />
            </div>
            <div
              className={cn(
                "ml-3 flex-1",
                locale === "ar" ? "ml-0 mr-3 text-right" : ""
              )}
            >
              <div
                className={cn(
                  "font-medium transition-colors duration-200",
                  pathName === item.url
                    ? "text-blue-900 dark:text-blue-100"
                    : "text-slate-900 dark:text-slate-100 group-hover:text-slate-900 dark:group-hover:text-slate-100"
                )}
              >
                {item.title}
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300">
                {item.description}
              </div>
            </div>
            {pathName === item.url && (
              <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div>
            )}
          </Link>
        ))}
      </div>

      {/* Logout Button */}
      <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-700/60">
        <button
          onClick={() => signOut()}
          className="w-full flex items-center p-4 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 hover:shadow-sm transition-all duration-200 group"
        >
          <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all duration-200">
            <LogOut className="w-5 h-5" />
          </div>
          <div
            className={cn(
              "ml-3 flex-1 text-left",
              locale === "ar" ? "ml-0 mr-3 text-right" : ""
            )}
          >
            <div className="font-medium text-slate-900 dark:text-slate-100 group-hover:text-red-900 dark:group-hover:text-red-100">
              {t("logout")}
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-red-600 dark:group-hover:text-red-400">
              Sign out of your account
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AccountSidebar;

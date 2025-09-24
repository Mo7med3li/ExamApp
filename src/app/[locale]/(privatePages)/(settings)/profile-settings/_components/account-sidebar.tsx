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
    <div className="bg-white dark:bg-stone-500 rounded-2xl shadow-sm border border-slate-200/60 p-6">
      <div className="space-y-2">
        {items.map((item) => (
          <Link
            key={item.title}
            className={cn(
              "group flex items-center p-4 rounded-xl transition-all duration-200",
              pathName === item.url
                ? "bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60 shadow-sm"
                : "hover:bg-slate-50 hover:shadow-sm",
              locale === "ar" ? "flex-row-reverse" : ""
            )}
            href={item.url}
          >
            <div
              className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200",
                pathName === item.url
                  ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg"
                  : "bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600"
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
                    ? "text-blue-900"
                    : "text-slate-900 group-hover:text-slate-900"
                )}
              >
                {item.title}
              </div>
              <div className="text-sm text-slate-500 group-hover:text-slate-600">
                {item.description}
              </div>
            </div>
            {pathName === item.url && (
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            )}
          </Link>
        ))}
      </div>

      {/* Logout Button */}
      <div className="mt-8 pt-6 border-t border-slate-200/60">
        <button
          onClick={() => signOut()}
          className="w-full flex items-center p-4 rounded-xl hover:bg-red-50 hover:shadow-sm transition-all duration-200 group"
        >
          <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all duration-200">
            <LogOut className="w-5 h-5" />
          </div>
          <div
            className={cn(
              "ml-3 flex-1 text-left",
              locale === "ar" ? "ml-0 mr-3 text-right" : ""
            )}
          >
            <div className="font-medium text-slate-900 group-hover:text-red-900">
              {t("logout")}
            </div>
            <div className="text-sm text-slate-500 group-hover:text-red-600">
              Sign out of your account
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AccountSidebar;

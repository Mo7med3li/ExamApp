"use client";
import { GraduationCap, BookOpen, Settings, LogOut } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useTranslations } from "use-intl";
import { cn } from "@/lib/utils";
import { signOut } from "next-auth/react";
import Image from "next/image";
import logo from "@/assets/imgs/Final Logo 1.png";
import { ModeToggle } from "@/components/common/mode-toggle";

interface AppSidebarProps {
  onMobileClose?: () => void;
}

export function AppSidebar({ onMobileClose }: AppSidebarProps) {
  // Translations
  const t = useTranslations();
  const locale = useLocale();

  // Menu items.
  const items = [
    {
      title: t("dashboard"),
      url: "/dashboard",
      icon: GraduationCap,
      description: "Browse diplomas",
    },
    {
      title: "All Exams",
      url: "/all-exams",
      icon: BookOpen,
      description: "View all exams",
    },
    {
      title: t("account-settings"),
      url: "/profile-settings",
      icon: Settings,
      description: "Manage account",
    },
  ];

  // Navigation
  const pathName = usePathname();

  const handleLinkClick = () => {
    // Close mobile menu when link is clicked
    if (onMobileClose) {
      onMobileClose();
    }
  };

  return (
    <div className="w-80 bg-slate-50 dark:bg-zinc-900 border-r border-slate-200/60 dark:border-slate-700/60 flex flex-col h-full transition-colors duration-300">
      {/* Header */}
      <div className="p-6 border-b border-slate-200/60 dark:border-slate-700/60">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-black/20 dark:to-zinc-300 rounded-xl flex items-center justify-center shadow-lg">
            <Image
              alt="Elevate logo"
              src={logo}
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Exam Platform
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Learning Dashboard
            </p>
          </div>
          <ModeToggle />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6">
        <div className="space-y-2">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.url}
              onClick={handleLinkClick}
              className={cn(
                "group flex items-center p-4 rounded-xl transition-all duration-200",
                pathName === item.url
                  ? "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-zinc-900/20 dark:to-neutral-900/20 border border-blue-200/60 dark:border-zinc-700/60 shadow-sm"
                  : "hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:shadow-sm",
                locale === "ar" ? "flex-row-reverse" : ""
              )}
            >
              <div
                className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200",
                  pathName === item.url
                    ? "bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-black/30 dark:to-zinc-600 text-white shadow-lg"
                    : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-zinc-400 group-hover:bg-blue-100 dark:group-hover:bg-zinc-900/30 group-hover:text-blue-600 dark:group-hover:text-zinc-400"
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
                      : "text-slate-900 dark:text-zinc-100 group-hover:text-zinc-900 dark:group-hover:text-zinc-100"
                  )}
                >
                  {item.title}
                </div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
                  {item.description}
                </div>
              </div>
              {pathName === item.url && (
                <div className="w-2 h-2 bg-blue-600 dark:bg-zinc-400 rounded-full animate-pulse"></div>
              )}
            </Link>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-zinc-200/60 dark:border-zinc-700/60">
        <button
          onClick={() => signOut()}
          className="w-full flex items-center p-4 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 hover:shadow-sm transition-all duration-200 group"
        >
          <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center group-hover:bg-red-600 dark:group-hover:bg-red-600 group-hover:text-white transition-all duration-200">
            <LogOut className="w-5 h-5" />
          </div>
          <div
            className={cn(
              "ml-3 flex-1 text-left",
              locale === "ar" ? "ml-0 mr-3 text-right" : ""
            )}
          >
            <div className="font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-red-900 dark:group-hover:text-red-100">
              {t("logout")}
            </div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-red-600 dark:group-hover:text-red-400">
              Sign out of your account
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

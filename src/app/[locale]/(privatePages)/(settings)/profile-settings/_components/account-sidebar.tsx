"use client";

import { Lock, LogOut, User2 } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
    },
    {
      title: t("change-password"),
      url: "/change-password",
      icon: Lock,
    },
    {
      title: "Account Info",
      url: "/account",
      icon: User2,
    },
  ];

  // Navigation
  const pathName = usePathname();
  return (
    <aside className="h-full flex flex-col p-6 col-span-1 bg-white">
      <section className="flex flex-col justify-between h-full">
        <div>
          {items.map((item) => (
            <Link
              key={item.title}
              className={cn(
                `flex items-center gap-3 p-3`,
                pathName === item.url
                  ? "bg-blue-100  text-blue-600"
                  : "text-gray-500",
                locale === "ar" ? "flex-row-reverse" : ""
              )}
              href={item.url}
            >
              {item.icon && (
                <item.icon
                  className={cn(
                    pathName === item.url ? " text-blue-600" : "text-gray-500"
                  )}
                />
              )}
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
        <Button
          className="bg-red-50 w-full text-red-600 text-start hover:bg-red-400 hover:text-white"
          icon={() => <LogOut />}
          onClick={() => signOut()}
        >
          {t("logout")}
        </Button>
      </section>
    </aside>
  );
};
export default AccountSidebar;

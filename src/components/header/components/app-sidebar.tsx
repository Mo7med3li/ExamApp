"use client";
import { History, LayoutDashboard, LogOut } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import logo from "@/assets/imgs/Final Logo 1.png";

import { Link, usePathname } from "@/i18n/navigation";
import { signOut, useSession } from "next-auth/react";
import { useLocale } from "next-intl";
import { useTranslations } from "use-intl";
import { cn } from "@/lib/utils";

export function AppSidebar() {
  // Translations
  const t = useTranslations();
  const locale = useLocale();
  // session
  const { data: session } = useSession();

  // Menu items.
  const items = [
    {
      title: t("dashboard"),
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: t("all-exams"),
      url: "/all-exams",
      icon: History,
    },
    ...(session?.user.role === "user"
      ? [
          {
            title: t("quiz-history"),
            url: "/",
            icon: History,
          },
        ]
      : []),
    {
      title: t("logout"),
      url: "",
      icon: LogOut,
    },
  ];

  // Navigation
  const pathName = usePathname();
  return (
    <Sidebar side={locale === "ar" ? "right" : "left"}>
      <SidebarContent className="pt-10 ps-8">
        <SidebarGroup>
          <SidebarGroupLabel>
            {/* Logo */}
            <Image
              alt="Elevate logog"
              src={logo}
              width={500}
              height={0}
              className="w-36"
            />
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-14">
            <SidebarMenu className="space-y-5">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="py-3">
                    {/* Navigation */}
                    <Link
                      className={cn(
                        `text-xl w-48 flex justify-between`,
                        pathName === item.url ? "bg-main text-white" : "",
                        locale === "ar" ? "flex-row-reverse" : ""
                      )}
                      onClick={() => {
                        if (item.title === "Logout") {
                          signOut();
                        }
                      }}
                      href={item.url}
                    >
                      {item.icon && (
                        <item.icon
                          className={`${
                            pathName === item.url ? " text-white" : "text-main"
                          }`}
                        />
                      )}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

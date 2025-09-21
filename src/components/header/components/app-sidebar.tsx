"use client";
import { GraduationCap, User } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import logo from "@/assets/imgs/Final Logo 1.png";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useTranslations } from "use-intl";
import { cn } from "@/lib/utils";
import Logo from "@/app/[locale]/auth/_components/logo";
import FooterSidebar from "./footer-sidebar";

export function AppSidebar() {
  // Translations
  const t = useTranslations();
  const locale = useLocale();

  // Menu items.
  const items = [
    {
      title: t("dashboard"),
      url: "/dashboard",
      icon: GraduationCap,
    },
    {
      title: t("account-settings"),
      url: "/profile-settings",
      icon: User,
    },
  ];

  // Navigation
  const pathName = usePathname();

  return (
    <Sidebar
      side={locale === "ar" ? "right" : "left"}
      className="w-[300px] bg-blue-50"
    >
      <SidebarContent className="pt-5 px-6">
        {/* Header */}
        <SidebarHeader className="flex flex-col gap-3 items-start">
          {/* Logo */}
          <Image
            alt="Elevate logo"
            src={logo}
            width={500}
            height={0}
            className="w-40 object-cover"
          />
          <Logo />
        </SidebarHeader>

        <SidebarGroupContent className="mt-10">
          <SidebarMenu className="space-y-5">
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild className="py-3">
                  {/* Navigation */}
                  <Link
                    className={cn(
                      `flex items-center`,
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
                          pathName === item.url
                            ? " text-blue-600"
                            : "text-gray-500"
                        )}
                      />
                    )}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarContent>
      <SidebarFooter className="py-10 px-6">
        <FooterSidebar />
      </SidebarFooter>
    </Sidebar>
  );
}

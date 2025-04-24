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

export function AppSidebar() {
  // session
  const { data: session } = useSession();
  // Menu items.
  const items = [
    {
      title: "dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "All Exams",
      url: "/all-exams",
      icon: History,
    },
    {
      title: `${session?.user.role === "admin" ? null : "Quiz History"}`,
      url: `${session?.user.role === "admin" ? null : "/"}`,
      icon: session?.user.role === "admin" ? null : History,
    },
    {
      title: "Logout",
      url: "",
      icon: LogOut,
    },
  ];
  const pathName = usePathname();
  return (
    <Sidebar>
      <SidebarContent className="pt-10 ps-8">
        <SidebarGroup>
          <SidebarGroupLabel>
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
                      className={`text-xl  w-48 flex justify-between  ${
                        pathName === item.url ? "bg-main text-white" : ""
                      } `}
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

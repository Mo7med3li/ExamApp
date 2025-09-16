import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@/i18n/navigation";

import { EllipsisVertical, LogOut, User } from "lucide-react";
import { signOut } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

export default function MenuItem() {
  // Translations
  const t = useTranslations();
  const locale = useLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 focus:outline-none">
        <EllipsisVertical size={24} color="#71717A" />
        <span className="sr-only">Toggle menu</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align={locale === "ar" ? "end" : "start"}
        className="shadow-[0 4px 9px 0 #00000040] rounded-xl border w-56 p-[5px"
      >
        <DropdownMenuItem className="flex cursor-pointer gap-2 p-[5px] border-b">
          {/* Go to Account Page */}
          <Link
            href={"/dashboard/account"}
            className="flex items-center py-2 px-[6px] justify-center gap-2 font-medium"
          >
            <User width={18} height={18} /> {t("account")}
          </Link>
        </DropdownMenuItem>

        {/* Logout Btn */}
        <DropdownMenuItem className="flex cursor-pointer gap-2 ">
          <Button
            className="w-full justify-start p-0 text-red-600    font-medium"
            variant={"ghost"}
            onClick={() => {
              signOut();
            }}
          >
            <LogOut /> {t("log-out")}
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

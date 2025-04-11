import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export default function NavbarAuth() {
  const t = useTranslations();
  return (
    <ul className="flex items-center gap-12  py-12 px-20  justify-end">
      <li>
        {" "}
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="English" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Arabic">Arabic</SelectItem>
              <SelectItem value="English">English</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </li>
      <li>
        <Link href="/auth/login" className="text-main text-xl font-bold">
          {t("sign-in")}
        </Link>
      </li>
      <li>
        <Link
          href="/auth/signup"
          className="border border-bordercolor rounded-2xl text-main px-5 py-2 text-xl font-medium"
        >
          {t("register")}
        </Link>
      </li>
    </ul>
  );
}

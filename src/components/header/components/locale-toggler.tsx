"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Locale, useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function LocaleToggler() {
  // Navigation
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // translation
  const locale = useLocale() as keyof typeof language;

  // variables
  const language = {
    en: "English",
    ar: "Arabic",
  };
  const toggleLocale = (locale: Locale) => {
    router.push(`${pathname}?${searchParams.toString()}`, {
      locale,
    });
  };
  return (
    <Select onValueChange={toggleLocale}>
      <SelectTrigger>
        <SelectValue placeholder={language[locale]} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {routing.locales.map((locale) => (
            <SelectItem value={locale} key={locale}>
              {/* <Link
                locale={locale}
                href={`${pathname}${searchParams.toString()}`}
              >
                {" "}
                {language[locale]}
              </Link> */}
              {language[locale]}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

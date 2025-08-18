"use client";

import React from "react";
import LocaleToggler from "./locale-toggler";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import profile from "@/assets/imgs/Rectangle 289.png";
import { AddQuiz } from "@/app/[locale]/(privatePages)/dashboard/_components/add-quiz";
import { useExamContext } from "@/components/providers/components/exam.provider";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

export default function Searchbar() {
  // Translations
  const t = useTranslations();
  // Context
  const { searchExam, setSearchValue } = useExamContext();

  // Form
  const form = useForm({
    defaultValues: {
      searchValue: "",
    },
  });

  // Session
  const session = useSession();

  return (
    <section className="flex items-center gap-4 py-2">
      <div className="flex-grow">
        {" "}
        <Input
          {...form.register("searchValue")}
          onChange={(e) => {
            searchExam(e.target.value);
            setSearchValue(e.target.value);
          }}
          placeholder={t("search-quiz")}
          type="search"
          className="shadow-inputShadow w-full focus-visible:border-main focus-visible:outline-none"
        />
      </div>
      {session?.data?.user?.role === "admin" ? <AddQuiz /> : ""}

      {/* Image profile */}
      <div>
        <Image
          alt="profile image"
          src={profile}
          width={500}
          height={0}
          className="w-16"
        />
      </div>
      {/* Translation */}
      <LocaleToggler />
    </section>
  );
}

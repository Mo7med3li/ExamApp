"use client";
import React from "react";
import LocaleToggler from "./locale-toggler";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import profile from "@/assets/imgs/Rectangle 289.png";
import { AddQuiz } from "@/app/[locale]/(privatePages)/dashboard/_components/add-quiz";
import { useExamContext } from "@/components/providers/components/exam.provider";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";

export default function Searchbar() {
  // context
  const { searchExam } = useExamContext();
  // form
  const form = useForm({
    defaultValues: {
      searchValue: "",
    },
  });

  // session
  const session = useSession();
  return (
    <section className="flex items-center  gap-4 py-2">
      <div className="flex-grow">
        {" "}
        <Input
          {...form.register("searchValue")}
          onChange={(e) => {
            console.log("search", e.target.value);

            searchExam(e.target.value);
          }}
          placeholder="Search Quiz "
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

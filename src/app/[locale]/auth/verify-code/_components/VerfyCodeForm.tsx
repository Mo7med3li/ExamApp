"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import SocialLinks from "../../_components/SocialLinks";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { VerifyCodeField, verifyCodeSchema } from "@/lib/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { submitVerifyCode } from "../../_actions/auth.action";
import { useLocale, useTranslations } from "next-intl";

export default function VerfyCodeForm() {
  // translation
  const t = useTranslations();
  // form
  const form = useForm<VerifyCodeField>({
    defaultValues: {
      resetCode: "",
    },
    resolver: zodResolver(verifyCodeSchema),
  });
  const onSubmit: SubmitHandler<VerifyCodeField> = (values) => {
    submitVerifyCode(values);
  };
  return (
    <div className="bg-white w-[500px]  rounded-md  flex flex-col gap-12 py-10">
      <h2 className="text-2xl font-bold">{t("verfiy-code")}</h2>
      <Form {...form}>
        <form
          className="flex flex-col gap-8"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            name="resetCode"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                {/* label */}
                <FormLabel className="sr-only">{t("code")}</FormLabel>
                {/* field */}
                <FormControl>
                  <Input
                    placeholder={t("code")}
                    {...field}
                    className={`${
                      form.formState.errors.resetCode
                        ? "focus-visible:border-red-300"
                        : ""
                    }`}
                  />
                </FormControl>
                {/* feedback */}
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="w-full rounded-2xl h-14 text-lg "
            disabled={form.formState.isSubmitted && !form.formState.isValid}
          >
            {t("verfiy")}
          </Button>
          <div className=" text-end">
            <p className=" text-base">
              {t("receive-code")}
              <Link
                className="text-main text-base px-1"
                href={""}
                onClick={form.handleSubmit(onSubmit)}
              >
                {t("resend")}
              </Link>
            </p>
          </div>
        </form>
      </Form>
      <SocialLinks />
    </div>
  );
}

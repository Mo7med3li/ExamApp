"use client";

import React from "react";
import SocialLinks from "../../_components/social-links";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ForgetPasswordField,
  forgetPasswordSchema,
} from "@/lib/schemas/auth.schema";
import { useTranslations } from "next-intl";
import useForgetPassword from "../_hooks/use-forgetPassword";

export default function ForgetPasswordForm() {
  // translation
  const t = useTranslations();

  // form
  const form = useForm<ForgetPasswordField>({
    defaultValues: { email: "" },
    resolver: zodResolver(forgetPasswordSchema),
  });

  // mutaion
  const { isPending, error, forgetPasswordFn } = useForgetPassword();
  const onSubmit: SubmitHandler<ForgetPasswordField> = (values) => {
    forgetPasswordFn(values);
  };

  return (
    <div className="bg-white w-[500px]  rounded-md  flex flex-col gap-12 py-10">
      <h2 className="text-2xl font-bold">{t("forget-your-password")}</h2>
      <Form {...form}>
        <form
          className="flex flex-col gap-8 "
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              // label
              <FormItem>
                <FormLabel className="sr-only">{t("email")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("email")}
                    type="email"
                    {...field}
                    className={`${
                      form.formState.errors.email
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
          {/* error msg */}
          {error && <p className="text-red-500 italic ">{error.message}</p>}
          <Button
            className="w-full rounded-2xl h-14 text-lg "
            disabled={
              isPending ||
              (form.formState.isSubmitted && !form.formState.isValid)
            }
          >
            {t("send-code")}
          </Button>
        </form>
      </Form>
      <SocialLinks />
    </div>
  );
}

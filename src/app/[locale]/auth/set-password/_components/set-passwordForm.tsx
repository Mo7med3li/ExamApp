"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  ResetPasswordField,
  resetPasswordSchema,
} from "@/lib/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import useResetPassword from "../_hooks/use-setPassword";
import { cn } from "@/lib/utils";

export default function SetPasswordForm() {
  // translation
  const t = useTranslations();

  // mutation
  const { isPending, error, resetPasswordFn } = useResetPassword();

  // form
  const form = useForm<ResetPasswordField>({
    defaultValues: {
      email: "",
      newPassword: "",
    },
    resolver: zodResolver(resetPasswordSchema),
  });

  // submit handler
  const onSubmit: SubmitHandler<ResetPasswordField> = (values) => {
    resetPasswordFn(values);
  };
  return (
    <div className="w-full max-w-md sm:max-w-lg rounded-md flex flex-col gap-12 py-8 px-4 sm:px-6 shadow-cardShadow">
      <h2 className="text-2xl font-bold"> {t("set-password")}</h2>
      <Form {...form}>
        <FormProvider {...form}>
          <form
            className="flex flex-col gap-8"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  {/* label */}
                  <FormLabel>{t("email-0")}</FormLabel>
                  {/* field */}
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={t("email")}
                      className={cn(
                        form.formState.errors.email &&
                          "focus-visible:border-red-300"
                      )}
                    />
                  </FormControl>
                  {/* feedback */}
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Password */}
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  {/* label */}
                  <FormLabel>{t("password")}</FormLabel>
                  {/* field */}
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={t("create-password")}
                      type="password"
                      className={cn(
                        form.formState.errors.newPassword &&
                          "focus-visible:border-red-300"
                      )}
                    />
                  </FormControl>
                  {/* feedback */}
                  <FormMessage />
                </FormItem>
              )}
            />
            {error && (
              <p className="text-destructive italic">{error.message}</p>
            )}
            <Button
              className="w-full h-14 text-lg "
              disabled={
                isPending ||
                (form.formState.isSubmitted && !form.formState.isValid)
              }
            >
              {t("set-password")}
            </Button>
          </form>
        </FormProvider>
      </Form>
    </div>
  );
}

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
import useResetPassword from "../_hooks/use-resetPassword";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import useForgetPassword from "../../forget-password/_hooks/use-forgetPassword";

export default function ResetPasswordForm() {
  // translation
  const t = useTranslations();

  // mutation
  const { isPending, error, resetPasswordFn } = useResetPassword();

  const { forgetPasswordFn } = useForgetPassword();

  // form
  const form = useForm<ResetPasswordField>({
    defaultValues: {
      token: "",
      newPassword: "",
      confirmPassword: "",
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
              name="token"
              render={({ field }) => (
                <FormItem>
                  {/* label */}
                  <FormLabel>Token</FormLabel>
                  {/* field */}
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={
                        "Enter the token that provided at the email link"
                      }
                      className={cn(
                        form.formState.errors.token &&
                          "focus-visible:border-red-300",
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
                  <FormLabel>Password</FormLabel>
                  {/* field */}
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Create password"
                      type="password"
                      className={cn(
                        form.formState.errors.newPassword &&
                          "focus-visible:border-red-300",
                      )}
                    />
                  </FormControl>
                  {/* feedback */}
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* confirm password */}

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  {/* label */}
                  <FormLabel>{t("confirm-password")}</FormLabel>
                  {/* field */}
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={t("confirm-password")}
                      type="password"
                      className={cn(
                        form.formState.errors.confirmPassword &&
                          "focus-visible:border-red-300",
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

            <div className="text-end">
              <p className="text-base text-muted-foreground">
                {t("receive-code")}
                <Link
                  className="text-primary text-base px-1"
                  href={""}
                  onClick={() => {
                    const email = localStorage.getItem("email");
                    if (email) {
                      forgetPasswordFn({ email });
                    }
                  }}
                >
                  {t("resend")}
                </Link>
              </p>
            </div>
          </form>
        </FormProvider>
      </Form>
    </div>
  );
}

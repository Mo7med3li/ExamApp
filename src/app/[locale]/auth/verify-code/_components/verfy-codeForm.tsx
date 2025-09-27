"use client";

import { Button } from "@/components/ui/button";
import React from "react";
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
import { useTranslations } from "next-intl";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import RegisterLink from "../../_components/register";
import useForgetPassword from "../../forget-password/_hooks/use-forgetPassword";
import useVerifyCode from "../_hooks/use-verifyCode";

export default function VerifyCodeForm({ email }: { email: string }) {
  // translation
  const t = useTranslations();

  // mutation
  const { isPending, error, verifyCodeFn } = useVerifyCode();
  const { forgetPasswordFn } = useForgetPassword();

  // form
  const form = useForm<VerifyCodeField>({
    defaultValues: {
      resetCode: "",
    },
    resolver: zodResolver(verifyCodeSchema),
  });

  const onSubmit: SubmitHandler<VerifyCodeField> = (values) => {
    verifyCodeFn(values);
  };

  return (
    <div className="w-full max-w-md sm:max-w-lg rounded-md flex flex-col gap-12 py-8 px-4 sm:px-6 shadow-cardShadow">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">{t("verfiy-code")}</h2>
        <p className="text-muted-foreground">{t("code-otp")}</p>
        <div className="flex items-center gap-2">
          <p className="text-muted-foreground">{email}.</p>
          <Link
            className="text-primary font-medium"
            href={"/auth/forget-password"}
          >
            {t("edit")}
          </Link>
        </div>
      </div>
      <Form {...form}>
        <form
          className="flex flex-col gap-8"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="flex items-center justify-center">
            <FormField
              control={form.control}
              name="resetCode"
              render={({ field }) => (
                <FormItem dir="ltr">
                  <FormLabel className="sr-only">One-Time Password</FormLabel>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup className="space-x-4">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <InputOTPSlot key={i} index={i} />
                        ))}
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* error msg */}
          {error && <p className="text-destructive italic">{error.message}</p>}
          <Button
            className="w-full h-14 text-lg "
            disabled={
              isPending ||
              (form.formState.isSubmitted && !form.formState.isValid)
            }
          >
            {t("verfiy")}
          </Button>
          <div className="text-end">
            <p className="text-base text-muted-foreground">
              {t("receive-code")}
              <Link
                className="text-primary text-base px-1"
                href={""}
                onClick={() => {
                  forgetPasswordFn({ email });
                }}
              >
                {t("resend")}
              </Link>
            </p>
          </div>
          <RegisterLink />
        </form>
      </Form>
    </div>
  );
}

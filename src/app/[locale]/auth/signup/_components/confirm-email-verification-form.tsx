"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import {
  ConfirmEmailVerificationField,
  confirmEmailVerificationSchema,
} from "@/lib/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import useConfirmEmailVerification from "@/lib/hooks/use-confirm-email-verification";
import useSendEmailVerification from "@/lib/hooks/use-send-email-verification";
import { cn } from "@/lib/utils";

interface ConfirmEmailVerificationFormProps {
  email: string;
  onNext: () => void;
  onBack: () => void;
}

export default function ConfirmEmailVerificationForm({
  email,
  onNext,
  onBack,
}: ConfirmEmailVerificationFormProps) {
  const { isPending, confirmEmailVerification } = useConfirmEmailVerification();
  const { isPending: isResending, sendEmailVerification } =
    useSendEmailVerification();
  const [canResend, setCanResend] = useState(true);
  const [countdown, setCountdown] = useState(0);

  const t = useTranslations();

  const form = useForm<ConfirmEmailVerificationField>({
    defaultValues: {
      email: email,
      code: "",
    },
    resolver: zodResolver(confirmEmailVerificationSchema),
  });

  const onSubmit: SubmitHandler<ConfirmEmailVerificationField> = async (
    values,
  ) => {
    try {
      await confirmEmailVerification(values);
      onNext();
    } catch (_error) {
      console.error(_error);
    }
  };

  const handleResendCode = async () => {
    if (!canResend) return;

    await sendEmailVerification({ email });
    setCanResend(false);
    setCountdown(60);

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="w-full max-w-md sm:max-w-lg rounded-md flex flex-col gap-4 p-4 sm:p-6 shadow-cardShadow">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          {t("verify-email")}
        </h2>
        <p className="text-muted-foreground">
          {t("verification-code-sent-to")} {email}
        </p>
      </div>

      <Form {...form}>
        <FormProvider {...form}>
          <form
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("verification-code")}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      maxLength={6}
                      className={cn(
                        form.formState.errors.code &&
                          "focus-visible:border-red-300",
                        "text-center text-lg tracking-widest",
                      )}
                      placeholder="000000"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="w-full h-14 text-lg"
              type="submit"
              disabled={
                isPending ||
                (form.formState.isSubmitted && !form.formState.isValid)
              }
            >
              {isPending ? t("verifying") : t("verify-code")}
            </Button>

            <div className="flex flex-col gap-2">
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={handleResendCode}
                disabled={!canResend || isResending}
              >
                {isResending
                  ? t("sending")
                  : canResend
                    ? t("resend-code")
                    : `${t("resend-code")} (${countdown}s)`}
              </Button>

              <Button
                type="button"
                variant="ghost"
                className="w-full"
                onClick={onBack}
              >
                {t("back")}
              </Button>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                {t("already-have-an-account")}
                <a
                  className="text-primary text-sm px-1 cursor-pointer"
                  href="/auth/login"
                >
                  {t("sign-in")}
                </a>
              </p>
            </div>
          </form>
        </FormProvider>
      </Form>
    </div>
  );
}

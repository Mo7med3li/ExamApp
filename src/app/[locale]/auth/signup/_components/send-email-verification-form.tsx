"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
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
  SendEmailVerificationField,
  sendEmailVerificationSchema,
} from "@/lib/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import useSendEmailVerification from "@/lib/hooks/use-send-email-verification";
import { cn } from "@/lib/utils";

interface SendEmailVerificationFormProps {
  onNext: (email: string) => void;
}

export default function SendEmailVerificationForm({
  onNext,
}: SendEmailVerificationFormProps) {
  const { isPending, sendEmailVerification } = useSendEmailVerification();
  const t = useTranslations();

  const form = useForm<SendEmailVerificationField>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(sendEmailVerificationSchema),
  });

  const onSubmit: SubmitHandler<SendEmailVerificationField> = async (
    values,
  ) => {
    try {
      await sendEmailVerification(values);
      onNext(values.email);
    } catch (_error) {
      console.error(_error);
    }
  };

  return (
    <div className="w-full max-w-md sm:max-w-lg rounded-md flex flex-col gap-4 p-4 sm:p-6 shadow-cardShadow">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          {t("verify-email")}
        </h2>
        <p className="text-muted-foreground">{t("enter-email-to-verify")}</p>
      </div>

      <Form {...form}>
        <FormProvider {...form}>
          <form
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("email")}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      className={cn(
                        form.formState.errors.email &&
                          "focus-visible:border-red-300",
                      )}
                      placeholder={t("enter-your-email")}
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
              {isPending ? t("sending") : t("send-verification-code")}
            </Button>

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

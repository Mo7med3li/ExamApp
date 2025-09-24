"use client";

import React from "react";
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
import { MoveRight } from "lucide-react";
import RegisterLink from "../../_components/register";
import { cn } from "@/lib/utils";

export default function ForgetPasswordForm() {
  // translation
  const t = useTranslations();

  // form
  const form = useForm<ForgetPasswordField>({
    defaultValues: { email: "" },
    resolver: zodResolver(forgetPasswordSchema),
  });

  // mutation
  const { isPending, error, forgetPasswordFn } = useForgetPassword();
  const onSubmit: SubmitHandler<ForgetPasswordField> = (values) => {
    forgetPasswordFn(values);
  };

  return (
    <div className="w-full max-w-md sm:max-w-lg rounded-md flex flex-col gap-4 py-8 px-4 sm:px-6 shadow-cardShadow">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">{t("forget-your-password")}</h2>
        <p className="text-muted-foreground">
          Don’t worry, we will help you recover your account.
        </p>
      </div>
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
                <FormLabel>{t("email-0")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("email")}
                    type="email"
                    {...field}
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
          {/* error msg */}
          {error && <p className="text-destructive italic ">{error.message}</p>}
          <Button
            className="w-full h-14 text-lg "
            disabled={
              isPending ||
              (form.formState.isSubmitted && !form.formState.isValid)
            }
            icon={() => <MoveRight />}
          >
            {t("send-code")}
          </Button>
          {/* Register Link */}
          <RegisterLink />
        </form>
      </Form>
    </div>
  );
}

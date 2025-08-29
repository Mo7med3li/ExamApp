"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFields, loginSchema } from "@/lib/schemas/auth.schema";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useTranslations } from "next-intl";
import useLogin from "../_hooks/use-login";
import { Link } from "@/i18n/navigation";
import RegisterLink from "../../_components/register";
import { cn } from "@/lib/utils";

export function LoginForm() {
  // mutation
  const { isPending, login, error } = useLogin();

  // translation
  const t = useTranslations();

  // form
  const form = useForm<loginFields>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(loginSchema),
  });

  // Submit handler
  const onSubmit: SubmitHandler<loginFields> = async (values) => {
    login(values);
  };

  return (
    <div className="bg-white w-[500px] rounded-md  flex flex-col gap-8">
      {/* Headline */}
      <h2 className="text-3xl font-bold">{t("sign-in")}</h2>
      <Form {...form}>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* email */}
            <FormField
              name="email"
              control={form.control}
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
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  {/* label */}
                  <FormLabel>{t("password")}</FormLabel>
                  {/* field */}
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={t("password")}
                      type="password"
                      className={cn(
                        form.formState.errors.password &&
                          "focus-visible:border-red-300"
                      )}
                    />
                  </FormControl>
                  {/* feedback */}
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Error */}
            {error && <p className="text-red-400"> {error.message}</p>}
            <div className=" text-end">
              {/* Forget Password */}
              <Link
                href={"/auth/forget-password"}
                className="text-main text-base"
              >
                {t("recover-password")}
              </Link>
            </div>
            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full py-6 text-sm bg-blue-600 font-medium hover:bg-blue-700 "
              disabled={
                isPending ||
                (form.formState.isSubmitted && !form.formState.isValid)
              }
            >
              {t("sign-in")}
            </Button>
            {/* Register Link */}
            <RegisterLink />{" "}
          </form>
        </FormProvider>
      </Form>
    </div>
  );
}

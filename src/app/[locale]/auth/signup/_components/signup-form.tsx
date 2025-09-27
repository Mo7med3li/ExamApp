"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
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
import { RegisterFields, registerSchema } from "@/lib/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import useRegister from "../_hooks/use-register";
import { cn } from "@/lib/utils";

export default function SignupForm() {
  // mutatuin
  const { isPending, error, register } = useRegister();

  // translation
  const t = useTranslations();

  // form
  const form = useForm<RegisterFields>({
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: zodResolver(registerSchema),
  });
  const onSubmit: SubmitHandler<RegisterFields> = async (values) => {
    await register(values);
  };
  return (
    <div className=" w-full max-w-md sm:max-w-lg rounded-md flex flex-col gap-4 p-4 sm:p-6 shadow-cardShadow">
      <h2 className="text-2xl font-bold text-foreground">{t("sign-up")}</h2>
      <Form {...form}>
        <FormProvider {...form}>
          <form
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="items-center gap-3 grid lg:grid-cols-2">
              {/* first name */}
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="lg:col-span-1">
                    {/* Label */}
                    <FormLabel>{t("first-name")}</FormLabel>
                    {/* field */}
                    <FormControl>
                      <Input
                        {...field}
                        className={cn(
                          form.formState.errors.firstName &&
                            "focus-visible:border-red-300"
                        )}
                        placeholder={t("first-name")}
                      />
                    </FormControl>
                    {/* feedback */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* last name */}
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="lg:col-span-1">
                    {/* Label */}
                    <FormLabel>{t("last-name")}</FormLabel>
                    {/* Field*/}
                    <FormControl>
                      <Input
                        {...field}
                        className={cn(
                          form.formState.errors.lastName &&
                            "focus-visible:border-red-300"
                        )}
                        placeholder={t("last-name")}
                      />
                    </FormControl>
                    {/* Feedback */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* username */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>{t("user-name")}</FormLabel>
                  {/* Field*/}
                  <FormControl>
                    <Input
                      {...field}
                      className={cn(
                        form.formState.errors.username &&
                          "focus-visible:border-red-300"
                      )}
                      placeholder={t("user-name")}
                    />
                  </FormControl>
                  {/* Feedback */}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("email-0")}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      className={cn(
                        form.formState.errors.email &&
                          "focus-visible:border-red-300"
                      )}
                      placeholder={t("email")}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* phone */}
            <div className="mt-3">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-start">
                    <FormLabel className="mb-1 text-sm font-semibold text-muted-foreground">
                      {t("phone-number")}
                    </FormLabel>
                    <FormControl className="w-full">
                      <Input {...field} placeholder={t("phone-number")} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("password")}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      className={cn(
                        form.formState.errors.password &&
                          "focus-visible:border-red-300"
                      )}
                      placeholder={t("password")}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm password */}
            <FormField
              control={form.control}
              name="rePassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("confirm-password")}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      className={cn(
                        form.formState.errors.rePassword &&
                          "focus-visible:border-red-300"
                      )}
                      placeholder={t("confirm-password")}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* error msg */}
            {error && (
              <p className="text-destructive italic my-2">{error.message}</p>
            )}

            {/* submit */}
            <Button
              className="w-full h-14 text-lg "
              type="submit"
              disabled={
                isPending ||
                (form.formState.isSubmitted && !form.formState.isValid)
              }
            >
              {t("create-account")}
            </Button>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                {t("already-have-an-account")}
                <Link
                  className="text-primary text-sm px-1"
                  href={"/auth/login"}
                >
                  {t("sign-in")}
                </Link>
              </p>
            </div>
          </form>
        </FormProvider>
      </Form>
    </div>
  );
}

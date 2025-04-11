"use client";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import SocialLinks from "../../_components/SocialLinks";
import PasswordInput from "../../_components/PasswordInput";
import { signIn } from "next-auth/react";
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
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";

export function LoginForm({ locale }: { locale: string }) {
  const t = useTranslations();
  const form = useForm<loginFields>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<loginFields> = async (values) => {
    const respone = await signIn("credentials", {
      callbackUrl: "/",
      redirect: false,
      email: values.email,
      password: values.password,
    });
    console.log(respone);

    if (respone?.ok) {
      setTimeout(() => {
        window.location.href = respone.url || "/";
      }, 1000);
      toast.success(`${t("login-success")}`);
      return;
    }
    toast.error(respone?.error!);
  };
  return (
    <div className="bg-white w-[500px]  rounded-md  flex flex-col gap-8">
      <h2 className="text-2xl font-bold">{t("sign-in")}</h2>
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
                  <FormLabel className="sr-only">{t("email")}</FormLabel>
                  {/* field */}
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={t("email")}
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
            <PasswordInput
              name="password"
              placeholder={t("enter-password")}
              locale={locale}
            />
            <div className=" text-end">
              <Link
                href={"/auth/forget-password"}
                className="text-main text-base  "
              >
                {t("recover-password")}
              </Link>
            </div>
            <Button
              type="submit"
              className="w-full rounded-2xl h-14 text-lg "
              disabled={form.formState.isSubmitted && !form.formState.isValid}
            >
              {t("sign-in")}
            </Button>
            {/* <Button
              variant="outline"
              className="w-ful "
              onClick={() => {
                signIn("google", { callbackUrl: "/" });
              }}
              type="button"
            >
              Login with Google
            </Button> */}
          </form>
        </FormProvider>
      </Form>
      <SocialLinks />
    </div>
  );
}

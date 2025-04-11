"use client";
import React from "react";
import SocialLinks from "../../_components/SocialLinks";
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
import { submitForgetPassword } from "../../_actions/auth.action";

export default function ForgetPasswordForm() {
  const form = useForm<ForgetPasswordField>({
    defaultValues: { email: "" },
    resolver: zodResolver(forgetPasswordSchema),
  });

  const onSubmit: SubmitHandler<ForgetPasswordField> = (values) => {
    submitForgetPassword(values);
  };

  return (
    <div className="bg-white w-[500px]  rounded-md  flex flex-col gap-12 py-10">
      <h2 className="text-2xl font-bold">Forget Your Password?</h2>
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
                <FormLabel className="sr-only">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
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

          <Button
            className="w-full rounded-2xl h-14 text-lg "
            disabled={form.formState.isSubmitted && !form.formState.isValid}
          >
            Send Code
          </Button>
        </form>
      </Form>
      <SocialLinks />
    </div>
  );
}

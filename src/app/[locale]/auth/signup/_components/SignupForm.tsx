"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import SocialLinks from "../../_components/SocialLinks";
import PasswordInput from "../../_components/PasswordInput";
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
import { submitRegister } from "../../_actions/auth.action";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const router = useRouter();
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
  {
  }
  const onSubmit: SubmitHandler<RegisterFields> = async (values) => {
    await submitRegister(values);
  };
  return (
    <div className="bg-white w-[500px]  rounded-md flex flex-col gap-8">
      <h2 className="text-2xl font-bold">Sign up</h2>
      <Form {...form}>
        <FormProvider {...form}>
          <form
            className="flex flex-col gap-8  "
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {/* username */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel className="sr-only">Username</FormLabel>
                  {/* Field*/}
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="User name"
                      className={`${
                        form.formState.errors.username
                          ? "focus-visible:border-red-300"
                          : ""
                      }`}
                    />
                  </FormControl>
                  {/* Feedback */}
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* first name */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel className="sr-only">First Name</FormLabel>
                  {/* field */}
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="First name"
                      className={`${
                        form.formState.errors.firstName
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
            {/* last name */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel className="sr-only">Last name</FormLabel>
                  {/* Field*/}
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Last name"
                      className={`${
                        form.formState.errors.lastName
                          ? "focus-visible:border-red-300"
                          : ""
                      }`}
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
                  <FormLabel className="sr-only">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="email"
                      className={`${
                        form.formState.errors.email
                          ? "focus-visible:border-red-300"
                          : ""
                      }`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* password */}
            <PasswordInput placeholder="Password" name="password" />
            {/* rePassword */}
            <PasswordInput placeholder="Confirm Password" name="rePassword" />
            {/* phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                // label
                <FormItem>
                  <FormLabel className="sr-only">Phone</FormLabel>
                  {/* field */}
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Phone"
                      className={`${
                        form.formState.errors.phone
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

            <div className=" text-center">
              <p className=" text-base">
                Already have an account?
                <Link className="text-main text-base px-1" href={"/auth/login"}>
                  Login
                </Link>
              </p>
            </div>
            {/* submit */}
            <Button
              className="w-full rounded-2xl h-14 text-lg "
              type="submit"
              disabled={form.formState.isSubmitted && !form.formState.isValid}
            >
              Create Account
            </Button>
          </form>
        </FormProvider>
      </Form>

      <SocialLinks />
    </div>
  );
}

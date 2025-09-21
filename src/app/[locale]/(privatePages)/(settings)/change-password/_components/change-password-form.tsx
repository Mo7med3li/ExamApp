"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  changePasswordSchema,
  ChangePasswordField,
} from "@/lib/schemas/auth.schema";
import useChangePassword from "../_hooks/use-change-password";
const ChangePasswordForm = () => {
  // Form
  const form = useForm<ChangePasswordField>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      oldPassword: "",
      password: "",
      rePassword: "",
    },
  });

  // Hooks
  const { changePasswordMutate, isPending } = useChangePassword();

  // Submit Handler
  const onSubmit = async (values: ChangePasswordField) => {
    await changePasswordMutate(values);
    console.log(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="oldPassword"
          render={({ field }) => (
            <FormItem>
              {/* Field */}
              <FormLabel>Current Password</FormLabel>
              <FormControl>
                {/* Input */}
                <Input
                  type="password"
                  placeholder="Enter your current password"
                  {...field}
                />
              </FormControl>
              {/* Feedback */}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              {/* Label */}
              <FormLabel>New Password</FormLabel>
              <FormControl>
                {/* Field */}
                <Input
                  type="password"
                  placeholder="Enter your new password"
                  {...field}
                />
              </FormControl>
              {/* Feedback */}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="rePassword"
          render={({ field }) => (
            <FormItem>
              {/* Label */}
              <FormLabel>Confirm New Password</FormLabel>
              <FormControl>
                {/* Field */}
                <Input
                  type="password"
                  placeholder="Confirm your new password"
                  {...field}
                />
              </FormControl>
              {/* Feedback */}
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={form.formState.isSubmitting || !form.formState.isValid}
          spinner={form.formState.isSubmitting || isPending}
        >
          Update Password
        </Button>
      </form>
    </Form>
  );
};

export default ChangePasswordForm;

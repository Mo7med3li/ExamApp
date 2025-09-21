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
const ChangePasswordForm = () => {
  // Form
  const form = useForm<ChangePasswordField>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  // Submit Handler
  const onSubmit = async (data: ChangePasswordField) => {
    try {
      console.log("Change password data:", data);
    } catch (error) {
      console.error("Error changing password:", error);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="currentPassword"
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
          name="newPassword"
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
          name="confirmNewPassword"
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
          disabled={form.formState.isSubmitting}
          spinner={form.formState.isSubmitting}
        >
          Update Password
        </Button>
      </form>
    </Form>
  );
};

export default ChangePasswordForm;

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  UpdateProfileFields,
  updateProfileSchema,
} from "@/lib/schemas/update-profile.schema";
import useUpdateProfile from "../hooks/use-update-profile";

export function UserProfileForm() {
  // session
  const { data: session } = useSession();

  // Form
  const form = useForm<UpdateProfileFields>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      firstName: session?.user?.firstName,
      lastName: session?.user?.lastName,
      username: session?.user?.username,
      // email: session?.user.email,
      phone: session?.user?.phone,
    },
  });

  // Hooks
  const { updateProfileMutate } = useUpdateProfile();
  const onSubmit = async (values: UpdateProfileFields) => {
    updateProfileMutate(values);
    console.log(values);
  };

  function onDelete() {
    toast.success("Your account has been deleted successfully.");
  }

  return (
    <Card className="w-full max-w-2xl mt-8">
      <CardHeader>
        <h2 className="text-2xl font-semibold">Profile Settings</h2>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      {/* Label */}
                      <FormLabel>First Name</FormLabel>
                      {/* Field */}
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      {/* Feedback */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {form.formState.errors.firstName && (
                  <p className="text-sm text-destructive">
                    {form.formState.errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <FormField
                  name="lastName"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      {/* Label */}
                      <FormLabel>Last Name</FormLabel>
                      {/* Field */}
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      {/* Feedback */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {form.formState.errors.lastName && (
                  <p className="text-sm text-destructive">
                    {form.formState.errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <FormField
                name="username"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    {/* Label */}
                    <FormLabel>Username</FormLabel>
                    {/* Field */}
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    {/* Feedback */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              {form.formState.errors.username && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.username.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <FormField
                name=""
                disabled
                render={({ field }) => (
                  <FormItem>
                    {/* Label */}
                    <FormLabel>Email</FormLabel>
                    {/* Field */}
                    <FormControl>
                      <Input {...field} value={session?.user.email} />
                    </FormControl>
                    {/* Feedback */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-2">
              <FormField
                name="phone"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    {/* Label */}
                    <FormLabel>Phone</FormLabel>
                    {/* Field */}

                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    {/* Feedback */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              {form.formState.errors.phone && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.phone.message}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                type="button"
                variant="destructive"
                onClick={onDelete}
                className="w-full bg-red-50 text-red-600 hover:text-white"
              >
                Delete My Account
              </Button>
              <Button type="submit" className="sm:ml-auto w-full">
                Save Changes
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

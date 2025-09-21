"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
import DeleteModel from "./delete-model";
import { useEffect } from "react";
import { UserProfileFormSkeleton } from "@/components/skeleton/account/account-form.skeleton";
import useFetchUserData from "../hooks/use-fetch-user-data";

export function UserProfileForm() {
  const { userData, isLoading } = useFetchUserData();

  // Form
  const form = useForm<UpdateProfileFields>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      phone: "",
    },
  });

  // Hooks
  const { updateProfileMutate } = useUpdateProfile();
  const onSubmit = async (values: UpdateProfileFields) => {
    updateProfileMutate(values);
  };

  useEffect(() => {
    if (userData) {
      form.reset({
        firstName: userData.user.firstName,
        lastName: userData.user.lastName,
        username: userData.user.username,
        phone: userData.user.phone,
      });
    }
  }, [userData, form]);

  return (
    <Card className="w-full max-w-2xl mt-8">
      <CardHeader>
        <h2 className="text-2xl font-semibold">Profile Settings</h2>
      </CardHeader>
      <CardContent>
        {!isLoading ? (
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
                <FormLabel>Email</FormLabel>
                <Input value={userData?.user.email} disabled />
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
                <DeleteModel />
                <Button type="submit" className="sm:ml-auto w-full">
                  Save Changes
                </Button>
              </div>
            </form>
          </Form>
        ) : (
          <UserProfileFormSkeleton />
        )}
      </CardContent>
    </Card>
  );
}

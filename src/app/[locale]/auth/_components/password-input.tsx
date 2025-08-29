"use client";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useLocale } from "next-intl";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

export default function PasswordInput({
  placeholder,
  name,
}: {
  placeholder?: string;
  name: string;
}) {
  // Translations
  const locale = useLocale();

  // Forms
  const { control, formState } = useFormContext();

  // States
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="relative">
        <FormField
          control={control}
          name={name}
          render={({ field }) => (
            // label
            <FormItem>
              <FormLabel>{placeholder}</FormLabel>
              {/* field */}
              <FormControl>
                <Input
                  {...field}
                  placeholder={placeholder}
                  type={showPassword ? "text" : "password"}
                  className={`${
                    formState.errors?.[name]
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
          type="button"
          size="icon"
          className={`absolute  bottom-0  bg-none shadow-none ${
            locale === "ar" ? "left-0" : "right-0"
          }  `}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </Button>
      </div>
    </>
  );
}

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
import { useLocale, useTranslations } from "next-intl";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

export default function PasswordInput({
  placeholder,
  name,
}: {
  placeholder?: string;
  name: string;
}) {
  const locale = useLocale();
  const t = useTranslations();
  const { control, formState } = useFormContext();
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
              <FormLabel className="sr-only">{t("password")}</FormLabel>
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
          variant="ghost"
          size="icon"
          className={`absolute  top-3 ${
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

import React from "react";
import { LoginForm } from "./_components/LoginForm";
export default function page({ params: { locale } }: RouteProps) {
  return <LoginForm locale={locale} />;
}

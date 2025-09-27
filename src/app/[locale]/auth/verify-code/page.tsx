import React from "react";
import VerifyCodeForm from "./_components/verfy-codeForm";

export default function page({
  searchParams,
}: {
  searchParams: { email: string | undefined };
}) {
  // Form
  return <VerifyCodeForm email={searchParams.email || ""} />;
}

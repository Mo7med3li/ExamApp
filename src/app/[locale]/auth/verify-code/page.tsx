import React from "react";
import VerfyCodeForm from "./_components/verfy-codeForm";

export default function page({
  searchParams,
}: {
  searchParams: { email: string | undefined };
}) {
  // Form
  return <VerfyCodeForm email={searchParams.email || ""} />;
}

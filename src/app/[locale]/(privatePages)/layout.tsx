import { AppSidebar } from "@/components/header/components/app-sidebar";
import React from "react";

export default function dashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full flex">
      <AppSidebar />
      <section className="w-full">
        <section className="pe-6 ps-12">{children}</section>
      </section>
    </main>
  );
}

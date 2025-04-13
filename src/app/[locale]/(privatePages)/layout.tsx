import { AppSidebar } from "@/components/header/components/AppSidebar";
import Searchbar from "@/components/header/components/Searchbar";

import React from "react";
export default function dashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full flex">
      <AppSidebar />
      <section className=" w-full">
        <section className=" container">
          <Searchbar />
          {children}
        </section>
      </section>
    </main>
  );
}

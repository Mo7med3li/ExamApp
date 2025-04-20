import React, { ReactNode } from "react";
import Welcome from "./_components/Welcome";
import NavbarAuth from "./_components/NavbarAuth";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main className="grid grid-cols-5  h-screen">
      {/* Welcome section */}
      <Welcome />
      <section className=" col-span-3  ">
        <div>
          {/* Header */}
          <NavbarAuth />
        </div>
        <div className="  flex items-center justify-center  p-10  ">
          {/* form */}
          {children}
          <Toaster />
        </div>
      </section>
    </main>
  );
}

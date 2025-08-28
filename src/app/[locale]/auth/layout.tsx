import React, { ReactNode } from "react";
import Welcome from "./_components/welcome";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 h-screen w-full">
      {/* Welcome section */}
      <Welcome />
      <section className="lg:col-span-1">
        <div className="  flex items-center justify-center p-10 h-full ">
          {/* form */}
          {children}
          <Toaster />
        </div>
      </section>
    </main>
  );
}

import React, { ReactNode } from "react";
import Welcome from "./_components/welcome";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen dark:bg-zinc-900 text-slate-900 dark:text-slate-100">
      {/* Welcome section */}
      <Welcome />
      <section className="lg:col-span-1 flex">
        <div className="flex items-center justify-center p-6 sm:p-10 h-full w-full min-h-screen">
          {/* form */}
          {children}
          <Toaster />
        </div>
      </section>
    </main>
  );
}

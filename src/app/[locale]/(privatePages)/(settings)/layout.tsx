import React from "react";

import PageHeader from "../_components/page-header";
import AccountSidebar from "./profile-settings/_components/account-sidebar";
import { User2 } from "lucide-react";

export default function ProfileSettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex w-full h-screen bg-gray-50 p-6 shadow-lg">
      {/* Content */}
      <div className="flex-1 flex flex-col">
        <div className="rounded-3xl">
          <PageHeader title="Account Settings" icon={User2} />
        </div>
        {/* Header */}
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[800px]">
          {/* Sidebar */}
          <AccountSidebar />
          <section className="p-6 bg-white col-span-3 h-full">
            {children}
          </section>
        </section>
      </div>
    </main>
  );
}

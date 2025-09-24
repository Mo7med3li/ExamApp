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
    <div className="space-y-8">
      {/* Header */}
      <PageHeader
        title="Account Settings"
        icon={User2}
        subtitle="Manage your account preferences and security settings"
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <AccountSidebar />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

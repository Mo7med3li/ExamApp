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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <section className="bg-white/80 backdrop-blur-sm shadow-2xl border border-white/20 rounded-3xl overflow-hidden">
          {/* Header */}
          <PageHeader title="Account Settings" icon={User2} />

          {/* Content */}
          <div className="p-6 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <AccountSidebar />
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">{children}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

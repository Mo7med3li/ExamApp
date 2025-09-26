"use client";
import { AppSidebar } from "@/components/header/components/app-sidebar";
import { BookOpen, MenuIcon, X } from "lucide-react";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden w-full transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-transparent dark:from-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-400/20 to-transparent dark:from-indigo-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-transparent dark:from-purple-400/5 rounded-full blur-2xl"></div>
      </div>

      <div className="flex h-screen overflow-hidden relative z-10">
        {/* Mobile Sidebar Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Modern Sidebar */}
        <div
          className={`${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 lg:z-auto transition-transform duration-300 ease-in-out lg:flex lg:flex-shrink-0`}
        >
          <AppSidebar onMobileClose={() => setIsMobileMenuOpen(false)} />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden fixed top-4 left-4 z-50">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
          >
            {isMobileMenuOpen ? (
              <X className="text-slate-900 dark:text-slate-100" size={20} />
            ) : (
              <MenuIcon
                className="text-slate-900 dark:text-slate-100"
                size={20}
              />
            )}
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden bg-slate-50 dark:bg-slate-900">
          {/* Top Navigation Bar */}
          <header className="bg-slate-50 dark:bg-slate-900 backdrop-blur-lg border-b border-slate-200/60 dark:border-slate-700/60 shadow-sm">
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <BookOpen size={20} color="white" />
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                      Exam Platform
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Your learning dashboard
                    </p>
                  </div>
                </div>

                {/* User Profile Quick Access */}
                <div className="flex items-center space-x-3">
                  <div className="size-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-sm p-1">
                      {session?.user.firstName.slice(0, 1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Content Area */}
          <main className="flex-1 overflow-auto bg-slate-50 dark:bg-slate-900">
            <div className="p-6">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}

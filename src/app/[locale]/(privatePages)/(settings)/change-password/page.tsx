import React from "react";
import ChangePasswordForm from "./_components/change-password-form";

export default function ChangePasswordPage() {
  return (
    <div className="p-6 bg-slate-50 dark:bg-zinc-900">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Change Password
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Update your password to keep your account secure.
          </p>
        </div>

        <ChangePasswordForm />
      </div>
    </div>
  );
}

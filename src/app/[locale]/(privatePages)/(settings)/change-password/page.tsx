import React from "react";
import ChangePasswordForm from "./_components/change-password-form";

export default function ChangePasswordPage() {
  return (
    <div className="p-6">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Change Password</h1>
          <p className="text-gray-600 mt-2">
            Update your password to keep your account secure.
          </p>
        </div>

        <ChangePasswordForm />
      </div>
    </div>
  );
}

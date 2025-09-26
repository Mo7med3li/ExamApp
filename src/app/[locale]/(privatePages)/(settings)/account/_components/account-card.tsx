import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  Mail,
  Phone,
  Shield,
  CheckCircle,
  XCircle,
  UserCheck,
  Crown,
  User,
} from "lucide-react";
import useFetchUserData from "../../profile-settings/hooks/use-fetch-user-data";
import stringToHslColor from "@/lib/utils/string-to-color";
import ProfileInfoSkeleton from "@/components/skeleton/account/account-info.skeleton";

function getRoleConfig(role: string) {
  switch (role.toLowerCase()) {
    case "admin":
      return { variant: "destructive" as const, icon: Crown };
    default:
      return { variant: "outline" as const, icon: User };
  }
}

const AccountCard = () => {
  // Hooks
  const { userData, isLoading } = useFetchUserData();

  //   Check if not info
  if (!userData?.user) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <p className="text-slate-500 dark:text-slate-400">
            Unable to load account information
          </p>
        </div>
      </div>
    );
  }

  //   Variables
  const user = userData.user;
  const roleConfig = getRoleConfig(user.role);
  const RoleIcon = roleConfig.icon;

  return isLoading ? (
    <ProfileInfoSkeleton />
  ) : (
    <div className="p-6 space-y-6 bg-slate-50 dark:bg-slate-900">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Account Information
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          View and manage your personal account details and settings.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="lg:col-span-2 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              Profile Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start space-x-6">
              <div
                className="size-20 flex items-center justify-center rounded-full border-2 border-blue-600 dark:border-blue-400 text-white text-2xl font-bold"
                style={{ backgroundColor: stringToHslColor(user.email) }}
              >
                {user.firstName.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      Full Name
                    </p>
                    <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                      {user.firstName} {user.lastName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      Username
                    </p>
                    <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                      @{user.username}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge
                    variant={roleConfig.variant}
                    className="flex items-center gap-1"
                  >
                    <RoleIcon className="h-3 w-3" />
                    {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                  </Badge>
                  <Badge
                    variant={user.isVerified ? "default" : "destructive"}
                    className="flex items-center gap-1"
                  >
                    {user.isVerified ? (
                      <CheckCircle className="h-3 w-3" />
                    ) : (
                      <XCircle className="h-3 w-3" />
                    )}
                    {user.isVerified ? "Verified" : "Unverified"}
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              Contact Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-700">
              <Mail className="h-5 w-5 text-slate-500 dark:text-slate-400" />
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Email Address
                </p>
                <p className="text-slate-900 dark:text-slate-100">
                  {user.email}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-700">
              <Phone className="h-5 w-5 text-slate-500 dark:text-slate-400" />
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Phone Number
                </p>
                <p className="text-slate-900 dark:text-slate-100">
                  {user.phone}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              Account Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-700">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Account ID
                </span>
                <span className="text-sm text-slate-900 dark:text-slate-100 font-mono">
                  {user._id}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-700">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Verification Status
                </span>
                <div className="flex items-center gap-2">
                  {user.isVerified ? (
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                  )}
                  <span
                    className={`text-sm font-medium ${
                      user.isVerified
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {user.isVerified ? "Verified" : "Pending Verification"}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-700">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Account Type
                </span>
                <Badge
                  variant={roleConfig.variant}
                  className="text-slate-800 dark:text-slate-200"
                >
                  <RoleIcon className="h-3 w-3 mr-1" />
                  {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default AccountCard;

import React from "react";
import MenuItem from "./sidebar-menu";
import useFetchUserData from "@/app/[locale]/(privatePages)/(settings)/profile-settings/hooks/use-fetch-user-data";
import { useSession } from "next-auth/react";

// Functions
// Convert String to colors
function stringToHslColor(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const h = Math.abs(hash) % 360;
  const s = 50 + (Math.abs(hash) % 50);
  const l = 40 + (Math.abs(hash) % 40);

  return `hsl(${h}, ${s}%, ${l}%)`;
}

export default function FooterSidebar() {
  // Sessions
  const { data: session } = useSession();

  // Hooks
  const { userData, isLoading } = useFetchUserData();

  if (isLoading) {
    return (
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Loading skeleton for user avatar */}
          <div className="size-14 bg-gray-200 animate-pulse rounded"></div>
          <div className="flex flex-col gap-1">
            {/* Loading skeleton for name */}
            <div className="h-4 w-20 bg-gray-200 animate-pulse rounded"></div>
            {/* Loading skeleton for email */}
            <div className="h-3 w-32 bg-gray-200 animate-pulse rounded"></div>
          </div>
        </div>
        {/* Menu */}
        <MenuItem />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {/* User Letter*/}
        <div
          className="size-14 flex items-center justify-center border border-blue-600 text-white"
          style={{
            backgroundColor: stringToHslColor(
              session?.user.email || "user@gmail.com"
            ),
          }}
        >
          {userData?.user.firstName.slice(0, 1)}
        </div>

        <div className="flex flex-col">
          <div className="space-x-1">
            {/* User Name */}
            <span className="font-medium text-blue-600">
              {userData?.user.firstName}
            </span>
          </div>
          {/* User Email */}
          <span className="text-gray-500 text-sm">{session?.user.email}</span>
        </div>
      </div>
      {/* Menu */}
      <MenuItem />
    </div>
  );
}

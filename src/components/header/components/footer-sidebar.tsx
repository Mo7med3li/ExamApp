import React from "react";
import MenuItem from "./sidebar-menu";
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
          {session?.user.firstName.slice(0, 1)}
        </div>

        <div className="flex flex-col">
          <div className="space-x-1">
            {/* User Name */}
            <span className="font-medium text-blue-600">
              {session?.user.firstName}
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

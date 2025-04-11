import Link from "next/link";
import React from "react";
import { FaApple, FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <>
      <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
        <span className="relative z-10 bg-background px-2 text-base text-muted-foreground">
          Or continue with
        </span>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <Link
          href={"https:google.com"}
          className="w-full bg-white flex shadow-md items-center justify-center rounded-2xl border   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 text-3xl"
        >
          <FaGoogle className="text-main" />
        </Link>
        <Link
          href={"https:x.com"}
          className="w-full bg-white flex shadow-md items-center justify-center rounded-2xl border  text-main focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 text-3xl"
        >
          <FaTwitter className="text-main" />
        </Link>
        <Link
          href={"https:facebook.com"}
          className="w-full bg-white shadow-md flex items-center justify-center rounded-2xl border  text-main focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 text-3xl"
        >
          <FaFacebook className=" text-3xl w-24" />
        </Link>
        <Link
          href={"https:apple.com"}
          className="w-full shadow-md  bg-white flex items-center justify-center rounded-2xl p-5 hover:text-gray-700 border  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 text-3xl"
        >
          <FaApple />
        </Link>
      </div>
    </>
  );
}

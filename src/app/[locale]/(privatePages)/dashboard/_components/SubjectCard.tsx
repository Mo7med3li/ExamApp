"use client";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

import React from "react";

export default function SubjectCard({ subject }: { subject: Subject }) {
  return (
    <Link key={subject._id} href={`/select-diploma/${subject._id}`}>
      <div className="relative ">
        {/* cover */}
        <div className="h-72">
          <Image
            className="rounded-lg shadow-xl w-full object-cover "
            src={subject.icon}
            alt="diploma photo"
            fill
            sizes="25vw"
            height={0}
          />
        </div>
        <div className=" w-4/5  absolute py-2  top-3/4 -translate-x-1/2 left-1/2 flex items-center justify-center flex-col bg-[#1935CA66] rounded-xl text-white">
          {/* tittle */}
          <h2 className="text-sm font-bold">{subject.name}</h2>
          {/* description */}
          <p className="text-[11px] font-semibold">
            Voluptatem aut ut dignissimos blanditiis
          </p>
        </div>
      </div>
    </Link>
  );
}

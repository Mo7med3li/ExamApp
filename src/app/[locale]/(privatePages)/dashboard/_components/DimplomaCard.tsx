import Image from "next/image";
import React from "react";
import diploma from "@/assets/imgs/Rectangle 47.png";
import { Link } from "@/i18n/navigation";

export default function DimplomaCard() {
  return (
    <Link href="/select-diploma">
      <div className="relative ">
        <Image
          className="  rounded-lg shadow-xl w-full  object-fit"
          src={diploma}
          alt="diploma photo"
          width={500}
          height={0}
        />
        <div className=" w-4/5  absolute py-2  top-3/4 -translate-x-1/2 left-1/2 flex items-center justify-center flex-col bg-[#1935CA66] rounded-xl text-white">
          <h2 className="text-sm font-bold">Front-end Web Development</h2>
          <p className="text-[11px] font-semibold">
            Voluptatem aut ut dignissimos blanditiis
          </p>
        </div>
      </div>
    </Link>
  );
}

import React from "react";
import UserInfo from "./_components/User-Info";
import Image from "next/image";
import DimplomaCard from "./_components/DimplomaCard";
export default function page() {
  return (
    <>
      {/* User info */}
      <UserInfo />
      <section className="bg-white mt-16  px-4 rounded-3xl shadow-cardShadow">
        <div className="flex justify-between py-4 px-4">
          <span className="text-2xl font-semibold text-main">Quizes</span>
          <span className="text-2xl font-semibold text-main">View All</span>
        </div>
        <section className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-5 ">
          <DimplomaCard />
          <DimplomaCard />
          <DimplomaCard />
          <DimplomaCard />
          <DimplomaCard />
          <DimplomaCard />
        </section>
      </section>
    </>
  );
}

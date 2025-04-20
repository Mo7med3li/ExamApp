import React from "react";
import UserInfo from "./_components/User-Info";
import Image from "next/image";
import DimplomaCard from "./_components/DimplomaCards";
import DimplomaCards from "./_components/DimplomaCards";
export default function page() {
  async function subjectList() {
    const respone = await fetch(`${process.env.NEXT_PUBLIC_API}/get-subjects`);
    const payload = await respone.json();
    console.log(payload);
  }
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
          {/* subjects */}
          <DimplomaCards />
        </section>
      </section>
    </>
  );
}

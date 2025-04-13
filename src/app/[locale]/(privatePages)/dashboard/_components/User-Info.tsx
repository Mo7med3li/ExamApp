import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import React from "react";
import { FaCheckCircle, FaClock, FaFlag } from "react-icons/fa";
import profile from "@/assets/imgs/Frame 40.png";

export default function UserInfo() {
  return (
    <section className=" flex gap-14 bg-white shadow-xl rounded-3xl">
      {/* user image */}
      <section className="py-4 ps-4 ">
        <Image
          src={profile}
          width={500}
          height={0}
          className="w-48"
          alt="profile photo"
        />
      </section>
      {/* user profile */}
      <section className="bg-white w-full flex flex-col justify-between p-4 ">
        <h1 className="text-main font-bold text-3xl">Mohamed Ali </h1>
        <p className="text-slate-400 text-xl ">This is user profile</p>
        <Progress value={80} />
        <section className="flex ">
          <div className="flex items-center gap-10 flex-grow">
            <FaFlag className="text-main shadow-xl w-10 h-10 bg-white" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-textColor">27</span>
              <span className="font-light text-textColor">Quiz Passed</span>
            </div>
          </div>

          <div className="flex items-center gap-10 flex-grow">
            <FaClock className="text-main shadow-xl w-10 h-10 bg-white" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-textColor">13 min</span>
              <span className="font-light text-textColor">fastest time</span>
            </div>
          </div>

          <div className="flex items-center gap-10 flex-grow">
            <FaCheckCircle className="text-main shadow-xl w-10 h-10  bg-white" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-textColor">200</span>
              <span className="font-light text-textColor">Correct Answers</span>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

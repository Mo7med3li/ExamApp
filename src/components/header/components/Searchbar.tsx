import React from "react";
import LocaleToggler from "./locale-toggler";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import profile from "@/assets/imgs/Rectangle 289.png";

export default function Searchbar() {
  return (
    <section className="flex items-center  gap-4 p-4">
      <div className="flex-grow">
        {" "}
        <Input
          placeholder="Search Quiz "
          type="search"
          className="shadow-inputShadow w-full focus-visible:border-main focus-visible:outline-none"
        />
      </div>
      <Button className="bg-main hover:opacity-70 rounded-lg py-6 px-5 shadow-btnshadow">
        Start Quiz
      </Button>
      <div>
        <Image
          alt="profile image"
          src={profile}
          width={500}
          height={0}
          className="w-16"
        />
      </div>
      <LocaleToggler />
    </section>
  );
}

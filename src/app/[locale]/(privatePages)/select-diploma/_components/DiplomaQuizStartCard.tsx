import Image from "next/image";
import React from "react";
import HtmlLogo from "@/assets/imgs/skill-icons_html.png";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DiplomaQuizStartCard() {
  return (
    <section className="flex justify-between items-center px-6 py-4 bg-inputColor  rounded-xl shadow-cardDiplomaShadow">
      <div className="flex items-center gap-6 ">
        <Image
          src={HtmlLogo}
          alt="Html logo"
          width={500}
          height={0}
          className="w-20"
        />
        <div className="flex flex-col gap-1">
          <h3 className="font-medium text-base">HTML</h3>
          <span className="text-xs text-gray-500">20 Question</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm">15 Minutes</span>
        <Dialog>
          <DialogTrigger className="bg-main py-1 px-6 rounded-xl text-white">
            Start
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="font-medium">Instructions</DialogTitle>
              <DialogDescription>
                <ul className="list-disc pl-5 pb-4">
                  <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                  <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                  <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                  <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                </ul>
                <Button className="bg-main py-1 px-6 rounded-xl w-full mt-10">
                  Start
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

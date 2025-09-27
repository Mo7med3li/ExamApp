"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import React from "react";
import { ArrowRight, BookOpen } from "lucide-react";

export default function SubjectCard({ subject }: { subject: Subject }) {
  return (
    <Link key={subject._id} href={`/all-exams`}>
      <div className="group bg-white dark:bg-zinc-300 h-[400px] rounded-2xl border border-slate-200/60 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
          <Image
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={subject.icon}
            alt={`${subject.name} diploma`}
            width={400}
            height={400}
            quality={100}
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-slate-700">
              Available
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">
                {subject.name}
              </h3>
              <p className="text-sm text-slate-600 line-clamp-2">
                Explore comprehensive exams and assessments for this diploma
                program
              </p>
            </div>

            {/* Icon */}
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center ml-4 group-hover:scale-110 transition-transform duration-200">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Action Button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-slate-500">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span>Multiple Exams Available</span>
            </div>

            <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors duration-200">
              <span>Start Learning</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
      </div>
    </Link>
  );
}

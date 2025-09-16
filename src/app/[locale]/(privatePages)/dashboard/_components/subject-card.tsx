"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import React from "react";

export default function SubjectCard({ subject }: { subject: Subject }) {
  return (
    <Link key={subject._id} href={`/select-diploma/${subject._id}`}>
      <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
        {/* Image Container */}
        <div className="relative h-[280px] overflow-hidden">
          <Image
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            src={subject.icon}
            alt={`${subject.name} diploma`}
            width={400}
            height={400}
            quality={100}
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
            <h2 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
              {subject.name}
            </h2>

            {/* Decorative Element */}
            <div className="mt-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Corner Accent */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </Link>
  );
}

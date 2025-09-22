"use client";

import React from "react";

export function SubjectCardSkeleton() {
  return (
    <div className="animate-pulse group relative overflow-hidden rounded-2xl bg-white shadow-lg">
      {/* Image Skeleton */}
      <div className="relative h-[280px] overflow-hidden bg-gray-200"></div>

      {/* Content Skeleton */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
          {/* Title Skeleton */}
          <div className="h-5 w-3/4 bg-gray-300 rounded mb-3"></div>

          {/* Decorative Dots Skeleton */}
          <div className="mt-3 flex items-center gap-2">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Corner Accent Skeleton */}
      <div className="absolute top-4 right-4 w-8 h-8 bg-gray-300 rounded-full"></div>
    </div>
  );
}

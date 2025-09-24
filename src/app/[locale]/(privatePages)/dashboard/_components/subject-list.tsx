"use client";

import React, { useState, useEffect } from "react";
import SubjectCard from "./subject-card";
import { Button } from "@/components/ui/button";
import { ChevronDown, Loader2 } from "lucide-react";

export default function SubjectList() {
  // States
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(4);
  const [loadingMore, setLoadingMore] = useState(false);

  // Effects
  useEffect(() => {
    const loadSubjects = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/get-subjects");
        if (!response.ok) {
          throw new Error("Failed to fetch subjects");
        }
        const payload =
          (await response.json()) as APIResponse<SubjectsResponse>;

        if ("code" in payload) {
          throw new Error(payload.message);
        }

        setSubjects(payload.subjects || []);
      } catch (error) {
        console.error("Error loading subjects:", error);
      } finally {
        setLoading(false);
      }
    };

    loadSubjects();
  }, []);

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 4, subjects.length));
      setLoadingMore(false);
    }, 500);
  };

  if (loading) {
    return (
      <div className="col-span-full flex items-center justify-center py-12">
        <div className="flex flex-col items-center gap-4 text-slate-600">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          <p className="text-lg font-medium">Loading diplomas...</p>
        </div>
      </div>
    );
  }

  if (!subjects.length) {
    return (
      <div className="col-span-full flex items-center justify-center py-16">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">📚</span>
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            No diplomas available
          </h3>
          <p className="text-slate-600">Check back later for new content</p>
        </div>
      </div>
    );
  }

  const visibleSubjects = subjects.slice(0, visibleCount);
  const hasMore = visibleCount < subjects.length;

  return (
    <>
      {visibleSubjects.map((subject) => (
        <SubjectCard key={subject._id} subject={subject} />
      ))}

      {hasMore && (
        <div className="col-span-full flex justify-center mt-8">
          <Button
            onClick={handleLoadMore}
            disabled={loadingMore}
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {loadingMore ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Loading...
              </>
            ) : (
              <>
                <ChevronDown className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform duration-300" />
                Load More ({subjects.length - visibleCount} remaining)
              </>
            )}

            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </Button>
        </div>
      )}
    </>
  );
}

"use client";
import { useExamContext } from "@/components/providers/components/exam.provider";
import React from "react";
import DiplomaQuizStartCard from "./diploma-quizStart-card";
import { Search } from "lucide-react";

export default function SearchResult() {
  const { searchExamsList } = useExamContext();

  return (
    <div className="space-y-6">
      {searchExamsList && searchExamsList.length > 0 ? (
        <>
          {/* Search Results Header */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Search className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Search Results
                </h3>
                <p className="text-slate-600 text-sm">
                  Found {searchExamsList.length} exam
                  {searchExamsList.length !== 1 ? "s" : ""}
                </p>
              </div>
            </div>
          </div>

          {/* Search Results */}
          <DiplomaQuizStartCard Exams={searchExamsList} />
        </>
      ) : searchExamsList && searchExamsList.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-slate-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              No Results Found
            </h3>
            <p className="text-slate-600">Try adjusting your search criteria</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

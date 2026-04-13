import { BookOpen } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 rounded-3xl border border-dashed border-gray-300 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/30 py-24 px-8 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 shadow-inner">
        <BookOpen className="h-9 w-9 text-blue-500 dark:text-blue-400" />
      </div>
      <div>
        <p className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">
          No submissions yet
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
          Once you complete and submit an exam, your results and progress will
          appear here.
        </p>
      </div>
    </div>
  );
}

import { AlertCircle } from "lucide-react";

export default function ErrorState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 rounded-3xl border border-rose-200 dark:border-rose-800 bg-rose-50/50 dark:bg-rose-900/10 py-20 px-8 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-100 dark:bg-rose-900/30 shadow-inner">
        <AlertCircle className="h-8 w-8 text-rose-500" />
      </div>
      <div>
        <p className="text-lg font-bold text-rose-800 dark:text-rose-200 mb-1">
          Something went wrong
        </p>
        <p className="text-sm text-rose-600 dark:text-rose-400 max-w-xs">
          {message || "Failed to load exam submissions. Please try again."}
        </p>
      </div>
    </div>
  );
}

import { AnalyticsItem } from "@/lib/types/privatePages";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle } from "lucide-react";

export default function QuestionCard({
  item,
  index,
}: {
  item: AnalyticsItem;
  index: number;
}) {
  const isCorrect = item.isCorrect;

  return (
    <div
      className={cn(
        "group relative rounded-2xl border p-5 transition-all duration-300",
        "animate-in fade-in slide-in-from-bottom-3",
        "hover:shadow-lg",
        isCorrect
          ? "border-emerald-100 dark:border-emerald-900/50 bg-emerald-50/30 dark:bg-emerald-900/10 hover:border-emerald-200 dark:hover:border-emerald-800"
          : "border-rose-100 dark:border-rose-900/50 bg-rose-50/30 dark:bg-rose-900/10 hover:border-rose-200 dark:hover:border-rose-800",
      )}
      style={{
        animationDelay: `${index * 50}ms`,
        animationFillMode: "both",
      }}
    >
      {/* left accent */}
      <div
        className={cn(
          "absolute left-0 top-0 h-full w-1 rounded-l-2xl",
          isCorrect
            ? "bg-gradient-to-b from-emerald-400 to-teal-500"
            : "bg-gradient-to-b from-rose-400 to-pink-500",
        )}
      />

      <div className="pl-3 space-y-4">
        {/* header row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            {/* question number badge */}
            <span
              className={cn(
                "inline-flex shrink-0 h-7 w-7 items-center justify-center rounded-full text-xs font-bold",
                isCorrect
                  ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300"
                  : "bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300",
              )}
            >
              {index + 1}
            </span>
            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug pt-0.5">
              {item.questionText}
            </p>
          </div>
          {/* result icon */}
          {isCorrect ? (
            <CheckCircle2 className="shrink-0 h-5 w-5 text-emerald-500 mt-0.5" />
          ) : (
            <XCircle className="shrink-0 h-5 w-5 text-rose-500 mt-0.5" />
          )}
        </div>

        {/* answers */}
        <div className="grid gap-2">
          {/* selected answer */}
          <div
            className={cn(
              "flex items-start gap-2.5 rounded-xl px-4 py-3 text-sm",
              isCorrect
                ? "bg-emerald-100/60 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800"
                : "bg-rose-100/60 dark:bg-rose-900/30 border border-rose-200 dark:border-rose-800",
            )}
          >
            <div
              className={cn(
                "shrink-0 mt-0.5 h-4 w-4 rounded-full border-2 flex items-center justify-center",
                isCorrect
                  ? "border-emerald-500 bg-emerald-500"
                  : "border-rose-500 bg-rose-500",
              )}
            >
              <div className="h-1.5 w-1.5 rounded-full bg-white" />
            </div>
            <div className="flex-1">
              <span
                className={cn(
                  "text-xs font-semibold uppercase tracking-wide block mb-0.5",
                  isCorrect
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-rose-600 dark:text-rose-400",
                )}
              >
                {isCorrect ? "✓ Your answer (correct)" : "✗ Your answer"}
              </span>
              <span className="text-gray-800 dark:text-gray-200 leading-snug">
                {item.selectedAnswer.text}
              </span>
            </div>
          </div>

          {/* correct answer — only show when wrong */}
          {!isCorrect && (
            <div className="flex items-start gap-2.5 rounded-xl px-4 py-3 text-sm bg-emerald-50/80 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
              <div className="shrink-0 mt-0.5 h-4 w-4 rounded-full border-2 border-emerald-500 bg-emerald-500 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 block mb-0.5">
                  ✓ Correct answer
                </span>
                <span className="text-gray-800 dark:text-gray-200 leading-snug">
                  {item.correctAnswer.text}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

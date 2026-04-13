import { cn } from "@/lib/utils";

export default function ScoreRing({ pct }: { pct: number }) {
  const r = 52;
  const circ = 2 * Math.PI * r;
  const offset = circ - (Math.min(pct, 100) / 100) * circ;

  return (
    <div className="relative flex h-40 w-40 items-center justify-center">
      <svg
        className="-rotate-90 drop-shadow-2xl"
        viewBox="0 0 128 128"
        width={160}
        height={160}
      >
        {/* track */}
        <circle
          cx="64"
          cy="64"
          r={r}
          fill="none"
          strokeWidth="10"
          className="stroke-gray-100 dark:stroke-gray-800"
        />
        {/* progress */}
        <circle
          cx="64"
          cy="64"
          r={r}
          fill="none"
          strokeWidth="10"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ stroke: `url(#main-grad)` }}
          className="transition-all duration-1000"
        />
        <defs>
          <linearGradient id="main-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              className={cn(
                pct >= 90
                  ? "text-emerald-400"
                  : pct >= 70
                    ? "text-blue-400"
                    : "text-rose-400",
              )}
              stopColor="currentColor"
            />
            <stop
              offset="100%"
              className={cn(
                pct >= 90
                  ? "text-teal-500"
                  : pct >= 70
                    ? "text-violet-500"
                    : "text-fuchsia-500",
              )}
              stopColor="currentColor"
            />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-4xl font-black tracking-tight text-gray-900 dark:text-white">
          {pct.toFixed(0)}
          <span className="text-2xl font-bold text-gray-500">%</span>
        </span>
        <span className="text-xs font-medium text-muted-foreground mt-0.5">
          Score
        </span>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";

function SkeletonPulse({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800",
        className,
      )}
    />
  );
}

export default function LoadingState() {
  return (
    <div className="space-y-8">
      {/* stat skeletons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-2xl border p-5 space-y-3 bg-card">
            <SkeletonPulse className="h-3 w-24" />
            <SkeletonPulse className="h-8 w-16" />
          </div>
        ))}
      </div>
      {/* card skeletons */}
      <div className="space-y-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-2xl border p-6 space-y-4 bg-card">
            <div className="flex items-start justify-between">
              <div className="space-y-2 flex-1">
                <SkeletonPulse className="h-5 w-2/5" />
                <SkeletonPulse className="h-3 w-3/5" />
              </div>
              <SkeletonPulse className="h-20 w-20 rounded-full" />
            </div>
            <SkeletonPulse className="h-2 w-full rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

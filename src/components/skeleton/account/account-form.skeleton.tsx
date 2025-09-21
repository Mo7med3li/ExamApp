import { Skeleton } from "@/components/ui/skeleton";

export function UserProfileFormSkeleton() {
  return (
    <div className="w-full max-w-2xl mt-8">
      <div className="space-y-6">
        {/* Two columns (First Name / Last Name) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" /> {/* Label */}
            <Skeleton className="h-10 w-full rounded-md" /> {/* Input */}
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
        </div>

        {/* Username */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        {/* Email (disabled) */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Skeleton className="h-10 w-full sm:w-32 rounded-md" />
          <Skeleton className="h-10 w-full sm:w-40 rounded-md sm:ml-auto" />
        </div>
      </div>
    </div>
  );
}

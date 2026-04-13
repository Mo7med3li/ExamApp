import { cn } from "@/lib/utils";

export default function MiniStat({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  color: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5 p-4 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 min-w-[100px]">
      <div
        className={cn(
          "h-8 w-8 rounded-lg flex items-center justify-center",
          color,
        )}
      >
        {icon}
      </div>
      <span className="text-2xl font-extrabold text-gray-900 dark:text-gray-50">
        {value}
      </span>
      <span className="text-xs font-medium text-muted-foreground text-center leading-tight">
        {label}
      </span>
    </div>
  );
}

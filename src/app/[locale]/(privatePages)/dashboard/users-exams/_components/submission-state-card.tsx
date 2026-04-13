import { cn } from "@/lib/utils";
interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  gradient: string;
  iconBg: string;
  delay?: string;
}
export default function StatCard({
  icon,
  label,
  value,
  gradient,
  iconBg,
  delay = "0ms",
}: StatCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl p-5 border border-white/10",
        "bg-gradient-to-br",
        gradient,
        "shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5",
        "animate-in fade-in slide-in-from-bottom-4",
      )}
      style={{ animationDelay: delay, animationFillMode: "both" }}
    >
      {/* decorative blob */}
      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-20 blur-2xl bg-white" />

      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest opacity-70 mb-3">
            {label}
          </p>
          <p className="text-3xl font-extrabold tracking-tight">{value}</p>
        </div>
        <div
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-xl shadow-md",
            iconBg,
          )}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

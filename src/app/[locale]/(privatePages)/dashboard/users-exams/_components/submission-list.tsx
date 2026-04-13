"use client";

import {
  Clock,
  FileText,
  Trophy,
  TrendingUp,
  Calendar,
  CheckCircle2,
  XCircle,
  Sparkles,
  ChevronRight,
  BarChart3,
  Target,
  Zap,
} from "lucide-react";
import PaginationComponent from "@/components/common/styled-pagination";
import useFetchUserSubmissions from "../_hooks/use-fetch-user-submissions";
import { cn } from "@/lib/utils";
import ErrorState from "./submission-error";
import StatCard from "./submission-state-card";
import EmptyState from "./empty-state";
import LoadingState from "@/lib/skeleton/submission/submission.skeleton";
import { useRouter } from "@/i18n/navigation";
import { ExamSubmissions } from "@/lib/types/privatePages";

/* ─────────────────────────────── helpers ────────────────────────────────── */

function getScoreMeta(pct: number) {
  if (pct >= 90)
    return {
      label: "Excellent",
      ring: "from-emerald-400 to-teal-500",
      glow: "shadow-emerald-400/30",
      text: "text-emerald-600 dark:text-emerald-400",
      bar: "bg-gradient-to-r from-emerald-400 to-teal-500",
      badge:
        "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
      icon: <Sparkles className="h-3 w-3" />,
    };
  if (pct >= 70)
    return {
      label: "Good",
      ring: "from-blue-400 to-indigo-500",
      glow: "shadow-blue-400/30",
      text: "text-blue-600 dark:text-blue-400",
      bar: "bg-gradient-to-r from-blue-400 to-indigo-500",
      badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
      icon: <Target className="h-3 w-3" />,
    };
  return {
    label: "Needs Work",
    ring: "from-rose-400 to-pink-500",
    glow: "shadow-rose-400/30",
    text: "text-rose-600 dark:text-rose-400",
    bar: "bg-gradient-to-r from-rose-400 to-pink-500",
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
    icon: <Zap className="h-3 w-3" />,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/* ─────────────────────────────── score ring ─────────────────────────────── */

function ScoreRing({
  pct,

  glow,
}: {
  pct: number;

  glow: string;
}) {
  const r = 26;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;

  return (
    <div
      className={cn(
        "relative flex h-20 w-20 items-center justify-center rounded-full shadow-lg",
        glow,
      )}
    >
      <svg className="-rotate-90" viewBox="0 0 64 64" width={80} height={80}>
        <circle
          cx="32"
          cy="32"
          r={r}
          fill="none"
          strokeWidth="6"
          className="stroke-gray-200 dark:stroke-gray-700"
        />
        <circle
          cx="32"
          cy="32"
          r={r}
          fill="none"
          strokeWidth="6"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={cn("transition-all duration-700", `stroke-current`)}
          style={{
            stroke: `url(#grad-${pct.toFixed(0)})`,
          }}
        />
        <defs>
          <linearGradient
            id={`grad-${pct.toFixed(0)}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
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
                    ? "text-indigo-500"
                    : "text-pink-500",
              )}
              stopColor="currentColor"
            />
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute text-sm font-bold text-gray-800 dark:text-gray-100">
        {pct.toFixed(0)}%
      </span>
    </div>
  );
}

/* ─────────────────────────────── main ──────────────────────────────────── */

export function SubmissionList() {
  const { data, isLoading, error } = useFetchUserSubmissions();
  const router = useRouter();
  const submissions = data?.payload?.data || [];
  const metadata = data?.payload?.metadata;

  if (isLoading) return <LoadingState />;
  if (error)
    return (
      <ErrorState
        message={
          (error as Error).message ||
          "Failed to load exam submissions. Please try again."
        }
      />
    );
  if (!submissions.length) return <EmptyState />;

  /* ── stats ── */
  const totalSubmissions = metadata?.total ?? submissions.length;
  const avgPct =
    submissions.reduce((acc: number, s: ExamSubmissions) => acc + s.score, 0) /
    submissions.length;
  const bestPct = Math.max(...submissions.map((s: ExamSubmissions) => s.score));
  const recentCount = submissions.filter((s: ExamSubmissions) => {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return new Date(s.submittedAt) > weekAgo;
  }).length;

  return (
    <div className="space-y-10">
      {/* ─── PAGE HEADER ───────────────────────────────────────────────── */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-blue-600 to-violet-600 p-8 text-white shadow-2xl shadow-indigo-500/30">
        {/* decorative circles */}
        <div className="pointer-events-none absolute -top-12 -right-12 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

        <div className="relative flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-white/70 text-sm font-medium">
              <BarChart3 className="h-4 w-4" />
              <span>Performance Dashboard</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              My Exam Submissions
            </h1>
            <p className="mt-1.5 text-white/70 text-sm max-w-md">
              Track your progress, review scores, and monitor your learning
              journey across all submitted exams.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <div className="text-center">
              <p className="text-4xl font-extrabold">{totalSubmissions}</p>
              <p className="text-xs text-white/60 mt-0.5 font-medium uppercase tracking-wide">
                Total Exams
              </p>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div className="text-center">
              <p className="text-4xl font-extrabold">
                {avgPct.toFixed(0)}
                <span className="text-2xl">%</span>
              </p>
              <p className="text-xs text-white/60 mt-0.5 font-medium uppercase tracking-wide">
                Avg Score
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── STAT CARDS ────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          icon={<FileText className="h-5 w-5 text-blue-200" />}
          label="Total Submissions"
          value={totalSubmissions}
          gradient="from-blue-500 to-indigo-600 text-white"
          iconBg="bg-white/20"
          delay="0ms"
        />
        <StatCard
          icon={<Trophy className="h-5 w-5 text-amber-200" />}
          label="Best Score"
          value={`${bestPct.toFixed(1)}%`}
          gradient="from-amber-500 to-orange-500 text-white"
          iconBg="bg-white/20"
          delay="80ms"
        />
        <StatCard
          icon={<TrendingUp className="h-5 w-5 text-purple-200" />}
          label="Average Score"
          value={`${avgPct.toFixed(1)}%`}
          gradient="from-violet-500 to-purple-600 text-white"
          iconBg="bg-white/20"
          delay="160ms"
        />
        <StatCard
          icon={<Clock className="h-5 w-5 text-teal-200" />}
          label="This Week"
          value={recentCount}
          gradient="from-teal-500 to-emerald-600 text-white"
          iconBg="bg-white/20"
          delay="240ms"
        />
      </div>

      {/* ─── SUBMISSION CARDS ──────────────────────────────────────────── */}
      <div className="space-y-4">
        {/* section label */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 shadow-md">
            <FileText className="h-4 w-4 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Submission History
          </h2>
          <div className="ml-auto text-xs text-muted-foreground font-medium">
            {submissions.length} result
            {submissions.length !== 1 ? "s" : ""}
          </div>
        </div>

        <div className="grid gap-3">
          {submissions.map((submission: ExamSubmissions, index: number) => {
            const pct = submission.score;
            const meta = getScoreMeta(pct);

            return (
              <div
                key={submission.id}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border bg-card p-5",
                  "hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300",
                  "animate-in fade-in slide-in-from-bottom-3",
                  "border-gray-100 dark:border-gray-800",
                  "hover:border-gray-200 dark:hover:border-gray-700",
                )}
                style={{
                  animationDelay: `${index * 60}ms`,
                  animationFillMode: "both",
                }}
              >
                {/* left accent stripe */}
                <div
                  className={cn(
                    "absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b",
                    meta.ring,
                  )}
                />

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center pl-3">
                  {/* ── left: exam info ── */}
                  <div className="flex-1 min-w-0 space-y-2">
                    {/* title + badge */}
                    <div className="flex flex-wrap items-start gap-2">
                      <h3 className="text-base font-bold text-gray-900 dark:text-gray-50 truncate leading-snug">
                        {submission.exam.title}
                      </h3>
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold",
                          meta.badge,
                        )}
                      >
                        {meta.icon}
                        {meta.label}
                      </span>
                    </div>

                    {/* meta row */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDate(submission.submittedAt)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {submission.exam.duration} min
                      </span>
                    </div>

                    {/* progress bar */}
                    <div className="space-y-1">
                      <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                        <div
                          className={cn(
                            "h-full rounded-full transition-all duration-700",
                            meta.bar,
                          )}
                          style={{ width: `${Math.min(pct, 100)}%` }}
                        />
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                          <CheckCircle2 className="h-3 w-3" />
                          {submission.correctAnswers} correct
                        </span>
                        <span className="flex items-center gap-1 text-rose-500 dark:text-rose-400">
                          <XCircle className="h-3 w-3" />
                          {submission.wrongAnswers} wrong
                        </span>
                        <span className="ml-auto text-gray-400">
                          {submission.score}/{submission.totalQuestions}{" "}
                          questions
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ── right: score ring ── */}
                  <div className="flex shrink-0 flex-col items-center gap-1">
                    <ScoreRing pct={pct} glow={meta.glow} />
                    <span className={cn("text-xs font-semibold", meta.text)}>
                      {meta.label}
                    </span>
                  </div>

                  {/* ── chevron hint ── */}
                  <ChevronRight
                    onClick={() => {
                      router.push(`/dashboard/users-exams/${submission.id}`);
                    }}
                    className="hidden sm:block cursor-pointer h-4 w-4 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 transition-colors shrink-0"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── PAGINATION ────────────────────────────────────────────────── */}
      {metadata && metadata.totalPages > 1 && (
        <div className="flex justify-center pt-2">
          <PaginationComponent metaData={metadata} />
        </div>
      )}
    </div>
  );
}

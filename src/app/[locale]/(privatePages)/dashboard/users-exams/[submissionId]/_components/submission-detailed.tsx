"use client";

import {
  CheckCircle2,
  XCircle,
  Clock,
  Calendar,
  Trophy,
  Target,
  BookOpen,
  ArrowLeft,
  BarChart3,
  Hash,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "@/i18n/navigation";
import { SubmissionDetailedProps } from "@/lib/types/privatePages";
import QuestionCard from "./question-card";
import ScoreRing from "./score-ring";
import MiniStat from "./mini-stat";

function getScoreMeta(pct: number) {
  if (pct >= 90)
    return {
      label: "Excellent",
      badgeBg: "bg-emerald-100 dark:bg-emerald-900/30",
      badgeText: "text-emerald-700 dark:text-emerald-300",
      badgeBorder: "border-emerald-200 dark:border-emerald-800",
      text: "text-emerald-700 dark:text-emerald-400",
      icon: <Sparkles className="h-4 w-4" />,
    };
  if (pct >= 70)
    return {
      label: "Good",
      badgeBg: "bg-blue-100 dark:bg-blue-900/30",
      badgeText: "text-blue-700 dark:text-blue-300",
      badgeBorder: "border-blue-200 dark:border-blue-800",
      text: "text-blue-700 dark:text-blue-400",
      icon: <Target className="h-4 w-4" />,
    };
  return {
    label: "Needs Improvement",
    badgeBg: "bg-red-100 dark:bg-red-900/30",
    badgeText: "text-red-700 dark:text-red-300",
    badgeBorder: "border-red-200 dark:border-red-800",
    text: "text-red-600 dark:text-red-400",
    icon: <Zap className="h-4 w-4" />,
  };
}

function formatDateTime(dateStr: string) {
  return new Date(dateStr).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getDuration(start: string, end: string) {
  const diff = Math.floor(
    (new Date(end).getTime() - new Date(start).getTime()) / 1000,
  );
  const m = Math.floor(diff / 60);
  const s = diff % 60;
  return m > 0 ? `${m}m ${s}s` : `${s}s`;
}

/* ──────────────────────────── main component ──────────────────────────── */

export default function SubmissionDetailed({
  submission,
  analytics,
}: SubmissionDetailedProps) {
  const router = useRouter();
  const pct = submission.score;
  const meta = getScoreMeta(pct);
  const duration = getDuration(submission.startedAt, submission.submittedAt);
  const correctCount = analytics.filter((a) => a.isCorrect).length;
  const wrongCount = analytics.filter((a) => !a.isCorrect).length;

  return (
    <div className="space-y-8">
      {/* ── BACK BUTTON ────────────────────────────────────────────────── */}
      <button
        onClick={() => router.back()}
        className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to submissions
      </button>

      {/* ── HERO HEADER ────────────────────────────────────────────────── */}
      <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-card shadow-sm p-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          {/* left: info */}
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2 text-muted-foreground text-xs font-medium uppercase tracking-wide">
              <BarChart3 className="h-3.5 w-3.5" />
              <span>Exam Result</span>
            </div>

            <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 leading-snug md:text-2xl">
              {submission.examTitle}
            </h1>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 shrink-0" />
                Submitted {formatDateTime(submission.submittedAt)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 shrink-0" />
                Duration: {duration}
              </span>
            </div>

            {/* performance badge */}
            <div
              className={cn(
                "inline-flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-semibold border",
                meta.badgeBg,
                meta.badgeText,
                meta.badgeBorder,
              )}
            >
              {meta.icon}
              {meta.label}
            </div>
          </div>

          {/* right: score ring */}
          <div className="flex flex-col items-center gap-2">
            <div className="rounded-xl bg-gray-50 dark:bg-gray-900/50 p-4 border border-gray-100 dark:border-gray-800">
              <ScoreRing pct={pct} />
            </div>
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
              Overall Score
            </p>
          </div>
        </div>
      </div>

      {/* ── STAT ROW ───────────────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-3 justify-start">
        <MiniStat
          icon={<Hash className="h-4 w-4 text-blue-600 dark:text-blue-400" />}
          label="Total Questions"
          value={submission.totalQuestions}
          color="bg-blue-100 dark:bg-blue-900/30"
        />
        <MiniStat
          icon={
            <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
          }
          label="Correct Answers"
          value={correctCount}
          color="bg-emerald-100 dark:bg-emerald-900/30"
        />
        <MiniStat
          icon={
            <XCircle className="h-4 w-4 text-rose-600 dark:text-rose-400" />
          }
          label="Wrong Answers"
          value={wrongCount}
          color="bg-rose-100 dark:bg-rose-900/30"
        />
        <MiniStat
          icon={
            <Trophy className="h-4 w-4 text-amber-600 dark:text-amber-400" />
          }
          label="Final Score"
          value={`${pct.toFixed(1)}%`}
          color="bg-amber-100 dark:bg-amber-900/30"
        />
        <MiniStat
          icon={
            <Clock className="h-4 w-4 text-violet-600 dark:text-violet-400" />
          }
          label="Time Taken"
          value={duration}
          color="bg-violet-100 dark:bg-violet-900/30"
        />
        <MiniStat
          icon={<Layers className="h-4 w-4 text-teal-600 dark:text-teal-400" />}
          label="Accuracy"
          value={`${((correctCount / submission.totalQuestions) * 100).toFixed(0)}%`}
          color="bg-teal-100 dark:bg-teal-900/30"
        />
      </div>

      {/* ── VISUAL PROGRESS BAR ─────────────────────────────────────────── */}
      <div className="rounded-2xl border bg-card p-5 space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
            Performance Breakdown
          </span>
          <span className="text-muted-foreground">
            {correctCount} / {submission.totalQuestions} correct
          </span>
        </div>
        {/* segmented bar */}
        <div className="flex h-4 w-full overflow-hidden rounded-full gap-px bg-gray-100 dark:bg-gray-800">
          {analytics.map((a, i) => (
            <div
              key={a.questionId}
              title={`Q${i + 1}: ${a.isCorrect ? "Correct" : "Wrong"}`}
              className={cn(
                "flex-1 transition-all duration-500 cursor-pointer",
                a.isCorrect
                  ? "bg-emerald-400 hover:bg-emerald-500"
                  : "bg-rose-400 hover:bg-rose-500",
              )}
              style={{ animationDelay: `${i * 30}ms` }}
            />
          ))}
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-emerald-400 inline-block" />
            Correct ({correctCount})
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-rose-400 inline-block" />
            Wrong ({wrongCount})
          </span>
        </div>
      </div>

      {/* ── QUESTION REVIEW ──────────────────────────────────────────────── */}
      <div className="space-y-4">
        {/* section header */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <BookOpen className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Question Review
          </h2>
          <span className="ml-auto text-xs text-muted-foreground font-medium">
            {analytics.length} question{analytics.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* filter tabs */}
        <div className="flex items-center gap-2 flex-wrap">
          {[
            { label: "All", count: analytics.length, active: true },
            { label: "Correct", count: correctCount, active: false },
            { label: "Wrong", count: wrongCount, active: false },
          ].map((tab) => (
            <span
              key={tab.label}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold border transition-colors cursor-default",
                tab.active
                  ? "bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 border-gray-800 dark:border-gray-200"
                  : "border-gray-200 dark:border-gray-700 text-muted-foreground bg-card",
              )}
            >
              {tab.label}
              <span
                className={cn(
                  "inline-flex h-4 min-w-[16px] items-center justify-center rounded-full px-1 text-[10px] font-bold",
                  tab.active
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400",
                )}
              >
                {tab.count}
              </span>
            </span>
          ))}
        </div>

        {/* question list */}
        <div className="grid gap-3">
          {analytics.map((item, i) => (
            <QuestionCard key={item.questionId} item={item} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

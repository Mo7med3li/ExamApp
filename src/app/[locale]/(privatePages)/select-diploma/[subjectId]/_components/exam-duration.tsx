"use client";

import React, { useEffect, useState } from "react";
import { Clock } from "lucide-react";

type ExamDuration = {
  duration: number;
  onTimerEnd?: () => void;
  onTimeChange?: (date: Date) => void;
};

export default function Examduration({
  duration,
  onTimerEnd,
  onTimeChange,
}: ExamDuration) {
  // State
  const [date, setDate] = useState(new Date(0).setMinutes(duration));
  const [isWarning, setIsWarning] = useState(false);

  // effects
  useEffect(() => {
    const timerId = setInterval(() => {
      setDate((prev) => {
        const currentDate = new Date(prev);

        // Check if time is running low (less than 5 minutes)
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();
        setIsWarning(minutes <= 5 && minutes > 0);

        // check if the time end
        if (currentDate.getMinutes() === 0 && seconds === 0) {
          onTimerEnd?.();
          // destroy date
          window.clearInterval(timerId);
          return Date.now();
        }
        // Invoke time handler on each iteration
        onTimeChange?.(currentDate);
        // decrease one second from the time
        return currentDate.setSeconds(seconds - 1);
      });
    }, 1000);
    return () => {
      window.clearInterval(timerId);
    };
  }, [onTimerEnd, onTimeChange]);

  const timeString = Intl.DateTimeFormat("en-us", {
    minute: "2-digit",
    second: "2-digit",
  }).format(date);

  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
        isWarning
          ? "bg-red-50 text-red-700 border border-red-200"
          : "bg-blue-50 text-blue-700 border border-blue-200"
      }`}
    >
      <Clock
        className={`w-4 h-4 ${isWarning ? "text-red-600" : "text-blue-600"}`}
      />
      <span
        className={`font-semibold text-sm ${isWarning ? "text-red-700" : "text-blue-700"}`}
      >
        {timeString}
      </span>
      {isWarning && (
        <span className="text-xs font-medium text-red-600 animate-pulse">
          Warning!
        </span>
      )}
    </div>
  );
}

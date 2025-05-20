"use client";

import React, { useEffect, useState } from "react";
import { LuAlarmClock } from "react-icons/lu";

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

  // effects
  useEffect(() => {
    const timerId = setInterval(() => {
      setDate((prev) => {
        const currentDate = new Date(prev);

        // check if the time end
        if (currentDate.getMinutes() === 0 && currentDate.getSeconds() === 0) {
          onTimerEnd?.();
          // destory date
          window.clearInterval(timerId);
          return Date.now();
        }
        // Inove time handler on each iteration
        onTimeChange?.(currentDate);
        // decrese one secod from the time
        return currentDate.setSeconds(currentDate.getSeconds() - 1);
      });
    }, 1000);
    return () => {
      window.clearInterval(timerId);
    };
  }, [onTimerEnd, onTimeChange]);

  return (
    <div className="flex items-center gap-2 leading-none ">
      <LuAlarmClock />
      {/* duration format */}
      <span className=" text-green-600 font-semibold">
        {Intl.DateTimeFormat("en-us", {
          minute: "2-digit",
          second: "2-digit",
        }).format(date)}
      </span>
    </div>
  );
}

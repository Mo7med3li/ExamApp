"use client";
import React, { useEffect, useState } from "react";
import { LuAlarmClock } from "react-icons/lu";
type ExamDuration = {
  duration: number;
  onTimerEnd?: () => void;
};
export default function Examduration({ duration, onTimerEnd }: ExamDuration) {
  // State
  const [date, setDate] = useState(new Date(0).setMinutes(duration));
  // const date = new Date();
  // date.setMinutes(duration - 1);

  // effects
  useEffect(() => {
    const timerId = setInterval(() => {
      setDate((prev) => {
        const currentDate = new Date(prev);
        if (currentDate.getMinutes() === 0 && currentDate.getSeconds() === 0) {
          onTimerEnd?.();
          // destory date
          window.clearInterval(timerId);
          return Date.now();
        }
        return currentDate.setSeconds(currentDate.getSeconds() - 1);
      });
    }, 1000);
  }, [onTimerEnd]);
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

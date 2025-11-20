"use client";

import { TimerIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface TimerProps {
  initial?: number;
  onComplete?: () => void;
}

export default function Timer({ initial = 900, onComplete }: TimerProps) {
  const [time, setTime] = useState(initial);

  useEffect(() => {
    if (time <= 0) {
      onComplete?.();
      return;
    }

    const t = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(t);
          onComplete?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(t);
  }, [time]);

  const format = (t: number) => {
    if (t <= 0) return "00:00";

    const hours = Math.floor(t / 3600);
    const minutes = Math.floor((t % 3600) / 60);
    const seconds = t % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center rounded-full py-1">
      <TimerIcon strokeWidth={1.2} className="md:w-9 md:h-9 w-8 h-8 text-black" />
      <div className="font-semibold px-1 py-1">
        <p className="text-gray-500 font-medium text-[9px]">Time Remaining</p>
        <p className="text-gray-900 md:text-lg text-base">{format(time)}</p>
      </div>
    </div>
  );
}

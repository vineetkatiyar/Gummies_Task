"use client";

import { Star } from "lucide-react";

export default function StarIcon({
  filled,
  onClick,
}: {
  filled: boolean;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} className="focus:outline-none">
      <Star
        strokeWidth={1.5}
        className={`
          md:w-7 md:h-7 w-5 h-5 transition-colors duration-200 
          ${filled ? "fill-yellow-400 text-yellow-400" : "text-gray-900"}
          hover:text-yellow-500 hover:fill-yellow-500
        `}
      />
    </button>
  );
}

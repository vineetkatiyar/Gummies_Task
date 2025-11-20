"use client";

import Button from "./Button";
import StarIcon from "./Stars";
import Timer from "./Timer";
import { X } from "lucide-react";

interface QuestionCardProps {
  question: {
    title: string;
    description: string;
  };
  current: number;
  total: number;
  rating: number;
  onRate: (star: number) => void;
  onNext: () => void;
}

export default function QuestionCard({
  question,
  current,
  total,
  rating,
  onRate,
  onNext,
}: QuestionCardProps) {
  return (
    <div className="bg-white p-3 sm:p-6 md:p-8 rounded-lg shadow-lg w-full max-w-xl mx-4 sm:mx-auto relative">
      {/* Close Button */}
      <button className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-800 hover:text-gray-900">
        <X className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      {/* Question Title */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 mt-2 sm:mt-3 text-gray-900">
        {question.title}
      </h2>

      {/* Question Description */}
      <p className="text-gray-800 mb-4 sm:mb-5 text-sm sm:text-base">
        {question.description}
      </p>

      {/* Star Rating */}
      <div className="flex justify-start md:gap-2 gap-0 mb-4 sm:mb-6 mt-6 sm:mt-8">
        {[1, 2, 3, 4, 5].map((star, i) => {
          const labels = ["Very Bad", "Bad", "Handles", "Good", "Perfect"];
          return (
            <div key={star} className="flex flex-col items-center">
              <StarIcon filled={rating >= star} onClick={() => onRate(star)} />
              <span className="text-[8px] sm:text-[9px] mt-1 text-gray-500 text-center px-1">
                {labels[i]}
              </span>
            </div>
          );
        })}
      </div>

      {/* Footer Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 sm:mt-6 border-t pt-3 sm:pt-4 gap-3 sm:gap-0">
        {/* Left Section - Button and Counter */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
          <Button onClick={onNext}>Next Question</Button>
          <p className="text-[10px] text-gray-500 text-center sm:text-left sm:mt-2">
            Remaining Question {current} / {total}
          </p>
        </div>

        {/* Right Section - Timer */}
        <div className="flex justify-center sm:justify-end">
          <Timer initial={900} />
        </div>
      </div>
    </div>
  );
}

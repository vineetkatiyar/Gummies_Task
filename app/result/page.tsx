"use client";
import Button from "@/components/Button";
import { questions } from "@/data/Questions";
import { useRatingStore } from "@/store/useResultStore";
import { Check, Star, X } from "lucide-react";
import { useRouter } from "next/navigation";

const Result = () => {
  const questionRatings = useRatingStore((state) => state.questionRatings);
  const router = useRouter();
  const average =
    questionRatings.reduce((sum, x) => sum + x, 0) / questionRatings.length;

  function restart() {
    router.push("/");
  }

  function renderStars(count: number) {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((num) => (
          <Star
            key={num}
            className="w-4 h-4"
            strokeWidth={2}
            color={num <= count ? "#f0b719" : "#d4d4d8"}
            fill={num <= count ? "#f0b719" : "none"}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 md:p-6 p-4">
      <div className="bg-white md:p-10 p-4 rounded-2xl shadow-lg relative text-center max-w-lg mx-auto">
        <button className="absolute top-4 right-4 text-gray-800 hover:text-gray-900">
          <X className="md:w-6 md:h-6 w-4 h-4" />
        </button>
        <div className="flex justify-center mb-8">
          <div className="relative w-12 h-12 bg-[#D1FADF] rounded-full flex items-center justify-center">
            <Check
              className="w-14 h-14 text-[#12B76A] absolute -top-3 -left-1"
              strokeWidth={3}
            />
          </div>
        </div>
        <h2 className="text-3xl font-semibold text-black mb-1">Thank You</h2>
        <p className="text-gray-500 text-xs mb-6">
          Your answers have been sent.
        </p>
        <div className="text-left mb-6 space-y-3">
          {questions.map((q, i) => (
            <div key={i} className="flex justify-between items-center">
              <span className="font-medium text-gray-800 text-sm">
                {q.title}
              </span>

              <span className="flex items-center gap-1 text-sm font-semibold text-gray-700">
                {renderStars(questionRatings[i])}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center md:gap-4 gap-2 items-center mb-6">
          <span className="font-medium text-gray-800 text-sm">Average</span>
          <span className="flex items-center gap-1 text-sm font-semibold text-gray-700">
            {average} stars{" "}
          </span>
        </div>

        <p className="text-gray-900 md:text-base text-sm mb-8 md:px-4">
          Toffee gummies sweet roll marshmallow cake marshmallow sweet pastry
        </p>
        <div className="flex justify-center">
          <Button variant="primary" loading={false} onClick={restart}>
            Start Again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Result;

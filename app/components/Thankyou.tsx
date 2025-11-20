"use client";

import { Check, X } from "lucide-react";
import Button from "./Button";

export default function ThankYou({ onRestart }: { onRestart: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 md:p-6 p-2">
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
        <p className="text-gray-900 md:text-lg text-sm mb-8 md:px-4">
          Toffee gummies sweet roll marshmallow cake marshmallow sweet pastry
        </p>
        <Button onClick={onRestart}>Start Evaluation</Button>
      </div>
    </div>
  );
}

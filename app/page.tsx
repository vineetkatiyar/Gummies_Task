"use client";

import { questions } from "@/data/Questions";
import { useState } from "react";
import QuestionCard from "../components/QuestionCard";
import { useRouter } from "next/navigation";
import { useRatingStore } from "@/store/useResultStore";

export default function Home() {

  const currentQuestion = useRatingStore((state) => state.currentQuestion);
  const ratings = useRatingStore((state) => state.questionRatings);
  const setRating = useRatingStore((state) => state.setRating);
  const nextQuestion = useRatingStore((state) => state.nextQuestion);

  const router = useRouter();

  const question = questions[currentQuestion]; 

  function handleRate(star: number) {
   setRating(currentQuestion, star);
  }

  function nextQuestionFn() {
    if (currentQuestion < questions.length - 1) {
      nextQuestion()
   } else {
      router.push("/result")
   }
   
  }

  const isDisabled = ratings[currentQuestion] === 0;


  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 md:p-6 relative">
      <QuestionCard
        question={question}
        current={currentQuestion + 1}
        total={questions.length}
        rating={ratings?.[currentQuestion] ?? 0}
        onRate={handleRate}
        onNext={nextQuestionFn}
        disabled={isDisabled}
      />
    </div>
  );
}

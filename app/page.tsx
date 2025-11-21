"use client";

import { questions } from "@/data/Questions";
import { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import ThankYou from "./components/Thankyou";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [ratings, setRatings] = useState(Array(questions.length).fill(0));
  const [completed, setCompleted] = useState(false);

  const current = questions[index];

  function handleRate(star: number) {
    const copy = [...ratings];
    copy[index] = star;
    setRatings(copy);
  }

  function nextQuestion() {
    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      setCompleted(true);
    }
  }
  if (completed) {
    return (
      <ThankYou
        onRestart={() => {
          setCompleted(false);
          setIndex(0);
          setRatings(Array(questions.length).fill(0));
        }}
      />
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 md:p-6 relative">
      <QuestionCard
        question={current}
        current={index + 1}
        total={questions.length}
        rating={ratings[index]}
        onRate={handleRate}
        onNext={nextQuestion}
      />
    </div>
  );
}

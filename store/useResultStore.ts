import { create } from "zustand";

interface RatingStore {
  questionRatings: number[];
  currentQuestion: number; 
  setRating: (index: number, value: number) => void;
  nextQuestion: () => void;
  resetAll: () => void;
}

export const useRatingStore = create<RatingStore>((set) => ({
    questionRatings: Array(10).fill(0),
    currentQuestion: 0,

  setRating: (index, value) =>
    set((state) => {
      const updatedRating = [...state.questionRatings];
      updatedRating[index] = value;
      return { questionRatings: updatedRating };
    }),

  nextQuestion: () =>
    set((state) => ({
      currentQuestion: state.currentQuestion + 1,
    })),

  resetAll: () =>
    set({
      questionRatings: Array(10).fill(0),
      currentQuestion: 0,
    }),
}));

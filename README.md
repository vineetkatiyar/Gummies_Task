# Evaluation Questionnaire UI

A clean and responsive questionnaire UI built with **Next.js (App Router)** and **Tailwind CSS**.

## Features
- Star-rating system (5 levels)
- Countdown timer (HH:MM:SS)
- 10-step questions flow
- “Next Question” navigation
- Remaining question counter
- Thank-you screen with custom icon
- Mobile-responsive components

## Components
- `QuestionCard` – Main question layout
- `Stars` – Interactive rating icons
- `Timer` – Auto countdown
- `Button` – Gradient action button
- `ThankYou` – Final screen
- `questions.ts` – Question data array

## 📁 Folder Structure

app/
└─ page.tsx

components/
├─ Button.tsx
├─ QuestionCard.tsx
├─ Stars.tsx
├─ Timer.tsx
└─ ThankYou.tsx

data/
└─ questions.ts


## Run Locally
```bash
npm install
npm run dev
```
---
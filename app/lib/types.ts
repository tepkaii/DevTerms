// types.ts
export interface LearningResource {
  id: string; // Keep this for resources since they need unique identifiers within a term
  title: string;
  url: string;
  type: "youtube" | "personal" | "article" | "documentation";
  duration?: string; // for videos like "10:23"
  description?: string;
}

export interface Term {
  term: string; // Removed id - using term as natural identifier
  definition: string;
  category: string;
  resources?: LearningResource[];
}

export interface WordItem {
  word: string; // Removed id - using word as natural identifier
  isDevTerm: boolean;
  definition?: string;
  resources?: LearningResource[];
  isCompleted: boolean;
  isCorrect: boolean;
  userInput: string;
}

export interface Stats {
  wpm: number;
  accuracy: number;
  mistakes: number;
  totalTyped: number;
  correctWords: number;
  timeRemaining: number;
  wordsCompleted: number;
}

export type SessionDuration = 30 | 60 | 120; // seconds

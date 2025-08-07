// types.ts
export interface LearningResource {
  id: string;
  title: string;
  url: string;
  type: "youtube" | "personal" | "article" | "documentation";
  duration?: string; // for videos like "10:23"
  description?: string;
}

export interface Term {
  term: string; // Using term as natural identifier
  definition: string;
  category: string;
  resources?: LearningResource[];
}

export interface WordItem {
  word: string; // Using word as natural identifier
  isDevTerm: boolean;
  definition?: string;
  resources?: LearningResource[];
  isCompleted: boolean;
  isCorrect: boolean;
  userInput: string;

  // Add missing properties for compound terms
  originalTerm?: string;
  isCompound?: boolean;
  compoundIndex?: number;
  compoundTotal?: number;
}

export interface Stats {
  wpm: number;
  accuracy: number;
  mistakes: number;
  totalTyped: number;
  correctWords: number;
  timeRemaining: number;
  wordsCompleted: number;

  // Enhanced stats for Net WPM calculation
  totalCharacters: number; // Made required since it's used in calculations
  correctCharacters: number; // Made required
  incorrectCharacters: number; // Made required
  uncorrectedErrors: number; // Made required
  elapsedTime: number; // Made required
  sessionDuration: number; // Made required
}

export type SessionDuration = 60 | 120 | 180; // seconds
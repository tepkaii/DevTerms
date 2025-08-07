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
  originalTerm?: string; // Added for compound term tracking
}

export interface WordItem {
  word: string; // Using word as natural identifier
  isDevTerm: boolean;
  definition?: string;
  resources?: LearningResource[];
  category?: string; // Added - used in sentenceGenerator.ts line 69
  isCompleted: boolean;
  isCorrect: boolean;
  userInput: string;

  // Compound term properties
  originalTerm?: string; // Used in sentenceGenerator.ts line 70
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
  timeRemaining?: number; // Optional - checked with !== undefined
  wordsCompleted: number;

  // Enhanced stats for Net WPM calculation
  totalCharacters?: number; // Optional - has fallback logic
  correctCharacters?: number; // Optional - has fallback logic  
  incorrectCharacters?: number; // Optional - has fallback logic
  uncorrectedErrors?: number; // Optional - has fallback logic
  elapsedTime?: number; // Optional - has fallback logic
  sessionDuration?: number; // Optional - has fallback logic
}

export type SessionDuration = 60 | 120 | 180; // seconds
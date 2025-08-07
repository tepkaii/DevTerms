// dd/app/TermsComponents/PracticeView.tsx
// @ts-nocheck
// @ts-nocheck
"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import TypingArea from "./TypingArea";
import StatsPanel from "./StatsPanel";
import type { SessionDuration, Stats, Term, WordItem } from "../lib/types";
import { SentenceGenerator } from "../lib/sentenceGenerator";
import Image from "next/image";
import Link from "next/link";

interface PracticeViewProps {
  terms: Term[];
  category: string;
  duration: SessionDuration;
}

const PracticeView: React.FC<PracticeViewProps> = ({
  terms,
  category,
  duration,
}) => {
  const router = useRouter();
  const [sentenceGenerator] = useState(() => new SentenceGenerator(terms));
  const [currentWords, setCurrentWords] = useState<WordItem[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [sessionStarted, setSessionStarted] = useState(false);
  const [sessionCompleted, setSessionCompleted] = useState(false);
  const [usedTerms, setUsedTerms] = useState<Term[]>([]);

  // Timer states - much simpler approach
  const [totalTimeSpent, setTotalTimeSpent] = useState(0); // Sum of all completed timer sessions
  const [currentSessionTime, setCurrentSessionTime] = useState(0); // Current session elapsed time
  const practizedTerms = sentenceGenerator.getUsedOriginalTerms();

  const [stats, setStats] = useState<Stats>({
    wpm: 0,
    accuracy: 100,
    mistakes: 0,
    totalTyped: 0,
    correctWords: 0,
    timeRemaining: duration,
    wordsCompleted: 0,
    // Add character-level tracking - now all required by Stats interface
    totalCharacters: 0,
    correctCharacters: 0,
    incorrectCharacters: 0,
    uncorrectedErrors: 0,
    elapsedTime: 0,
    sessionDuration: duration,
  });

  // Use ref to ensure only one timer runs
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize first sentence
  useEffect(() => {
    generateNewSentence();
  }, []);

  // Main countdown timer and session time tracker
  useEffect(() => {
    // Clear any existing interval first
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (isSessionActive && (stats.timeRemaining ?? 0) > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentSessionTime((prev) => {
          const newTime = prev + 1;

          // Update elapsedTime in stats
          setStats((prevStats) => ({
            ...prevStats,
            elapsedTime: newTime,
          }));

          return newTime;
        });

        setStats((prev) => {
          const currentTimeRemaining = prev.timeRemaining ?? 0;
          const newTimeRemaining = currentTimeRemaining - 1;

          if (newTimeRemaining <= 0) {
            // Clear the interval immediately
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
              intervalRef.current = null;
            }

            // Add the current session time to total
            setCurrentSessionTime((currentTime) => {
              setTotalTimeSpent((prevTotal) => prevTotal + currentTime);
              return 0;
            });

            setIsSessionActive(false);
            setSessionCompleted(true);
            return { ...prev, timeRemaining: 0 };
          }

          return { ...prev, timeRemaining: newTimeRemaining };
        });
      }, 1000);
    }

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isSessionActive, stats.timeRemaining]);

  const generateNewSentence = useCallback(() => {
    const newWords = sentenceGenerator.generateSentence();
    setCurrentWords(newWords);
    setCurrentWordIndex(0);
  }, [sentenceGenerator]);

  const startSession = () => {
    setIsSessionActive(true);
    setSessionStarted(true);
  };

  const pauseSession = () => {
    // Clear interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Add current session time to total when pausing
    setTotalTimeSpent((prev) => prev + currentSessionTime);
    setCurrentSessionTime(0);
    setIsSessionActive(false);

    // Reset elapsedTime in stats when pausing
    setStats((prev) => ({ ...prev, elapsedTime: 0 }));
  };

  const resetSession = () => {
    // Clear interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Reset all states
    setIsSessionActive(false);
    setSessionStarted(false);
    setSessionCompleted(false);
    setUsedTerms([]);
    setCurrentSessionTime(0);

    // Reset stats but keep total time
    setStats({
      wpm: 0,
      accuracy: 100,
      mistakes: 0,
      totalTyped: 0,
      correctWords: 0,
      timeRemaining: duration,
      wordsCompleted: 0,
      // Reset character-level tracking
      totalCharacters: 0,
      correctCharacters: 0,
      incorrectCharacters: 0,
      uncorrectedErrors: 0,
      elapsedTime: 0,
      sessionDuration: duration,
    });

    sentenceGenerator.reset();
    generateNewSentence();
  };

  const handleWordComplete = (
    wordIndex: number,
    userInput: string,
    isCorrect: boolean,
    charactersTyped: number,
    correctCharacters: number,
    incorrectCharacters: number
  ) => {
    // Update the word in current words
    setCurrentWords((prev) =>
      prev.map((word, index) =>
        index === wordIndex
          ? { ...word, isCompleted: true, isCorrect, userInput }
          : word
      )
    );

    // Track used terms
    const completedWord = currentWords[wordIndex];
    if (completedWord.isDevTerm && completedWord.definition) {
      const term: Term = {
        term: completedWord.originalTerm || completedWord.word, // Use originalTerm if available
        definition: completedWord.definition,
        category: completedWord.category || category, // Use word's category or fallback
        resources: completedWord.resources,
        originalTerm: completedWord.originalTerm, // Include originalTerm
      };

      setUsedTerms((prev) => {
        const exists = prev.some((t) => t.term === term.term);
        return exists ? prev : [...prev, term];
      });
    }

    // Update stats with character-level precision from TypingArea
    setStats((prev) => ({
      ...prev,
      totalTyped: prev.totalTyped + 1,
      correctWords: prev.correctWords + (isCorrect ? 1 : 0),
      mistakes: prev.mistakes + (isCorrect ? 0 : 1),
      wordsCompleted: prev.wordsCompleted + 1,
      // Character-level stats from TypingArea calculation
      totalCharacters: (prev.totalCharacters ?? 0) + charactersTyped,
      correctCharacters: (prev.correctCharacters ?? 0) + correctCharacters,
      incorrectCharacters:
        (prev.incorrectCharacters ?? 0) + incorrectCharacters,
      uncorrectedErrors: (prev.uncorrectedErrors ?? 0) + (isCorrect ? 0 : 1),
    }));
  };

  const handleNextWord = () => {
    const nextIndex = currentWordIndex + 1;

    if (nextIndex >= currentWords.length) {
      // Generate new sentence when current one is complete
      generateNewSentence();
    } else {
      setCurrentWordIndex(nextIndex);
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-10 select-none">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/dt-logo.png"
              alt="DevTerms Logo"
              width={32}
              height={32}
              className="h-8 w-8"
              priority
            />
            <h1 className="text-xl font-bold text-foreground">DevTerms</h1>
          </Link>

          <Button variant="secondary" size="sm" className="text-lg px-4 py-2">
            {category} Terms • {duration}s
          </Button>
        </header>

        {/* Typing Area */}
        <TypingArea
          words={currentWords}
          currentWordIndex={currentWordIndex}
          onWordComplete={handleWordComplete}
          onNextWord={handleNextWord}
          onReset={resetSession}
          onStartSession={startSession}
          onPauseSession={pauseSession}
          timeRemaining={stats.timeRemaining ?? 0}
          isSessionActive={isSessionActive}
          sessionCompleted={sessionCompleted}
          sessionStarted={sessionStarted}
          currentSessionTime={currentSessionTime}
          totalTimeSpent={totalTimeSpent}
        />

        {/* Stats */}
        <StatsPanel
          stats={stats}
          isSessionActive={isSessionActive}
          sessionCompleted={sessionCompleted}
          usedTerms={practizedTerms} // Use the original terms, not individual words
        />
      </div>
    </div>
  );
};

export default PracticeView;

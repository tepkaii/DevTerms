// PracticeView.tsx
// @ts-nocheck
// @ts-ignore
"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import TypingArea from "./TypingArea";
import StatsPanel from "./StatsPanel";
import ConfigurationDialog from "../components/ConfigurationDialog";
import type { SessionDuration, Stats, Term, WordItem } from "../lib/types";
import { SentenceGenerator } from "../lib/sentenceGenerator";
import { devTerms, categories } from "../lib/terms";
import Image from "next/image";
import Link from "next/link";
import { NavArrowDown } from "iconoir-react";
import Loading from "../components/loading";

const PracticeView: React.FC = () => {
  // Configuration state - start with all categories selected
  const [selectedCategories, setSelectedCategories] = useState<string[]>(() =>
    categories.filter((cat) => cat !== "All")
  );
  const [duration, setDuration] = useState<SessionDuration>(60);

  // Add loading delay state
  const [hasWaitedForLoad, setHasWaitedForLoad] = useState(false);

  // Get filtered terms based on selected categories
  const getFilteredTerms = useCallback((): Term[] => {
    if (selectedCategories.length === 0) return [];

    const uniqueTerms = new Map<string, Term>();
    selectedCategories.forEach((category) => {
      const categoryTerms = devTerms.filter(
        (term) => term.category === category
      );
      categoryTerms.forEach((term) => {
        uniqueTerms.set(term.term, term);
      });
    });

    return Array.from(uniqueTerms.values());
  }, [selectedCategories]);

  const [filteredTerms, setFilteredTerms] = useState<Term[]>([]);
  const [sentenceGenerator, setSentenceGenerator] =
    useState<SentenceGenerator | null>(null);

  // Practice state
  const [currentWords, setCurrentWords] = useState<WordItem[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [sessionStarted, setSessionStarted] = useState(false);
  const [sessionCompleted, setSessionCompleted] = useState(false);
  const [usedTerms, setUsedTerms] = useState<Term[]>([]);

  // Timer states
  const [totalTimeSpent, setTotalTimeSpent] = useState(0);
  const [currentSessionTime, setCurrentSessionTime] = useState(0);

  const [stats, setStats] = useState<Stats>({
    wpm: 0,
    accuracy: 100,
    mistakes: 0,
    totalTyped: 0,
    correctWords: 0,
    timeRemaining: duration,
    wordsCompleted: 0,
    totalCharacters: 0,
    correctCharacters: 0,
    incorrectCharacters: 0,
    uncorrectedErrors: 0,
    elapsedTime: 0,
    sessionDuration: duration,
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Add loading delay effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasWaitedForLoad(true);
    }, 1000); // 2 second delay

    return () => clearTimeout(timer);
  }, []);

  // Initialize filtered terms and sentence generator
  useEffect(() => {
    const terms = getFilteredTerms();
    setFilteredTerms(terms);

    if (terms.length > 0) {
      const generator = new SentenceGenerator(terms);
      setSentenceGenerator(generator);
    }
  }, [getFilteredTerms]);

  // Initialize first sentence when generator is ready
  useEffect(() => {
    if (sentenceGenerator) {
      generateNewSentence();
    }
  }, [sentenceGenerator]);

  // Update duration in stats when duration changes
  useEffect(() => {
    setStats((prev) => ({
      ...prev,
      timeRemaining: duration,
      sessionDuration: duration,
    }));
  }, [duration]);

  // Main countdown timer
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (isSessionActive && (stats.timeRemaining ?? 0) > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentSessionTime((prev) => {
          const newTime = prev + 1;
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
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
              intervalRef.current = null;
            }

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

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isSessionActive, stats.timeRemaining]);

  const generateNewSentence = useCallback(() => {
    if (sentenceGenerator) {
      const newWords = sentenceGenerator.generateSentence();
      setCurrentWords(newWords);
      setCurrentWordIndex(0);
    }
  }, [sentenceGenerator]);

  const handleConfigurationChange = (
    categories: string[],
    newDuration: SessionDuration
  ) => {
    // Reset everything when configuration changes
    setSelectedCategories(categories);
    setDuration(newDuration);

    // Reset session state
    setIsSessionActive(false);
    setSessionStarted(false);
    setSessionCompleted(false);
    setUsedTerms([]);
    setCurrentSessionTime(0);

    // Reset stats
    setStats({
      wpm: 0,
      accuracy: 100,
      mistakes: 0,
      totalTyped: 0,
      correctWords: 0,
      timeRemaining: newDuration,
      wordsCompleted: 0,
      totalCharacters: 0,
      correctCharacters: 0,
      incorrectCharacters: 0,
      uncorrectedErrors: 0,
      elapsedTime: 0,
      sessionDuration: newDuration,
    });

    // Clear interval if running
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startSession = () => {
    setIsSessionActive(true);
    setSessionStarted(true);
  };

  const pauseSession = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    setTotalTimeSpent((prev) => prev + currentSessionTime);
    setCurrentSessionTime(0);
    setIsSessionActive(false);
    setStats((prev) => ({ ...prev, elapsedTime: 0 }));
  };

  const resetSession = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    setIsSessionActive(false);
    setSessionStarted(false);
    setSessionCompleted(false);
    setUsedTerms([]);
    setCurrentSessionTime(0);

    setStats({
      wpm: 0,
      accuracy: 100,
      mistakes: 0,
      totalTyped: 0,
      correctWords: 0,
      timeRemaining: duration,
      wordsCompleted: 0,
      totalCharacters: 0,
      correctCharacters: 0,
      incorrectCharacters: 0,
      uncorrectedErrors: 0,
      elapsedTime: 0,
      sessionDuration: duration,
    });

    if (sentenceGenerator) {
      sentenceGenerator.reset();
      generateNewSentence();
    }
  };

  const handleWordComplete = (
    wordIndex: number,
    userInput: string,
    isCorrect: boolean,
    charactersTyped: number,
    correctCharacters: number,
    incorrectCharacters: number
  ) => {
    setCurrentWords((prev) =>
      prev.map((word, index) =>
        index === wordIndex
          ? { ...word, isCompleted: true, isCorrect, userInput }
          : word
      )
    );

    const completedWord = currentWords[wordIndex];
    if (completedWord.isDevTerm && completedWord.definition) {
      const term: Term = {
        term: completedWord.originalTerm || completedWord.word,
        definition: completedWord.definition,
        category: completedWord.category || selectedCategories[0] || "General",
        resources: completedWord.resources,
        originalTerm: completedWord.originalTerm,
      };

      setUsedTerms((prev) => {
        const exists = prev.some((t) => t.term === term.term);
        return exists ? prev : [...prev, term];
      });
    }

    setStats((prev) => ({
      ...prev,
      totalTyped: prev.totalTyped + 1,
      correctWords: prev.correctWords + (isCorrect ? 1 : 0),
      mistakes: prev.mistakes + (isCorrect ? 0 : 1),
      wordsCompleted: prev.wordsCompleted + 1,
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
      generateNewSentence();
    } else {
      setCurrentWordIndex(nextIndex);
    }
  };

  const formatCategoriesDisplay = (selectedCategories: string[]): string => {
    if (selectedCategories.length === 0) return "No categories";

    // Check if all categories are selected (excluding "All" from the categories array)
    const allAvailableCategories = categories.filter((cat) => cat !== "All");
    if (selectedCategories.length === allAvailableCategories.length) {
      return "All";
    }

    if (selectedCategories.length === 1) return selectedCategories[0];
    if (selectedCategories.length === 2) return selectedCategories.join(" & ");
    return `${selectedCategories.slice(0, 2).join(", ")} +${
      selectedCategories.length - 2
    } more`;
  };

  const practizedTerms = sentenceGenerator?.getUsedOriginalTerms() || [];

  // Show loading or wait state before showing "no terms" message
  if (!hasWaitedForLoad || filteredTerms.length === 0 || !sentenceGenerator) {
    // If we haven't waited yet, show a minimal loading state
    if (!hasWaitedForLoad) {
      return <Loading />;
    }

    // After waiting, show the "no terms" message if needed
    if (filteredTerms.length === 0 || !sentenceGenerator) {
      return (
        <div className="min-h-screen bg-background p-6">
          <div className="max-w-6xl mx-auto">
            <header className="flex items-center justify-between mb-10">
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

              <ConfigurationDialog
                currentCategories={selectedCategories}
                currentDuration={duration}
                onConfigurationChange={handleConfigurationChange}
              >
                <Button
                  variant="secondary"
                  size="sm"
                  className="text-lg px-4 py-2"
                >
                  Configure Practice
                </Button>
              </ConfigurationDialog>
            </header>

            <div className="text-center py-20">
              <h2 className="text-xl font-semibold mb-4">No terms available</h2>
              <p className="text-muted-foreground mb-6">
                Please select at least one category to start practicing.
              </p>
              <ConfigurationDialog
                currentCategories={selectedCategories}
                currentDuration={duration}
                onConfigurationChange={handleConfigurationChange}
              >
                <Button>Configure Categories</Button>
              </ConfigurationDialog>
            </div>
          </div>
        </div>
      );
    }
  }

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

          <ConfigurationDialog
            currentCategories={selectedCategories}
            currentDuration={duration}
            onConfigurationChange={handleConfigurationChange}
          >
            <Button
              variant="secondary"
              size="sm"
              className="text-lg px-4 py-2 flex items-center "
            >
              {formatCategoriesDisplay(selectedCategories)} • {duration}s{" "}
              <NavArrowDown className="size-5 " />
            </Button>
          </ConfigurationDialog>
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
          usedTerms={practizedTerms}
        />
      </div>
    </div>
  );
};

export default PracticeView;
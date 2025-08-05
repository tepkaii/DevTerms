"use client";

import React, { useState, useEffect, useCallback } from "react";
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
  const [stats, setStats] = useState<Stats>({
    wpm: 0,
    accuracy: 100,
    mistakes: 0,
    totalTyped: 0,
    correctWords: 0,
    timeRemaining: duration,
    wordsCompleted: 0,
  });

  // Initialize first sentence
  useEffect(() => {
    generateNewSentence();
  }, []);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isSessionActive && stats.timeRemaining > 0) {
      interval = setInterval(() => {
        setStats((prev) => {
          const newTimeRemaining = prev.timeRemaining - 1;
          if (newTimeRemaining <= 0) {
            setIsSessionActive(false);
            setSessionCompleted(true);
            return { ...prev, timeRemaining: 0 };
          }
          return { ...prev, timeRemaining: newTimeRemaining };
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isSessionActive, stats.timeRemaining]);

  // Calculate WPM
  useEffect(() => {
    if (sessionStarted && stats.wordsCompleted > 0) {
      const timeElapsed = (duration - stats.timeRemaining) / 60; // minutes
      const wpm =
        timeElapsed > 0 ? Math.round(stats.wordsCompleted / timeElapsed) : 0;
      setStats((prev) => ({ ...prev, wpm }));
    }
  }, [stats.wordsCompleted, stats.timeRemaining, duration, sessionStarted]);

  // Calculate accuracy
  useEffect(() => {
    if (stats.totalTyped > 0) {
      const accuracy = Math.round(
        (stats.correctWords / stats.totalTyped) * 100
      );
      setStats((prev) => ({ ...prev, accuracy }));
    }
  }, [stats.correctWords, stats.totalTyped]);

  const generateNewSentence = useCallback(() => {
    const newWords = sentenceGenerator.generateSentence();
    setCurrentWords(newWords);
    setCurrentWordIndex(0);
  }, [sentenceGenerator]);

  const startSession = () => {
    setIsSessionActive(true);
    setSessionStarted(true);
  };

  const resetSession = () => {
    setIsSessionActive(false);
    setSessionStarted(false);
    setSessionCompleted(false);
    setUsedTerms([]);
    setStats({
      wpm: 0,
      accuracy: 100,
      mistakes: 0,
      totalTyped: 0,
      correctWords: 0,
      timeRemaining: duration,
      wordsCompleted: 0,
    });
    sentenceGenerator.reset();
    generateNewSentence();
  };

  const handleWordComplete = (
    wordIndex: number,
    userInput: string,
    isCorrect: boolean
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
        term: completedWord.word,
        definition: completedWord.definition,
        category: category,
        resources: completedWord.resources,
      };

      setUsedTerms((prev) => {
        const exists = prev.some((t) => t.term === term.term);
        return exists ? prev : [...prev, term];
      });
    }

    // Update stats
    setStats((prev) => ({
      ...prev,
      totalTyped: prev.totalTyped + 1,
      correctWords: prev.correctWords + (isCorrect ? 1 : 0),
      mistakes: prev.mistakes + (isCorrect ? 0 : 1),
      wordsCompleted: prev.wordsCompleted + 1,
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
        <header className="flex items-center justify-between mb-10">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/dt-logo.png"
              alt="DevTerms Logo"
              width={32}
              height={32}
              className="h-8 w-8"
              priority
            />{" "}
            <h1 className="text-xl font-bold text-foreground">DevTerms</h1>{" "}
          </Link>

          <Button variant="secondary" size="sm" className="text-lg px-4 py-2">
            {category} • {duration}s
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
          timeRemaining={stats.timeRemaining}
          isSessionActive={isSessionActive}
          sessionCompleted={sessionCompleted}
          sessionStarted={sessionStarted}
        />

        {/* Stats */}
        <StatsPanel
          stats={stats}
          isSessionActive={isSessionActive}
          sessionCompleted={sessionCompleted}
          usedTerms={usedTerms}
        />
      </div>
    </div>
  );
};

export default PracticeView;

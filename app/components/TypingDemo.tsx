"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Timer } from "iconoir-react";

interface DemoWord {
  word: string;
  definition?: string;
  isDevTerm: boolean;
  isCompleted: boolean;
  isCorrect: boolean;
}

const TypingDemo: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentInput, setCurrentInput] = useState("");
  const [words, setWords] = useState<DemoWord[]>([
    {
      word: "function",
      definition: "A reusable block of code that performs a specific task",
      isDevTerm: true,
      isCompleted: false,
      isCorrect: false,
    },
    {
      word: "to",
      definition: undefined,
      isDevTerm: false,
      isCompleted: false,
      isCorrect: false,
    },
    {
      word: "API",
      definition:
        "Application Programming Interface - a set of protocols for building software",
      isDevTerm: true,
      isCompleted: false,
      isCorrect: false,
    },
    {
      word: "and",
      definition: undefined,
      isDevTerm: false,
      isCompleted: false,
      isCorrect: false,
    },
    {
      word: "database",
      definition: "An organized collection of structured information or data",
      isDevTerm: true,
      isCompleted: false,
      isCorrect: false,
    },
    {
      word: "with",
      definition: undefined,
      isDevTerm: false,
      isCompleted: false,
      isCorrect: false,
    },
    {
      word: "React",
      definition: "A JavaScript library for building user interfaces",
      isDevTerm: true,
      isCompleted: false,
      isCorrect: false,
    },
  ]);
  const [timeRemaining, setTimeRemaining] = useState(58);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => (prev > 0 ? prev - 1 : 60));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (currentWordIndex >= words.length) {
      // Reset demo
      setTimeout(() => {
        setWords((prev) =>
          prev.map((w) => ({ ...w, isCompleted: false, isCorrect: false }))
        );
        setCurrentWordIndex(0);
        setCurrentInput("");
        setIsTyping(false);
      }, 2000);
      return;
    }

    const currentWord = words[currentWordIndex];
    if (!currentWord || currentWord.isCompleted) return;

    const typeWord = async () => {
      setIsTyping(true);
      const word = currentWord.word;

      // Sometimes make intentional mistakes for demo
      const shouldMakeMistake = Math.random() > 0.7;
      let typingSequence = word;

      if (shouldMakeMistake && word.length > 3) {
        // Add a wrong character in the middle, then correct it
        const mistakePos = Math.floor(word.length / 2);
        typingSequence =
          word.slice(0, mistakePos) + "x" + word.slice(mistakePos);
      }

      // Type character by character
      for (let i = 0; i <= typingSequence.length; i++) {
        setCurrentInput(typingSequence.slice(0, i));
        await new Promise((resolve) =>
          setTimeout(resolve, 100 + Math.random() * 100)
        );
      }

      // If we made a mistake, correct it
      if (shouldMakeMistake && word.length > 3) {
        await new Promise((resolve) => setTimeout(resolve, 300));
        // Delete the wrong character
        for (let i = typingSequence.length; i >= word.length; i--) {
          setCurrentInput(typingSequence.slice(0, i));
          await new Promise((resolve) => setTimeout(resolve, 50));
        }
        // Complete the correct word
        for (let i = word.length; i <= word.length; i++) {
          setCurrentInput(word.slice(0, i));
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
      }

      // Mark word as completed
      setWords((prev) =>
        prev.map((w, i) =>
          i === currentWordIndex
            ? { ...w, isCompleted: true, isCorrect: true }
            : w
        )
      );

      // Clear input and move to next word
      await new Promise((resolve) => setTimeout(resolve, 200));
      setCurrentInput("");
      setCurrentWordIndex((prev) => prev + 1);
      setIsTyping(false);

      // Pause between words
      await new Promise((resolve) => setTimeout(resolve, 500));
    };

    const startTyping = setTimeout(typeWord, 1000 + Math.random() * 1000);
    return () => clearTimeout(startTyping);
  }, [currentWordIndex, words]);

  const renderCurrentWord = (word: DemoWord) => {
    if (!currentInput) {
      return (
        <span
          className={
            word.isDevTerm
              ? "bg-yellow-200 text-yellow-700 border-yellow-400 px-2 py-1 mx-1 rounded font-semibold border-2 inline-block"
              : "bg-secondary text-secondary-foreground px-2 py-1 mx-1 rounded border-2 border-border inline-block"
          }
        >
          {word.word}
        </span>
      );
    }

    const userInput = currentInput.toLowerCase();
    const chars = word.word.split("");

    return (
      <span
        className={
          word.isDevTerm
            ? "px-2 py-1 mx-1 rounded font-semibold border-2 border-black/20 inline-block"
            : "px-2 py-1 mx-1 rounded border-2 border-border inline-block"
        }
      >
        {chars.map((char, charIndex) => {
          const userChar = userInput[charIndex];
          let className = "";

          if (userChar === undefined) {
            className = "bg-secondary text-secondary-foreground";
          } else if (userChar === char.toLowerCase()) {
            className = "bg-green-100 text-green-800";
          } else {
            className = "bg-red-100 text-red-800";
          }

          return (
            <span key={charIndex} className={className}>
              {char}
            </span>
          );
        })}
        {userInput.length > word.word.length && (
          <span className="bg-red-100 text-red-800">
            {currentInput.slice(word.word.length)}
          </span>
        )}
      </span>
    );
  };

  const getWordClassName = (word: DemoWord, index: number) => {
    if (word.isCompleted) {
      if (word.isDevTerm) {
        return word.isCorrect
          ? "bg-green-100 text-green-800 px-2 py-1 mx-1 rounded cursor-pointer hover:bg-green-200 border border-green-300 inline-block"
          : "bg-red-100 text-red-800 px-2 py-1 mx-1 rounded cursor-pointer hover:bg-red-200 line-through border border-red-300 inline-block";
      }
      return word.isCorrect
        ? "text-green-600 mx-1 inline-block"
        : "text-red-600 line-through mx-1 inline-block";
    }

    if (word.isDevTerm && index !== currentWordIndex) {
      return "bg-yellow-200 text-yellow-700 border-yellow-400 px-2 py-1 mx-1 rounded font-medium border inline-block";
    }

    return "text-foreground mx-1 inline-block";
  };

  const renderTypedCharacters = () => {
    if (!words[currentWordIndex] || !currentInput) return null;

    const targetWord = words[currentWordIndex].word.toLowerCase();
    const chars = currentInput.split("");

    return (
      <span>
        {chars.map((char, charIndex) => {
          const targetChar = targetWord[charIndex];
          let className = "";

          if (targetChar && char === targetChar) {
            className = "bg-green-100 text-green-800";
          } else {
            className = "bg-red-100 text-red-800";
          }

          return (
            <span key={charIndex} className={className}>
              {char}
            </span>
          );
        })}
      </span>
    );
  };

  const formatTime = (seconds: number) => {
    return `${Math.floor(seconds / 60)}:${(seconds % 60)
      .toString()
      .padStart(2, "0")}`;
  };

  const currentWord = words[currentWordIndex];
  const isDemo = true;

  return (
    <div className="space-y-4">
      {/* Timer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center text-base sm:text-lg h-8 rounded-md gap-1.5 px-3 border-2 border-black/10">
          <Timer className="size-4" /> {formatTime(timeRemaining)}
        </div>
        <Badge
          variant="outline"
          className="text-xs h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5"
        >
          Live DEMO
        </Badge>
      </div>

      {/* Sentence Display */}
      <Card className="border-border">
        <CardContent className="p-4 sm:p-6">
          {/* Words with proper wrapping and spacing */}
          <div className="text-base sm:text-lg leading-relaxed mb-6 min-h-[100px] sm:min-h-[120px]">
            <div className="flex flex-wrap items-center gap-1">
              {words.map((word, index) => (
                <div
                  key={`${word.word}-${index}`}
                  className="relative inline-block"
                >
                  {index === currentWordIndex ? (
                    renderCurrentWord(word)
                  ) : (
                    <span
                      className={`${getWordClassName(
                        word,
                        index
                      )} transition-all duration-200`}
                    >
                      {word.word}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Current Word Info */}
          {currentWord && (
            <div className="mb-4 p-3 bg-muted rounded-lg border border-border">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-2">
                <div className="text-sm text-muted-foreground">
                  <span className="block sm:inline">Type: </span>
                  <span className="font-mono font-semibold text-foreground text-base">
                    {currentWord.word}
                  </span>
                </div>
                <div className="flex items-center gap-1 flex-wrap">
                  {currentWord.isDevTerm && (
                    <Badge
                      variant="outline"
                      className="text-xs h-8 rounded-md gap-1.5 px-3"
                    >
                      Dev Term
                    </Badge>
                  )}
                </div>
              </div>
              {currentWord.isDevTerm && currentWord.definition && (
                <div className="text-xs text-muted-foreground">
                  💡 {currentWord.definition}
                </div>
              )}
            </div>
          )}

          {/* Typing Display */}
          <div className="flex gap-3">
            <div className="flex-1 text-base sm:text-lg md:text-xl px-2 py-2 rounded-md border-2 min-h-[30px] bg-background">
              <div className="flex flex-wrap gap-1 items-center">
                {currentWord && currentInput ? (
                  <div className="font-mono">{renderTypedCharacters()}</div>
                ) : (
                  <span className="text-muted-foreground">
                    {isTyping ? "Typing..." : "Waiting for next word..."}
                    <span className="animate-pulse">|</span>
                  </span>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TypingDemo;

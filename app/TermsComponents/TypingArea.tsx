import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { RotateCcw } from "lucide-react";
import type { WordItem, Term } from "../lib/types";
import {
  PlaySolid,
  PauseSolid,
  SoundHigh,
  SoundOff,
  Timer,
  Clock,
  LightBulb,
} from "iconoir-react";
import { SpeechService } from "../lib/speechUtils";

interface TypingAreaProps {
  words: WordItem[];
  currentWordIndex: number;
  onWordComplete: (
    wordIndex: number,
    userInput: string,
    isCorrect: boolean,
    charactersTyped: number,
    correctCharacters: number,
    incorrectCharacters: number
  ) => void;
  onNextWord: () => void;
  onReset: () => void;
  onStartSession: () => void;
  onPauseSession: () => void;
  timeRemaining: number;
  isSessionActive: boolean;
  sessionCompleted: boolean;
  sessionStarted: boolean;
  currentSessionTime: number;
  totalTimeSpent: number;
}

const TypingArea: React.FC<TypingAreaProps> = ({
  words,
  currentWordIndex,
  onWordComplete,
  onNextWord,
  onReset,
  onStartSession,
  onPauseSession,
  timeRemaining,
  isSessionActive,
  sessionCompleted,
  sessionStarted,
  currentSessionTime,
  totalTimeSpent,
}) => {
  const [currentInput, setCurrentInput] = useState("");
  const [showDefinition, setShowDefinition] = useState<number | null>(null);
  const [inputStatus, setInputStatus] = useState<
    "neutral" | "correct" | "error"
  >("neutral");
  const [speechService, setSpeechService] = useState<SpeechService | null>(
    null
  );

  // Initialize speech service on client side only
  useEffect(() => {
    if (typeof window !== "undefined") {
      setSpeechService(new SpeechService());
    }
  }, []);

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedTermResources, setSelectedTermResources] =
    useState<Term | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentWord = words[currentWordIndex];
  const isTimerExpired = timeRemaining <= 0;

  useEffect(() => {
    // Auto-focus and start/resume session on any key press
    const handleGlobalKeyPress = (e: KeyboardEvent) => {
      // Don't trigger on special keys
      if (
        e.key.length === 1 &&
        !e.ctrlKey &&
        !e.altKey &&
        !e.metaKey &&
        currentWord &&
        !isTimerExpired
      ) {
        // If session hasn't started yet, start it
        if (!sessionStarted) {
          onStartSession();
          inputRef.current?.focus();
        }
        // If session is paused (started but not active), resume it
        else if (sessionStarted && !isSessionActive) {
          onStartSession(); // This will resume the session
          inputRef.current?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleGlobalKeyPress);
    return () => document.removeEventListener("keydown", handleGlobalKeyPress);
  }, [
    sessionStarted,
    isSessionActive,
    isTimerExpired,
    currentWord,
    onStartSession,
  ]);

  useEffect(() => {
    // Only focus if session is active (not paused)
    if (!isTimerExpired && isSessionActive && sessionStarted) {
      inputRef.current?.focus();
    }
  }, [currentWordIndex, isTimerExpired, isSessionActive, sessionStarted]);

  useEffect(() => {
    setCurrentInput("");
    setInputStatus("neutral");
  }, [currentWordIndex]);

  // Clean input on reset
  useEffect(() => {
    if (!sessionStarted && !sessionCompleted) {
      setCurrentInput("");
      setInputStatus("neutral");
      setShowDefinition(null);
    }
  }, [sessionStarted, sessionCompleted]);

  // Real-time input validation
  useEffect(() => {
    if (!currentWord || !currentInput) {
      setInputStatus("neutral");
      return;
    }

    const targetWord = currentWord.word.toLowerCase();
    const userInput = currentInput.toLowerCase();

    if (targetWord === userInput) {
      setInputStatus("correct");
    } else if (targetWord.startsWith(userInput)) {
      setInputStatus("correct");
    } else {
      setInputStatus("error");
    }
  }, [currentInput, currentWord]);

  // Function to calculate character-level accuracy for current input
  const calculateCharacterStats = (userInput: string, targetWord: string) => {
    let correctChars = 0;
    let incorrectChars = 0;
    const totalTyped = userInput.length;

    // Compare character by character
    for (let i = 0; i < userInput.length; i++) {
      const targetChar = targetWord[i]?.toLowerCase() || "";
      const userChar = userInput[i]?.toLowerCase() || "";

      if (targetChar && userChar === targetChar) {
        correctChars++;
      } else {
        incorrectChars++;
      }
    }

    return { totalTyped, correctChars, incorrectChars };
  };

  // Function to determine word correctness - ONLY exact matches are correct
  const determineWordCorrectness = (
    userInput: string,
    targetWord: string,
    isManualSkip: boolean
  ) => {
    const trimmedInput = userInput.toLowerCase().trim();
    const target = targetWord.toLowerCase();

    // Both auto-complete and manual skip: ONLY exact match = correct
    return trimmedInput === target;
  };

  const handleInputChange = (value: string) => {
    // Prevent input if timer expired
    if (isTimerExpired) return;

    // Auto-resume session if paused and user starts typing
    if (
      sessionStarted &&
      !isSessionActive &&
      value.length > currentInput.length
    ) {
      onStartSession();
    }

    // Start session on first input if not started
    if (!sessionStarted && value.length > 0) {
      onStartSession();
    }

    setCurrentInput(value);
  };

  const handleAdvanceWord = (isManualSkip: boolean = false) => {
    // Prevent advance if timer expired
    if (isTimerExpired) return;

    // Auto-resume session if paused
    if (sessionStarted && !isSessionActive) {
      onStartSession();
    }

    // Start session on advance if not started
    if (!sessionStarted) {
      onStartSession();
    }

    if (currentWord) {
      // Calculate character stats for partial/skipped word
      const { totalTyped, correctChars, incorrectChars } =
        calculateCharacterStats(currentInput, currentWord.word);

      // Use exact match only for correctness
      const isCorrect = determineWordCorrectness(
        currentInput,
        currentWord.word,
        isManualSkip
      );

      onWordComplete(
        currentWordIndex,
        currentInput,
        isCorrect,
        totalTyped,
        correctChars,
        incorrectChars
      );
    }

    // Always just advance to next word
    onNextWord();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Prevent all key actions if timer expired
    if (isTimerExpired) return;

    // Auto-resume session if paused and user presses any key
    if (sessionStarted && !isSessionActive) {
      onStartSession();
    }

    if (e.key === " ") {
      e.preventDefault();
      // Space always advances to next word
      handleAdvanceWord(false);
    } else if (e.key === "Enter") {
      // Enter key always skips word (manual skip)
      e.preventDefault();
      handleAdvanceWord(true);
    }
  };

  const handlePause = () => {
    onPauseSession();
    // Blur the input to prevent further typing
    inputRef.current?.blur();
  };

  const handleResume = () => {
    onStartSession();
    // Focus the input when resuming
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleReset = () => {
    // Clear all local state
    setCurrentInput("");
    setInputStatus("neutral");
    setShowDefinition(null);
    setIsSpeaking(false);
    setSelectedTermResources(null);

    // Stop any ongoing speech
    if (isSpeaking && speechService) {
      speechService.stop();
    }

    // Call parent reset
    onReset();
  };

  const handleSpeech = async () => {
    if (!currentWord || !speechService || !speechService.isSupported()) return;

    if (isSpeaking) {
      speechService.stop();
      setIsSpeaking(false);
      return;
    }

    try {
      setIsSpeaking(true);
      if (currentWord.definition) {
        await speechService.speakTerm(currentWord.word, currentWord.definition);
      } else {
        await speechService.speak(currentWord.word);
      }
    } catch (error) {
      console.error("Speech synthesis error:", error);
    } finally {
      setIsSpeaking(false);
    }
  };

  const handleShowResources = (word: WordItem) => {
    if (word.isDevTerm && word.resources) {
      const term: Term = {
        term: word.word,
        definition: word.definition || "",
        category: "General",
        resources: word.resources,
      };
      setSelectedTermResources(term);
    }
  };

  // Function to render completed words with precise character-level coloring
  const renderCompletedWord = (word: WordItem) => {
    if (!word.userInput) {
      // No input provided - show whole word as red background
      return (
        <span className="bg-red-100 text-red-800 px-2 py-1 border border-red-300">
          {word.word}
        </span>
      );
    }

    const targetWord = word.word;
    const userInput = word.userInput;
    const targetChars = targetWord.split("");

    return (
      <span className="inline-block">
        {targetChars.map((targetChar, charIndex) => {
          const userChar = userInput[charIndex];
          let className = "px-0.5"; // Small padding for each character

          if (!userChar) {
            // Character not typed - gray background with original character
            className += " bg-gray-200 text-gray-700";
          } else if (userChar.toLowerCase() === targetChar.toLowerCase()) {
            // Correct character - green background
            className += " bg-green-200 text-green-800";
          } else {
            // Wrong character - red background, show what user actually typed
            className += " bg-red-200 text-red-800";
          }

          return (
            <span key={charIndex} className={className}>
              {!userChar ? targetChar : userChar}
            </span>
          );
        })}

        {/* Show extra characters typed beyond word length - always red */}
        {userInput.length > targetWord.length &&
          userInput
            .slice(targetWord.length)
            .split("")
            .map((char, index) => (
              <span
                key={`extra-${index}`}
                className="px-0.5 bg-red-200 text-red-800"
              >
                {char}
              </span>
            ))}
      </span>
    );
  };

  // Compound term grouping - make them ONE connected visual unit
  const getCompoundGroupStyle = (
    word: WordItem,
    isCompleted: boolean = false,
    isCurrent: boolean = false
  ) => {
    if (!word.isDevTerm || !word.isCompound) {
      return "rounded mx-1";
    }

    const isFirst = word.compoundIndex === 0;
    const isLast = word.compoundIndex === word.compoundTotal! - 1;

    // For completed words, don't add border classes
    if (isCompleted) {
      if (isFirst && isLast) {
        return "rounded mx-1";
      } else if (isFirst) {
        return "rounded-l-md ml-1 mr-0";
      } else if (isLast) {
        return "rounded-r-md ml-0 mr-1";
      } else {
        return "ml-0 mr-0";
      }
    }

    // For non-completed compound terms, keep the border logic
    if (isFirst && isLast) {
      return "rounded mx-1";
    } else if (isFirst) {
      return "rounded-l-md ml-1 mr-0 border-r-0";
    } else if (isLast) {
      return "rounded-r-md ml-0 mr-1 border-l-0";
    } else {
      return "ml-0 mr-0 border-l-0 border-r-0";
    }
  };

  const getWordClassName = (word: WordItem, index: number) => {
    const compoundStyle = getCompoundGroupStyle(
      word,
      word.isCompleted,
      index === currentWordIndex
    );

    if (word.isCompleted) {
      // For completed words, NO borders - just basic styling
      if (word.isDevTerm) {
        return `px-2 py-1 cursor-pointer hover:opacity-80 inline-block ${compoundStyle}`;
      }
      // For regular completed words
      return word.isCorrect
        ? `text-green-600 mx-1 inline-block`
        : `text-red-600 mx-1 inline-block`;
    }

    // Only non-completed words get borders
    if (word.isDevTerm && index !== currentWordIndex) {
      return `bg-yellow-200 text-yellow-700 border-yellow-400 px-2 py-1 font-medium border inline-block ${compoundStyle}`;
    }

    return "text-foreground mx-1 inline-block";
  };

  const renderCurrentWord = (word: WordItem) => {
    const userInput = currentInput.toLowerCase();
    const targetWord = word.word.toLowerCase();
    const compoundStyle = getCompoundGroupStyle(word, false, true);

    if (!currentInput) {
      const baseClass = word.isDevTerm
        ? `bg-yellow-200 text-yellow-700 border-yellow-400 px-2 py-1 font-semibold border-2 inline-block ${compoundStyle}`
        : `bg-secondary text-secondary-foreground px-2 py-1 border-2 border-border inline-block ${compoundStyle}`;

      return <span className={baseClass}>{word.word}</span>;
    }

    // Character-by-character rendering with position-based coloring
    const chars = word.word.split("");
    const baseClass = word.isDevTerm
      ? `px-2 py-1 font-semibold border-2 border-black/20 inline-block ${compoundStyle}`
      : `px-2 py-1 border-2 border-border inline-block ${compoundStyle}`;

    return (
      <span className={baseClass}>
        {chars.map((char, charIndex) => {
          const userChar = userInput[charIndex];
          let charClassName = "";

          if (userChar === undefined) {
            // Not typed yet - neutral background
            charClassName = "bg-secondary text-secondary-foreground";
          } else if (userChar === char.toLowerCase()) {
            // Correct character in correct position - green
            charClassName = "bg-green-100 text-green-800";
          } else {
            // Wrong character in this position - red
            charClassName = "bg-red-100 text-red-800";
          }

          return (
            <span key={charIndex} className={charClassName}>
              {char}
            </span>
          );
        })}
        {/* Extra characters beyond word length - always red */}
        {userInput.length > word.word.length && (
          <span className="bg-red-100 text-red-800">
            {currentInput.slice(word.word.length)}
          </span>
        )}
      </span>
    );
  };

  const handleWordClick = (word: WordItem, index: number) => {
    if (word.isCompleted && word.isDevTerm) {
      setShowDefinition(showDefinition === index ? null : index);
    }
  };

  const formatTime = (seconds: number) => {
    return `${Math.floor(seconds / 60)}:${(seconds % 60)
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="space-y-4 pb-8">
      {/* Timer and Controls - Compact on mobile */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        {/* Timers */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Countdown Timer */}
          <div className="flex items-center text-base sm:text-lg h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 border-2 border-black/10">
            <Timer className="size-4" />
            <span
              className={timeRemaining <= 30 ? "text-red-600 font-bold" : ""}
            >
              {formatTime(timeRemaining)}
            </span>
          </div>

          {/* Total Time Tracker - Always visible, shows sum of all timer sessions */}
          <div className="flex items-center text-sm sm:text-base h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 border border-blue-200 bg-blue-50">
            <Clock className="size-4 text-blue-600" />
            <span className="text-blue-600">
              Total: {formatTime(totalTimeSpent + currentSessionTime)}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          {!sessionStarted ? (
            <Button
              size="sm"
              onClick={onStartSession}
              className="flex items-center gap-2"
              disabled={isTimerExpired}
            >
              <PlaySolid className="size-4" />
              Start
            </Button>
          ) : (
            <>
              {isSessionActive ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePause}
                  disabled={isTimerExpired}
                  className="flex items-center gap-2"
                >
                  <PauseSolid className="size-4" />
                  Pause
                </Button>
              ) : timeRemaining > 0 ? (
                <Button
                  size="sm"
                  onClick={handleResume}
                  className="flex items-center gap-2"
                >
                  <PlaySolid className="size-4" />
                  Resume
                </Button>
              ) : null}
            </>
          )}
          <Button variant="outline" size="sm" onClick={handleReset}>
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>
        </div>
      </div>

      {/* Sentence Display - Better mobile layout */}
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
                  ) : word.isCompleted ? (
                    // Use improved character-level rendering for completed words
                    <span
                      className={`transition-all duration-200 cursor-pointer hover:opacity-80`}
                      onClick={() => handleWordClick(word, index)}
                    >
                      {word.isDevTerm ? (
                        <span
                          className={`${getWordClassName(
                            word,
                            index
                          )} inline-block`}
                        >
                          {renderCompletedWord(word)}
                        </span>
                      ) : (
                        <span className={getWordClassName(word, index)}>
                          {renderCompletedWord(word)}
                        </span>
                      )}
                    </span>
                  ) : (
                    <span
                      className={`${getWordClassName(
                        word,
                        index
                      )} transition-all duration-200`}
                      onClick={() => handleWordClick(word, index)}
                    >
                      {word.word}
                    </span>
                  )}
                  {showDefinition === index && word.definition && (
                    <div className="absolute top-full left-0 mt-2 p-3 bg-popover text-popover-foreground text-sm rounded-lg shadow-lg z-10 max-w-xs border border-border">
                      <div className="font-semibold mb-1">
                        {word.originalTerm || word.word}
                      </div>
                      <div>{word.definition}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Current Word Info - Mobile optimized */}
          {currentWord && (
            <div className="mb-4 p-3 bg-muted rounded-lg border border-border">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="text-sm text-muted-foreground flex-1">
                  <span className="inline">Current word: </span>
                  <span className="font-mono font-semibold text-foreground text-base">
                    {currentWord.word}
                  </span>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  {speechService && speechService.isSupported() && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleSpeech}
                      disabled={!currentWord.definition && !currentWord.word}
                      className="h-8 w-8 p-0"
                    >
                      {isSpeaking ? (
                        <SoundHigh className="h-3 w-3" />
                      ) : (
                        <SoundOff className="h-3 w-3" />
                      )}
                    </Button>
                  )}
                </div>
              </div>
              {currentWord.isDevTerm && currentWord.definition && (
                <div className="text-xs text-muted-foreground flex gap-1 items-center">
                  <LightBulb className="size-4 text-primary" />{" "}
                  {currentWord.definition}
                </div>
              )}
            </div>
          )}

          {/* Hidden input for keyboard handling */}
          <input
            ref={inputRef}
            value={currentInput}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyDown={handleKeyDown}
            className="opacity-0 absolute -left-9999px"
            disabled={!currentWord || isTimerExpired}
            autoComplete="off"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default TypingArea;
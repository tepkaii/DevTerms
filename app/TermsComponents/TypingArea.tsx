import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RotateCcw } from "lucide-react";
import type { WordItem, Term } from "../lib/types";
import {
  SkipNextSolid,
  PlaySolid,
  PauseSolid,
  Book,
  SoundHigh,
  SoundOff,
  Timer,
} from "iconoir-react";
import { SpeechService } from "../lib/speechUtils";

interface TypingAreaProps {
  words: WordItem[];
  currentWordIndex: number;
  onWordComplete: (
    wordIndex: number,
    userInput: string,
    isCorrect: boolean
  ) => void;
  onNextWord: () => void;
  onReset: () => void;
  onStartSession: () => void;
  timeRemaining: number;
  isSessionActive: boolean;
  sessionCompleted: boolean;
  sessionStarted: boolean;
}

const TypingArea: React.FC<TypingAreaProps> = ({
  words,
  currentWordIndex,
  onWordComplete,
  onNextWord,
  onReset,
  onStartSession,
  timeRemaining,
  isSessionActive,
  sessionCompleted,
  sessionStarted,
}) => {
  const [currentInput, setCurrentInput] = useState("");
  const [showDefinition, setShowDefinition] = useState<number | null>(null);
  const [inputStatus, setInputStatus] = useState<
    "neutral" | "correct" | "error"
  >("neutral");
  const [speechService] = useState(() => new SpeechService());
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedTermResources, setSelectedTermResources] =
    useState<Term | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentWord = words[currentWordIndex];
  const isTimerExpired = timeRemaining <= 0;

  useEffect(() => {
    // Auto-focus and start session on any key press
    const handleGlobalKeyPress = (e: KeyboardEvent) => {
      if (!sessionStarted && !isTimerExpired && currentWord) {
        // Don't trigger on special keys
        if (e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
          onStartSession();
          inputRef.current?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleGlobalKeyPress);
    return () => document.removeEventListener("keydown", handleGlobalKeyPress);
  }, [sessionStarted, isTimerExpired, currentWord, onStartSession]);

  useEffect(() => {
    if (!isTimerExpired && isSessionActive) {
      inputRef.current?.focus();
    }
  }, [currentWordIndex, isTimerExpired, isSessionActive]);

  useEffect(() => {
    setCurrentInput("");
    setInputStatus("neutral");
  }, [currentWordIndex]);

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

  const handleInputChange = (value: string) => {
    if (isTimerExpired) return;

    // Start session on first input if not started
    if (!sessionStarted && value.length > 0) {
      onStartSession();
    }

    setCurrentInput(value);

    // Check if word is complete (exact match)
    if (
      currentWord &&
      value.toLowerCase().trim() === currentWord.word.toLowerCase()
    ) {
      onWordComplete(currentWordIndex, value, true);
      setTimeout(() => {
        onNextWord();
      }, 100);
    }
  };

  const handleSkip = () => {
    if (isTimerExpired) return;

    // Start session on skip if not started
    if (!sessionStarted) {
      onStartSession();
    }

    if (currentWord) {
      onWordComplete(currentWordIndex, currentInput, false);
    }
    onNextWord();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isTimerExpired) return;

    // Only Enter key can skip - no space skipping at all
    if (e.key === "Enter") {
      e.preventDefault();
      handleSkip();
    }
    // Space is treated as normal character input - no special handling
  };

  const handleSpeech = async () => {
    if (!currentWord || !speechService.isSupported()) return;

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

  const getWordClassName = (word: WordItem, index: number) => {
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

  const renderCurrentWord = (word: WordItem) => {
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

  const renderTypedCharacters = () => {
    if (!currentWord || !currentInput) return null;

    const targetWord = currentWord.word.toLowerCase();
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
      <div className="flex  items-center justify-between gap-3">
        <div className="flex items-center text-base  sm:text-lg h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 border-2 border-black/10 ">
          <Timer className="size-4" /> {formatTime(timeRemaining)}
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {!sessionStarted ? (
            <Button
              size="sm"
              onClick={onStartSession}
              className="flex items-center gap-2"
            >
              <PlaySolid className="size-4" />
              Start
            </Button>
          ) : (
            <>
              {isSessionActive ? (
                <Button variant="outline" size="sm" onClick={() => {}}>
                  <PauseSolid className="size-4" />
                  Pause
                </Button>
              ) : timeRemaining > 0 ? (
                <Button size="sm" onClick={onStartSession}>
                  <PlaySolid className="size-4" />
                  Resume
                </Button>
              ) : null}
            </>
          )}
          <Button variant="outline" size="sm" onClick={onReset}>
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
                      <div className="font-semibold mb-1">{word.word}</div>
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
                      className="text-xs h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5"
                    >
                      Dev Term
                    </Badge>
                  )}
                  {speechService.isSupported() && (
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
                <div className="text-xs text-muted-foreground">
                  💡 {currentWord.definition}
                </div>
              )}
            </div>
          )}

          {/* Custom Typing Display */}
          <div className="flex gap-3">
            <div
              className="flex-1 text-base sm:text-lg md:text-xl px-2 py-2 rounded-md border-2 min-h-[30px] cursor-text bg-background"
              onClick={() => inputRef.current?.focus()}
            >
              <div className="flex flex-wrap gap-1 items-center">
                {currentWord && currentInput ? (
                  <div className="font-mono">{renderTypedCharacters()}</div>
                ) : (
                  <span className="text-muted-foreground">
                    {isTimerExpired
                      ? "Time's up! Session completed."
                      : !sessionStarted
                      ? "Start typing to begin session..."
                      : currentWord
                      ? "Start typing..."
                      : "Loading..."}
                  </span>
                )}
              </div>

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
            </div>

            <Button
              onClick={handleSkip}
              variant="outline"
              size="lg"
              className="p-6 hidden sm:flex items-center gap-2 select-none"
              disabled={!currentWord || isTimerExpired}
            >
              <SkipNextSolid className="w-5 h-5" />
              <span>Skip (Enter)</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TypingArea;
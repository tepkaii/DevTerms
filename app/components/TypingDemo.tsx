import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Timer, Clock, Lightbulb } from "lucide-react";

interface DemoWord {
  word: string;
  definition?: string;
  isDevTerm: boolean;
  isCompleted: boolean;
  isCorrect: boolean;
  userInput?: string;
  isCompound?: boolean;
  compoundIndex?: number;
  compoundTotal?: number;
  originalTerm?: string;
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
      word: "fetch",
      definition: "A method to retrieve data from a server",
      isDevTerm: true,
      isCompleted: false,
      isCorrect: false,
      isCompound: true,
      compoundIndex: 0,
      compoundTotal: 2,
      originalTerm: "fetch data",
    },
    {
      word: "data",
      definition: "Information stored and processed by computers",
      isDevTerm: true,
      isCompleted: false,
      isCorrect: false,
      isCompound: true,
      compoundIndex: 1,
      compoundTotal: 2,
      originalTerm: "fetch data",
    },
    {
      word: "from",
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
      word: "update",
      definition: "To modify or change existing data or code",
      isDevTerm: true,
      isCompleted: false,
      isCorrect: false,
    },
    {
      word: "the",
      definition: undefined,
      isDevTerm: false,
      isCompleted: false,
      isCorrect: false,
    },
    {
      word: "user",
      definition: "A person who interacts with a software application",
      isDevTerm: true,
      isCompleted: false,
      isCorrect: false,
      isCompound: true,
      compoundIndex: 0,
      compoundTotal: 2,
      originalTerm: "user interface",
    },
    {
      word: "interface",
      definition: "The means by which a user interacts with a computer program",
      isDevTerm: true,
      isCompleted: false,
      isCorrect: false,
      isCompound: true,
      compoundIndex: 1,
      compoundTotal: 2,
      originalTerm: "user interface",
    },
  ]);
  const [timeRemaining, setTimeRemaining] = useState(58);
  const [totalTimeSpent, setTotalTimeSpent] = useState(142); // Demo showing accumulated time
  const [currentSessionTime, setCurrentSessionTime] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showDefinition, setShowDefinition] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => (prev > 0 ? prev - 1 : 60));
      setCurrentSessionTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (currentWordIndex >= words.length) {
      // Reset demo
      setTimeout(() => {
        setWords((prev) =>
          prev.map((w) => ({
            ...w,
            isCompleted: false,
            isCorrect: false,
            userInput: undefined,
          }))
        );
        setCurrentWordIndex(0);
        setCurrentInput("");
        setIsTyping(false);
        setShowDefinition(null);
      }, 3000);
      return;
    }

    const currentWord = words[currentWordIndex];
    if (!currentWord || currentWord.isCompleted) return;

    const typeWord = async () => {
      setIsTyping(true);
      const word = currentWord.word;

      // Sometimes make intentional mistakes for demo
      const shouldMakeMistake = Math.random() > 0.75;
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
          setTimeout(resolve, 80 + Math.random() * 120)
        );
      }

      // If we made a mistake, correct it
      if (shouldMakeMistake && word.length > 3) {
        await new Promise((resolve) => setTimeout(resolve, 400));
        // Delete the wrong character
        for (let i = typingSequence.length; i >= word.length; i--) {
          setCurrentInput(typingSequence.slice(0, i));
          await new Promise((resolve) => setTimeout(resolve, 60));
        }
        // Complete the correct word
        for (let i = word.length; i <= word.length; i++) {
          setCurrentInput(word.slice(0, i));
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
      }

      // Mark word as completed
      const finalInput =
        shouldMakeMistake && word.length > 3
          ? word
          : typingSequence.slice(0, word.length);
      const isCorrect = finalInput.toLowerCase() === word.toLowerCase();

      setWords((prev) =>
        prev.map((w, i) =>
          i === currentWordIndex
            ? {
                ...w,
                isCompleted: true,
                isCorrect: isCorrect,
                userInput: finalInput,
              }
            : w
        )
      );

      // Clear input and move to next word
      await new Promise((resolve) => setTimeout(resolve, 300));
      setCurrentInput("");
      setCurrentWordIndex((prev) => prev + 1);
      setIsTyping(false);

      // Pause between words
      await new Promise((resolve) => setTimeout(resolve, 600));
    };

    const startTyping = setTimeout(typeWord, 800 + Math.random() * 1200);
    return () => clearTimeout(startTyping);
  }, [currentWordIndex, words]);

  // Compound term grouping
  const getCompoundGroupStyle = (
    word: DemoWord,
    isCompleted: boolean = false,
    isCurrent: boolean = false
  ) => {
    if (!word.isDevTerm || !word.isCompound) {
      return "rounded mx-1";
    }

    const isFirst = word.compoundIndex === 0;
    const isLast = word.compoundIndex === word.compoundTotal! - 1;

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

  // Function to render completed words with precise character-level coloring
  const renderCompletedWord = (word: DemoWord) => {
    if (!word.userInput) {
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
          let className = "px-0.5";

          if (!userChar) {
            className += " bg-gray-200 text-gray-700";
          } else if (userChar.toLowerCase() === targetChar.toLowerCase()) {
            className += " bg-green-200 text-green-800";
          } else {
            className += " bg-red-200 text-red-800";
          }

          return (
            <span key={charIndex} className={className}>
              {!userChar ? targetChar : userChar}
            </span>
          );
        })}

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

  const renderCurrentWord = (word: DemoWord) => {
    const userInput = currentInput.toLowerCase();
    const targetWord = word.word.toLowerCase();
    const compoundStyle = getCompoundGroupStyle(word, false, true);

    if (!currentInput) {
      const baseClass = word.isDevTerm
        ? `bg-yellow-200 text-yellow-700 border-yellow-400 px-2 py-1 font-semibold border-2 inline-block ${compoundStyle}`
        : `bg-secondary text-secondary-foreground px-2 py-1 border-2 border-border inline-block ${compoundStyle}`;

      return <span className={baseClass}>{word.word}</span>;
    }

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
            charClassName = "bg-secondary text-secondary-foreground";
          } else if (userChar === char.toLowerCase()) {
            charClassName = "bg-green-100 text-green-800";
          } else {
            charClassName = "bg-red-100 text-red-800";
          }

          return (
            <span key={charIndex} className={charClassName}>
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
    const compoundStyle = getCompoundGroupStyle(
      word,
      word.isCompleted,
      index === currentWordIndex
    );

    if (word.isCompleted) {
      if (word.isDevTerm) {
        return `px-2 py-1 cursor-pointer hover:opacity-80 inline-block ${compoundStyle}`;
      }
      return word.isCorrect
        ? `text-green-600 mx-1 inline-block`
        : `text-red-600 mx-1 inline-block`;
    }

    if (word.isDevTerm && index !== currentWordIndex) {
      return `bg-yellow-200 text-yellow-700 border-yellow-400 px-2 py-1 font-medium border inline-block ${compoundStyle}`;
    }

    return "text-foreground mx-1 inline-block";
  };

  const handleWordClick = (word: DemoWord, index: number) => {
    if (word.isCompleted && word.isDevTerm) {
      setShowDefinition(showDefinition === index ? null : index);
    }
  };

  const formatTime = (seconds: number) => {
    return `${Math.floor(seconds / 60)}:${(seconds % 60)
      .toString()
      .padStart(2, "0")}`;
  };

  const currentWord = words[currentWordIndex];

  return (
    <div className="space-y-4 pb-8">
      {/* Timer and Controls */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
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

          {/* Total Time Tracker */}
          <div className="flex items-center text-sm sm:text-base h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 border border-blue-200 bg-blue-50">
            <Clock className="size-4 text-blue-600" />
            <span className="text-blue-600">
              Total: {formatTime(totalTimeSpent + currentSessionTime)}
            </span>
          </div>
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
                  ) : word.isCompleted ? (
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

          {/* Current Word Info */}
          {currentWord && (
            <div className="mb-4 p-3 bg-muted rounded-lg border border-border">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="text-sm text-muted-foreground flex-1">
                  <span className="inline">Current word: </span>
                  <span className="font-mono font-semibold text-foreground text-base">
                    {currentWord.word}
                  </span>
                </div>
              </div>
              {currentWord.isDevTerm && currentWord.definition && (
                <div className="text-xs text-muted-foreground flex gap-1 items-center">
                  <Lightbulb className="size-4 text-primary" />{" "}
                  {currentWord.definition}
                </div>
              )}
            </div>
          )}

          {/* Hidden input for keyboard handling - just like the main component */}
          <input
            value={currentInput}
            onChange={() => {}} // Demo - no actual input handling needed
            className="opacity-0 absolute -left-9999px"
            autoComplete="off"
            disabled
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default TypingDemo;

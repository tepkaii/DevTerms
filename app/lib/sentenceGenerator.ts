// app/lib/sentenceGenerator | Engine
// @ts-nocheck
// @ts-nocheck

import { commonWords, verbs, adjectives, nouns, connectors } from "./terms";
import type { Term, WordItem } from "./types";

export class SentenceGenerator {
  private devTerms: Term[];
  private usedTerms: Set<string> = new Set();

  constructor(devTerms: Term[]) {
    this.devTerms = devTerms;
  }

  // Add method to get used original terms for stats panel
  getUsedOriginalTerms(): Term[] {
    const usedOriginalTerms = this.devTerms.filter((term) =>
      this.usedTerms.has(term.term)
    );
    return usedOriginalTerms;
  }

  generateSentence(): WordItem[] {
    const sentenceLength = Math.floor(Math.random() * 8) + 8; // 8-15 words
    const devTermCount = Math.floor(Math.random() * 3) + 2; // 2-4 dev terms per sentence
    const words: WordItem[] = [];

    // Pick random dev terms for this sentence
    const availableTerms = this.devTerms.filter(
      (term) => !this.usedTerms.has(term.term)
    );

    // If we've used all terms, reset the used set
    if (availableTerms.length < devTermCount) {
      this.usedTerms.clear();
    }

    const selectedTerms = this.getRandomItems(
      availableTerms.length > 0 ? availableTerms : this.devTerms,
      devTermCount
    );

    // Mark selected terms as used
    selectedTerms.forEach((term) => this.usedTerms.add(term.term));

    // Generate positions for dev TERMS (not individual words)
    // This ensures compound terms stay together
    const devTermPositions = new Set<number>();
    const totalTerms = selectedTerms.length;

    while (
      devTermPositions.size < Math.min(totalTerms, sentenceLength - 4) // More space needed for compound terms
    ) {
      const position = Math.floor(Math.random() * (sentenceLength - 4)) + 1; // Avoid first and last positions
      devTermPositions.add(position);
    }

    const devTermPositionsArray = Array.from(devTermPositions).sort(
      (a, b) => a - b
    );

    // Build the sentence by placing terms at their positions
    let currentTermIndex = 0;
    let currentPosition = 0;

    while (currentPosition < sentenceLength && words.length < sentenceLength) {
      // Check if we should place a dev term at this position
      if (
        devTermPositionsArray.includes(currentPosition) &&
        currentTermIndex < selectedTerms.length
      ) {
        const term = selectedTerms[currentTermIndex];
        const termWords = term.term.split(/\s+/);

        // Add all words of this term consecutively
        termWords.forEach((termWord, wordIndex) => {
          if (words.length < sentenceLength) {
            words.push({
              word: termWord,
              isDevTerm: true,
              definition: term.definition,
              resources: term.resources,
              category: term.category, // Add category
              originalTerm: term.term, // This is the key - always store the full original term
              isCompound: termWords.length > 1,
              compoundIndex: wordIndex,
              compoundTotal: termWords.length,
              isCompleted: false,
              isCorrect: false,
              userInput: "",
            });
            currentPosition++;
          }
        });

        currentTermIndex++;
      } else {
        // Add a regular word
        if (words.length < sentenceLength) {
          const wordType = this.chooseWordType(
            currentPosition,
            sentenceLength,
            words
          );
          const word = this.getWordByType(wordType);

          words.push({
            word,
            isDevTerm: false,
            isCompleted: false,
            isCorrect: false,
            userInput: "",
          });
          currentPosition++;
        } else {
          break;
        }
      }
    }

    // Fill remaining positions with regular words if needed
    while (words.length < sentenceLength) {
      const wordType = this.chooseWordType(words.length, sentenceLength, words);
      const word = this.getWordByType(wordType);

      words.push({
        word,
        isDevTerm: false,
        isCompleted: false,
        isCorrect: false,
        userInput: "",
      });
    }

    return words;
  }

  private chooseWordType(
    position: number,
    totalLength: number,
    existingWords: WordItem[]
  ): string {
    const lastWord = existingWords[existingWords.length - 1]?.word || "";
    const isStart = position === 0;
    const isEnd = position === totalLength - 1;
    const isEarly = position < 3;
    const isMid = position > 2 && position < totalLength - 3;
    const isLate = position >= totalLength - 3;

    // Start of sentence - prefer articles, determiners
    if (isStart) {
      return Math.random() < 0.7 ? "common" : "adjective";
    }

    // After articles/determiners - prefer adjectives or nouns
    if (["the", "a", "an", "this", "that", "some", "many"].includes(lastWord)) {
      return Math.random() < 0.4 ? "adjective" : "noun";
    }

    // After adjectives - prefer nouns
    if (adjectives.includes(lastWord)) {
      return Math.random() < 0.8 ? "noun" : "common";
    }

    // After nouns - prefer verbs or connectors
    if (
      nouns.includes(lastWord) ||
      existingWords[existingWords.length - 1]?.isDevTerm
    ) {
      const rand = Math.random();
      if (rand < 0.4) return "verb";
      if (rand < 0.6) return "common";
      return "connector";
    }

    // After verbs - prefer adjectives, nouns, or common words
    if (verbs.includes(lastWord)) {
      const rand = Math.random();
      if (rand < 0.3) return "adjective";
      if (rand < 0.6) return "noun";
      return "common";
    }

    // After connectors - prefer articles or adjectives
    if (connectors.includes(lastWord)) {
      return Math.random() < 0.6 ? "common" : "adjective";
    }

    // Mid-sentence variety
    if (isMid) {
      const rand = Math.random();
      if (rand < 0.25) return "verb";
      if (rand < 0.45) return "adjective";
      if (rand < 0.65) return "noun";
      if (rand < 0.8) return "connector";
      return "common";
    }

    // Default to common words with some variety
    const rand = Math.random();
    if (rand < 0.15) return "verb";
    if (rand < 0.25) return "adjective";
    if (rand < 0.35) return "noun";
    if (rand < 0.45) return "connector";
    return "common";
  }

  private getWordByType(type: string): string {
    switch (type) {
      case "verb":
        return this.getRandomItem(verbs);
      case "adjective":
        return this.getRandomItem(adjectives);
      case "noun":
        return this.getRandomItem(nouns);
      case "connector":
        return this.getRandomItem(connectors);
      case "common":
      default:
        return this.getRandomItem(commonWords);
    }
  }

  private getRandomItems<T>(array: T[], count: number): T[] {
    // Better shuffling algorithm (Fisher-Yates)
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result.slice(0, count);
  }

  private getRandomItem<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  reset() {
    this.usedTerms.clear();
  }
}

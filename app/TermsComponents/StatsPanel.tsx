// dd/app/TermsComponents/StatsPanel.tsx
// @ts-nocheck
// @ts-nocheck


import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, BookOpen } from "lucide-react";
import type { Stats, Term } from "../lib/types";
import {
  Book,
  Flash,
  Medal,
  SoundHigh,
  SoundMin,
  SoundOff,
  WarningHexagon,
} from "iconoir-react";
import { SpeechService } from "../lib/speechUtils";
import ResourcesSection from "./ResourcesSection";

interface StatsPanelProps {
  stats: Stats;
  isSessionActive: boolean;
  sessionCompleted?: boolean;
  usedTerms?: Term[];
}

const StatsPanel: React.FC<StatsPanelProps> = ({
  stats,
  isSessionActive,
  sessionCompleted = false,
  usedTerms = [],
}) => {
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null);
  const [showResources, setShowResources] = useState<string | null>(null);
  const [speechService] = useState(() => new SpeechService());
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speakingTerm, setSpeakingTerm] = useState<string | null>(null);

  // Function to group compound terms back together
  const groupUsedTerms = (terms: Term[]): Term[] => {
    // Use a Map to group by originalTerm (for compound terms) or term (for single terms)
    const grouped = terms.reduce((acc, term) => {
      // Use originalTerm if it exists (compound terms), otherwise use term
      const key = term.originalTerm || term.term;

      if (!acc.has(key)) {
        // For the first occurrence, use the original term data
        acc.set(key, {
          ...term,
          term: key, // Use the full original term as display name
        });
      }
      return acc;
    }, new Map<string, Term>());

    return Array.from(grouped.values());
  };

  // Get grouped terms for display
  const groupedUsedTerms = groupUsedTerms(usedTerms);

  // **Type to Learn WPM Calculation**
  // Formula: Total Number of Words = Total Keys Pressed / 5
  // WPM = Total Number of Words / Time Elapsed in Minutes (rounded down)
  const calculateWPM = () => {
    const totalKeysPressed = stats.totalCharacters || stats.totalTyped * 5 || 0;

    // Calculate elapsed time in minutes
    let elapsedTimeMinutes = 0;

    if (stats.elapsedTime) {
      elapsedTimeMinutes = stats.elapsedTime / 60;
    } else if (stats.sessionDuration && stats.timeRemaining !== undefined) {
      const elapsedSeconds = stats.sessionDuration - stats.timeRemaining;
      elapsedTimeMinutes = elapsedSeconds / 60;
    }

    // Handle cases when time is less than 1 minute
    if (elapsedTimeMinutes < 1) {
      // For less than 1 minute, we can still calculate but should be careful about precision
      if (elapsedTimeMinutes === 0 || totalKeysPressed === 0) {
        return 0;
      }
      // Still calculate for partial minutes but be aware it's an estimate
      const totalWords = totalKeysPressed / 5;
      const wpm = totalWords / elapsedTimeMinutes;
      return Math.floor(wpm); // Rounded down as per spec
    }

    // Standard calculation for 1+ minutes
    const totalWords = totalKeysPressed / 5;
    const wpm = totalWords / elapsedTimeMinutes;

    return Math.floor(wpm); // Rounded down as per Type to Learn spec
  };

  // **Type to Learn Accuracy Calculation**
  // Formula: Accuracy = (Correct Keys Pressed / Total Keys Pressed) * 100
  const calculateAccuracy = () => {
    const totalKeysPressed = stats.totalCharacters || stats.totalTyped * 5 || 0;
    const correctKeysPressed = stats.correctCharacters || 0;

    if (totalKeysPressed === 0) return 100;

    // Direct calculation based on correct vs total keys
    const accuracy = (correctKeysPressed / totalKeysPressed) * 100;

    return Math.round(accuracy); // Round to nearest whole number
  };

  // **Type to Learn Adjusted WPM (AWPM) Calculation**
  // Formula: AWPM = WPM × Accuracy (rounded down)
  const calculateAdjustedWPM = () => {
    const wpm = calculateWPM();
    const accuracy = calculateAccuracy();

    if (wpm === 0 || accuracy === 0) return 0;

    const awpm = wpm * (accuracy / 100);
    return Math.floor(awpm); // Rounded down as per spec
  };

  // Get real-time typing metrics
  const getTypingMetrics = () => {
    const wpm = calculateWPM();
    const accuracy = calculateAccuracy();
    const adjustedWPM = calculateAdjustedWPM();

    return {
      wpm,
      accuracy,
      adjustedWPM,
      totalKeysPressed: stats.totalCharacters || stats.totalTyped * 5 || 0,
      correctKeysPressed: stats.correctCharacters || 0,
      incorrectKeysPressed: stats.incorrectCharacters || 0,
      uncorrectedErrors: stats.uncorrectedErrors || stats.mistakes || 0,
      elapsedTime:
        stats.elapsedTime ||
        (stats.sessionDuration && stats.timeRemaining !== undefined
          ? stats.sessionDuration - stats.timeRemaining
          : 0),
    };
  };

  const handleSpeech = async (term: Term) => {
    if (!speechService.isSupported()) return;

    // If currently speaking this term, stop it
    if (isSpeaking && speakingTerm === term.term) {
      speechService.stop();
      setIsSpeaking(false);
      setSpeakingTerm(null);
      return;
    }

    // Stop any current speech and start new one
    if (isSpeaking) {
      speechService.stop();
    }

    try {
      setIsSpeaking(true);
      setSpeakingTerm(term.term);

      if (term.definition) {
        await speechService.speakTerm(term.term, term.definition);
      } else {
        await speechService.speak(term.term);
      }
    } catch (error) {
      console.error("Speech synthesis error:", error);
    } finally {
      setIsSpeaking(false);
      setSpeakingTerm(null);
    }
  };

  const getAccuracyColor = (accuracy: number) => {
    if (accuracy >= 98) return "text-green-600";
    if (accuracy >= 95) return "text-green-500";
    if (accuracy >= 90) return "text-yellow-500";
    if (accuracy >= 85) return "text-orange-500";
    return "text-red-600";
  };

  const getWpmColor = (wpm: number) => {
    if (wpm >= 60) return "text-green-600";
    if (wpm >= 50) return "text-green-500";
    if (wpm >= 35) return "text-yellow-500";
    if (wpm >= 25) return "text-orange-500";
    return "text-red-600";
  };

  const getAdjustedWpmColor = (awpm: number) => {
    if (awpm >= 50) return "text-green-600";
    if (awpm >= 40) return "text-green-500";
    if (awpm >= 30) return "text-yellow-500";
    if (awpm >= 20) return "text-orange-500";
    return "text-red-600";
  };

  const formatTime = (seconds: number) => {
    return `${Math.floor(seconds / 60)}:${(seconds % 60)
      .toString()
      .padStart(2, "0")}`;
  };

  // Function to toggle resources for a term
  const handleToggleResources = (term: Term) => {
    setShowResources(showResources === term.term ? null : term.term);
  };

  const metrics = getTypingMetrics();

  return (
    <>
      {/* select-none */}
      <div className="w-full max-w-6xl mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {/* Raw WPM */}
          <Card className="border-border">
            <CardContent className="pt-4">
              <div className="flex items-center gap-2 mb-2">
                <Flash className="h-4 w-4 text-primary" />
                <p className="text-sm text-muted-foreground">WPM</p>
              </div>
              <p className={`text-2xl font-bold ${getWpmColor(metrics.wpm)}`}>
                {metrics.wpm}
              </p>
            </CardContent>
          </Card>

          {/* Adjusted WPM (AWPM) - Primary Performance Metric */}
          <Card className="border-border">
            <CardContent className="pt-4">
              <div className="flex items-center gap-2 mb-2">
                <Medal className="h-4 w-4 text-purple-600" />
                <p className="text-sm text-muted-foreground">AWPM</p>
              </div>
              <p
                className={`text-2xl font-bold ${getAdjustedWpmColor(
                  metrics.adjustedWPM
                )}`}
              >
                {metrics.adjustedWPM}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Speed × Accuracy
              </p>
            </CardContent>
          </Card>

          {/* Accuracy */}
          <Card className="border-border">
            <CardContent className="pt-4">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="h-4 w-4 text-green-600" />
                <p className="text-sm text-muted-foreground">Accuracy</p>
              </div>
              <p
                className={`text-2xl font-bold ${getAccuracyColor(
                  metrics.accuracy
                )}`}
              >
                {metrics.accuracy}%
              </p>
            </CardContent>
          </Card>

          {/* Words Completed */}
          <Card className="border-border">
            <CardContent className="pt-4">
              <div className="flex items-center gap-2 mb-2">
                <Book className="h-4 w-4 text-yellow-600" />
                <p className="text-sm text-muted-foreground">Words</p>
              </div>
              <p className="text-2xl font-bold text-yellow-600">
                {stats.wordsCompleted}
              </p>
            </CardContent>
          </Card>

          {/* Key Errors */}
          <Card className="border-border">
            <CardContent className="pt-4">
              <div className="flex items-center gap-2 mb-2">
                <WarningHexagon className="h-4 w-4 text-red-600" />
                <p className="text-sm text-muted-foreground">Errors</p>
              </div>
              <p className="text-2xl font-bold text-red-600">
                {metrics.uncorrectedErrors}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Statistics - Only show when session is active or completed */}
        {(isSessionActive || sessionCompleted) && (
          <Card className="mt-4 border-border">
            <CardHeader>
              <CardTitle className="text-lg">Detailed Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Total Keys Pressed</p>
                  <p className="font-semibold">{metrics.totalKeysPressed}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Correct Keys</p>
                  <p className="font-semibold text-green-600">
                    {metrics.correctKeysPressed}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Incorrect Keys</p>
                  <p className="font-semibold text-red-600">
                    {metrics.incorrectKeysPressed}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Time Elapsed</p>
                  <p className="font-semibold">
                    {formatTime(metrics.elapsedTime)}
                  </p>
                </div>
              </div>

              {/* Calculation Examples */}
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <p className="text-sm font-semibold mb-2">How we calculate:</p>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>
                    • <strong>Words:</strong> {metrics.totalKeysPressed} keys ÷
                    5 = {Math.floor(metrics.totalKeysPressed / 5)} words
                  </p>
                  <p>
                    • <strong>WPM:</strong>{" "}
                    {Math.floor(metrics.totalKeysPressed / 5)} words ÷{" "}
                    {(metrics.elapsedTime / 60).toFixed(2)} minutes ={" "}
                    {metrics.wpm} WPM
                  </p>
                  <p>
                    • <strong>Accuracy:</strong> {metrics.correctKeysPressed}{" "}
                    correct ÷ {metrics.totalKeysPressed} total × 100 ={" "}
                    {metrics.accuracy}%
                  </p>
                  <p>
                    • <strong>AWPM:</strong> {metrics.wpm} WPM ×{" "}
                    {metrics.accuracy}% = {metrics.adjustedWPM} AWPM
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Used Terms Section */}
        {sessionCompleted && groupedUsedTerms.length > 0 && (
          <Card className="mt-6 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                Terms Practiced ({groupedUsedTerms.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {groupedUsedTerms.map((term) => (
                  <div key={term.term} className="flex items-center gap-1">
                    <Button
                      variant="outline"
                      className="cursor-pointer flex justify-between items-center gap-4 hover:bg-secondary text-sm "
                      onClick={() =>
                        setSelectedTerm(
                          selectedTerm?.term === term.term ? null : term
                        )
                      }
                    >
                      <div className="flex items-center gap-2">
                        {term.term} <SoundMin className="h-3 w-3" />
                        {/* Resources button */}
                        {term.resources && term.resources.length > 0 && (
                          <>
                            {"|"} <BookOpen className="h-3 w-3" />
                          </>
                        )}{" "}
                      </div>
                    </Button>
                  </div>
                ))}
              </div>

              {selectedTerm && (
                <Card className="bg-muted/50 border-border">
                  <CardContent className="pt-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-foreground">
                            {selectedTerm.term}
                          </span>
                          <Badge variant="secondary" className="text-xs">
                            {selectedTerm.category}
                          </Badge>
                        </div>

                        <div className="flex items-center gap-2">
                          {/* Speech button for selected term */}
                          {speechService.isSupported() && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleSpeech(selectedTerm)}
                              disabled={
                                !selectedTerm.definition && !selectedTerm.term
                              }
                            >
                              {isSpeaking &&
                              speakingTerm === selectedTerm.term ? (
                                <>
                                  <SoundHigh className="h-4 w-4 mr-1" />
                                  Stop
                                </>
                              ) : (
                                <>
                                  <SoundOff className="h-4 w-4 mr-1" />
                                  Listen
                                </>
                              )}
                            </Button>
                          )}

                          {/* Resources button for selected term */}
                          {selectedTerm.resources &&
                            selectedTerm.resources.length > 0 && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                  handleToggleResources(selectedTerm)
                                }
                              >
                                <BookOpen className="h-4 w-4 mr-1" />
                                Resources ({selectedTerm.resources.length})
                              </Button>
                            )}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {selectedTerm.definition}
                      </p>

                      {/* Resources Section Component */}
                      <ResourcesSection
                        term={selectedTerm}
                        isVisible={showResources === selectedTerm.term}
                        onToggle={() => handleToggleResources(selectedTerm)}
                      />
                    </div>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default StatsPanel;
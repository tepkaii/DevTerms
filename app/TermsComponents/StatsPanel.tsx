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
  Timer,
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

  // Enhanced Net WPM calculation
  const calculateNetWPM = () => {
    // Use actual words completed, not character estimation
    const correctWordsTyped =
      stats.correctWords || Math.max(0, stats.wordsCompleted - stats.mistakes);
    const elapsedTimeMinutes = stats.elapsedTime
      ? stats.elapsedTime / 60
      : stats.sessionDuration
      ? (stats.sessionDuration - stats.timeRemaining) / 60
      : 1;

    if (elapsedTimeMinutes <= 0) return 0;

    // Net WPM = Correct Words ÷ Minutes (errors already subtracted from correct words)
    const netWPM = Math.max(
      0,
      Math.round(correctWordsTyped / elapsedTimeMinutes)
    );
    return netWPM;
  };

  // Enhanced accuracy calculation with character-level precision
  const calculateEnhancedAccuracy = () => {
    const totalCharactersTyped =
      stats.totalCharacters || stats.totalTyped * 5 || 0;
    const correctCharacters = stats.correctCharacters || 0;
    const incorrectCharacters = stats.incorrectCharacters || 0;
    const uncorrectedErrors = stats.uncorrectedErrors || stats.mistakes || 0;

    if (totalCharactersTyped === 0) return 100;

    // Method 1: Character-level accuracy (most precise)
    if (correctCharacters > 0 || incorrectCharacters > 0) {
      const totalAttemptedCharacters = correctCharacters + incorrectCharacters;
      return Math.max(0, (correctCharacters / totalAttemptedCharacters) * 100);
    }

    // Method 2: Error-based accuracy (fallback)
    const errorRate = uncorrectedErrors / totalCharactersTyped;
    return Math.max(0, (1 - errorRate) * 100);
  };

  // Get real-time typing metrics
  const getTypingMetrics = () => {
    const netWPM = calculateNetWPM();
    const enhancedAccuracy = calculateEnhancedAccuracy();

    return {
      netWPM,
      enhancedAccuracy,
      totalCharacters: stats.totalCharacters || stats.totalTyped * 5 || 0,
      correctCharacters: stats.correctCharacters || 0,
      incorrectCharacters: stats.incorrectCharacters || 0,
      uncorrectedErrors: stats.uncorrectedErrors || stats.mistakes || 0,
      elapsedTime:
        stats.elapsedTime ||
        (stats.sessionDuration
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

  const getNetWpmColor = (netWpm: number) => {
    if (netWpm >= 60) return "text-green-600";
    if (netWpm >= 50) return "text-green-500";
    if (netWpm >= 35) return "text-yellow-500";
    if (netWpm >= 25) return "text-orange-500";
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
      <div className="w-full max-w-6xl mx-auto  select-none">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {/* Time Remaining */}
          <Card
            className={`border-border ${
              isSessionActive ? "ring-2 ring-primary" : ""
            }`}
          >
            <CardContent className="pt-4">
              <div className="flex items-center gap-2 mb-2">
                <Timer className="h-4 w-4 text-blue-600" />
                <p className="text-sm text-muted-foreground">Time</p>
              </div>
              <p className="text-2xl font-bold text-blue-600">
                {formatTime(stats.timeRemaining)}
              </p>
            </CardContent>
          </Card>

          {/* Net WPM (Primary Metric) */}
          <Card className="border-border">
            <CardContent className="pt-4">
              <div className="flex items-center gap-2 mb-2">
                <Flash className="h-4 w-4 text-primary" />
                <p className="text-sm text-muted-foreground">WPM</p>
              </div>
              <p
                className={`text-2xl font-bold ${getNetWpmColor(
                  metrics.netWPM
                )}`}
              >
                {metrics.netWPM}
              </p>
            </CardContent>
          </Card>

          {/* Enhanced Accuracy */}
          <Card className="border-border">
            <CardContent className="pt-4">
              <div className="flex items-center gap-2 mb-2">
                <Medal className="h-4 w-4 text-green-600" />
                <p className="text-sm text-muted-foreground">Accuracy</p>
              </div>
              <p
                className={`text-2xl font-bold ${getAccuracyColor(
                  metrics.enhancedAccuracy
                )}`}
              >
                {metrics.enhancedAccuracy.toFixed(1)}%
              </p>
            </CardContent>
          </Card>

          {/* Words Completed */}
          <Card className="border-border">
            <CardContent className="pt-4">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="h-4 w-4 text-yellow-600" />
                <p className="text-sm text-muted-foreground">Words</p>
              </div>
              <p className="text-2xl font-bold text-yellow-600">
                {stats.wordsCompleted}
              </p>
            </CardContent>
          </Card>

          {/* Errors */}
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

        {/* Used Terms Section */}
        {sessionCompleted && usedTerms.length > 0 && (
          <Card className="mt-6 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                Terms Practiced ({usedTerms.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {usedTerms.map((term) => (
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
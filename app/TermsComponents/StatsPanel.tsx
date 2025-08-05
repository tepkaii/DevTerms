import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  BookOpen,
  Volume2,
  VolumeX,
  X,
  Play,
  Youtube,
  FileText,
  ExternalLink,
} from "lucide-react";
import type { Stats, Term } from "../lib/types";
import {
  Book,
  BrightStar,
  Flash,
  Medal,
  SoundHigh,
  SoundHighSolid,
  SoundOff,
  SoundOffSolid,
  Timer,
  WarningHexagon,
} from "iconoir-react";
import { SpeechService } from "../lib/speechUtils";

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
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

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
    if (accuracy >= 95) return "text-green-600";
    if (accuracy >= 85) return "text-yellow-600";
    return "text-red-600";
  };

  const getWpmColor = (wpm: number) => {
    if (wpm >= 60) return "text-green-600";
    if (wpm >= 40) return "text-yellow-600";
    return "text-red-600";
  };

  const formatTime = (seconds: number) => {
    return `${Math.floor(seconds / 60)}:${(seconds % 60)
      .toString()
      .padStart(2, "0")}`;
  };

  // Function to show resources for a term
  const handleShowResources = (term: Term) => {
    if (term.resources && term.resources.length > 0) {
      setShowResources(showResources === term.term ? null : term.term);
    }
  };

  const getResourceIcon = (type: any) => {
    switch (type) {
      case "youtube":
        return <Youtube className="h-4 w-4 text-red-500" />;
      case "personal":
        return <Play className="h-4 w-4 text-purple-500" />;
      case "article":
        return <FileText className="h-4 w-4 text-blue-500" />;
      case "documentation":
        return <BookOpen className="h-4 w-4 text-green-500" />;
      default:
        return <ExternalLink className="h-4 w-4" />;
    }
  };

  const getResourceColor = (type: any) => {
    switch (type) {
      case "youtube":
        return "border-red-200 bg-red-50";
      case "personal":
        return "border-purple-200 bg-purple-50";
      case "article":
        return "border-blue-200 bg-blue-50";
      case "documentation":
        return "border-green-200 bg-green-50";
      default:
        return "border-gray-200 bg-gray-50";
    }
  };

  const extractYouTubeVideoId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const isYouTubeUrl = (url: string) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  const formatDuration = (duration: string) => {
    return duration;
  };

  const renderVideoEmbed = (videoId: string, title: string) => {
    return (
      <div className="mt-3">
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="w-full max-w-6xl mx-auto mt-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {/* Time Remaining */}
          <Card
            className={`border-border ${
              isSessionActive ? "ring-2 ring-primary" : ""
            }`}
          >
            <CardContent className="pt-4">
              <div className="flex items-center gap-2">
                <Timer className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Time</p>
                  <p className="text-2xl font-bold text-primary">
                    {formatTime(stats.timeRemaining)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* WPM */}
          <Card className="border-border">
            <CardContent className="pt-4">
              <div className="flex items-center gap-2">
                <Flash className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="text-sm text-muted-foreground">WPM</p>
                  <p className={`text-2xl font-bold ${getWpmColor(stats.wpm)}`}>
                    {stats.wpm}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Accuracy */}
          <Card className="border-border">
            <CardContent className="pt-4">
              <div className="flex items-center gap-2">
                <Medal className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Accuracy</p>
                  <p
                    className={`text-2xl font-bold ${getAccuracyColor(
                      stats.accuracy
                    )}`}
                  >
                    {stats.accuracy.toFixed(1)}%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Words Completed */}
          <Card className="border-border">
            <CardContent className="pt-4">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Words</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {stats.wordsCompleted}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mistakes */}
          <Card className="border-border">
            <CardContent className="pt-4">
              <div className="flex items-center gap-2">
                <WarningHexagon className="h-5 w-5 text-red-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Mistakes</p>
                  <p className="text-2xl font-bold text-red-600">
                    {stats.mistakes}
                  </p>
                </div>
              </div>
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
                      {term.term}{" "}
                      {/* Small speech button for each term badge */}
                      {speechService.isSupported() && (
                        <button
                          className="h-6 w-6 p-0 flex items-center justify-center border-2 border-black/10 rounded hover:bg-secondary"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSpeech(term);
                          }}
                          disabled={!term.definition && !term.term}
                        >
                          {isSpeaking && speakingTerm === term.term ? (
                            <SoundHigh className="h-3 w-3" />
                          ) : (
                            <SoundOff className="h-3 w-3" />
                          )}
                        </button>
                      )}
                    </Button>

                    {/* Resources button */}
                    {term.resources && term.resources.length > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 hover:bg-secondary"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShowResources(term);
                        }}
                      >
                        <BookOpen className="h-3 w-3" />
                      </Button>
                    )}
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
                                  <SoundHighSolid className="h-4 w-4 mr-1" />
                                  Stop
                                </>
                              ) : (
                                <>
                                  <SoundOffSolid className="h-4 w-4 mr-1" />
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
                                  handleShowResources(selectedTerm)
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

                      {/* Resources Section - Inline Display */}
                      {selectedTerm.resources &&
                        selectedTerm.resources.length > 0 && (
                          <div className="mt-4 pt-3 border-t border-border">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-medium text-sm">
                                Learning Resources
                              </h4>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                  handleShowResources(selectedTerm)
                                }
                                className="text-xs"
                              >
                                {showResources === selectedTerm.term
                                  ? "Hide"
                                  : "Show"}{" "}
                                Resources
                              </Button>
                            </div>

                            {showResources === selectedTerm.term && (
                              <div className="space-y-3">
                                {/* Video Player Area */}
                                {selectedVideo && (
                                  <div className="mb-4">
                                    <div className="flex items-center justify-between mb-2">
                                      <span className="text-sm font-medium">
                                        Now Playing
                                      </span>
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setSelectedVideo(null)}
                                      >
                                        <X className="h-3 w-3 mr-1" />
                                        Close
                                      </Button>
                                    </div>
                                    {renderVideoEmbed(selectedVideo, "Video")}
                                  </div>
                                )}

                                {/* Resources Grid */}
                                <div className="grid gap-3 md:grid-cols-2">
                                  {selectedTerm.resources
                                    .sort((a, b) => {
                                      if (
                                        a.type === "personal" &&
                                        b.type !== "personal"
                                      )
                                        return -1;
                                      if (
                                        a.type !== "personal" &&
                                        b.type === "personal"
                                      )
                                        return 1;
                                      return 0;
                                    })
                                    .map((resource) => (
                                      <Card
                                        key={resource.id}
                                        className={`${getResourceColor(
                                          resource.type
                                        )} border hover:shadow-sm transition-shadow`}
                                      >
                                        <CardContent className="p-3">
                                          <div className="flex items-start gap-2">
                                            {getResourceIcon(resource.type)}
                                            <div className="flex-1 min-w-0">
                                              <h5 className="font-medium text-sm mb-1 line-clamp-2">
                                                {resource.title}
                                              </h5>
                                              {resource.description && (
                                                <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                                                  {resource.description}
                                                </p>
                                              )}

                                              <div className="flex items-center gap-2 flex-wrap">
                                                {isYouTubeUrl(resource.url) ? (
                                                  <Button
                                                    size="sm"
                                                    variant="outline"
                                                    onClick={() => {
                                                      const videoId =
                                                        extractYouTubeVideoId(
                                                          resource.url
                                                        );
                                                      if (videoId) {
                                                        setSelectedVideo(
                                                          videoId
                                                        );
                                                      }
                                                    }}
                                                    className="text-xs h-7"
                                                  >
                                                    <Play className="h-3 w-3 mr-1" />
                                                    Watch
                                                  </Button>
                                                ) : (
                                                  <Button
                                                    size="sm"
                                                    variant="outline"
                                                    onClick={() =>
                                                      window.open(
                                                        resource.url,
                                                        "_blank"
                                                      )
                                                    }
                                                    className="text-xs h-7"
                                                  >
                                                    <ExternalLink className="h-3 w-3 mr-1" />
                                                    Open
                                                  </Button>
                                                )}

                                                {resource.type ===
                                                  "personal" && (
                                                  <Badge
                                                    variant="default"
                                                    className="text-xs bg-purple-500"
                                                  >
                                                    My Content
                                                  </Badge>
                                                )}

                                                {resource.duration && (
                                                  <Badge
                                                    variant="outline"
                                                    className="text-xs"
                                                  >
                                                    {formatDuration(
                                                      resource.duration
                                                    )}
                                                  </Badge>
                                                )}
                                              </div>
                                            </div>
                                          </div>
                                        </CardContent>
                                      </Card>
                                    ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                    </div>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        )}

        {/* Performance Summary */}
        {sessionCompleted && stats.wordsCompleted > 0 && (
          <Card className="mt-4 border-border">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-1">
                Session Complete! <BrightStar className="size-5" />{" "}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center p-4 bg-primary/10 rounded-lg border border-border">
                  <div className="text-2xl font-bold text-primary">
                    {stats.wordsCompleted}
                  </div>
                  <div className="text-muted-foreground">Words Typed</div>
                </div>
                <div className="text-center p-4 bg-green-100  rounded-lg border border-border">
                  <div className="text-2xl font-bold text-green-600">
                    {stats.correctWords}
                  </div>
                  <div className="text-muted-foreground">Correct Words</div>
                </div>
                <div className="text-center p-4 bg-purple-100  rounded-lg border border-border">
                  <div className="text-2xl font-bold text-purple-600">
                    {stats.wpm}
                  </div>
                  <div className="text-muted-foreground">Final WPM</div>
                </div>
              </div>

              <div className="mt-4 text-center flex items-center justify-center gap-3 ">
                {stats.accuracy >= 95 && (
                  <p className="text-green-600 font-semibold">
                    🎯 Excellent accuracy!
                  </p>
                )}
                {stats.wpm >= 50 && (
                  <p className="text-blue-600 font-semibold">
                    ⚡ Great typing speed!
                  </p>
                )}
                {stats.mistakes <= 3 && (
                  <p className="text-purple-600 font-semibold">
                    ✨ Very few mistakes!
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default StatsPanel;

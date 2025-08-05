import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  X,
  Play,
  ExternalLink,
  BookOpen,
  FileText,
  Youtube,
} from "lucide-react";
import type { LearningResource, Term } from "../lib/types";
import {
  extractYouTubeVideoId,
  getYouTubeThumbnail,
  isYouTubeUrl,
  formatDuration,
} from "../lib/videoUtils";

interface ResourcesModalProps {
  term: Term;
  isOpen: boolean;
  onClose: () => void;
}

const ResourcesModal: React.FC<ResourcesModalProps> = ({
  term,
  isOpen,
  onClose,
}) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  if (!isOpen) return null;

  const getResourceIcon = (type: LearningResource["type"]) => {
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

  const getResourceColor = (type: LearningResource["type"]) => {
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

  const renderVideoEmbed = (resource: LearningResource) => {
    const videoId = extractYouTubeVideoId(resource.url);
    if (!videoId) return null;

    return (
      <div className="mt-3">
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={resource.title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    );
  };

  const renderVideoThumbnail = (resource: LearningResource) => {
    const videoId = extractYouTubeVideoId(resource.url);
    if (!videoId) return null;

    return (
      <div className="relative">
        <img
          src={getYouTubeThumbnail(videoId)}
          alt={resource.title}
          className="w-full h-32 object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
          <Play className="h-8 w-8 text-white" />
        </div>
        {resource.duration && (
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
            {formatDuration(resource.duration)}
          </div>
        )}
      </div>
    );
  };

  // Sort resources to show personal videos first
  const sortedResources =
    term.resources?.sort((a, b) => {
      if (a.type === "personal" && b.type !== "personal") return -1;
      if (a.type !== "personal" && b.type === "personal") return 1;
      return 0;
    }) || [];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-gray-900">
                  {term.term}
                </h2>
                <Badge variant="secondary">{term.category}</Badge>
              </div>
              <p className="text-gray-600 mt-2">{term.definition}</p>
            </div>
            <Button variant="outline" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {selectedVideo && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Now Playing</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedVideo(null)}
                >
                  Close Video
                </Button>
              </div>
              {renderVideoEmbed(
                sortedResources.find((r) => r.id === selectedVideo)!
              )}
            </div>
          )}

          <h3 className="font-semibold mb-4">Learning Resources</h3>

          {sortedResources.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <BookOpen className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>No learning resources available for this term yet.</p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {sortedResources.map((resource) => (
                <Card
                  key={resource.id}
                  className={`${getResourceColor(
                    resource.type
                  )} border-2 hover:shadow-md transition-shadow`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      {getResourceIcon(resource.type)}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 mb-1 line-clamp-2">
                          {resource.title}
                        </h4>
                        {resource.description && (
                          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                            {resource.description}
                          </p>
                        )}

                        {isYouTubeUrl(resource.url) && (
                          <div
                            className="mb-3 cursor-pointer"
                            onClick={() => setSelectedVideo(resource.id)}
                          >
                            {renderVideoThumbnail(resource)}
                          </div>
                        )}

                        <div className="flex items-center gap-2">
                          {isYouTubeUrl(resource.url) ? (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => setSelectedVideo(resource.id)}
                              className="flex-1"
                            >
                              <Play className="h-3 w-3 mr-1" />
                              Watch
                            </Button>
                          ) : (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() =>
                                window.open(resource.url, "_blank")
                              }
                              className="flex-1"
                            >
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Open
                            </Button>
                          )}

                          {resource.type === "personal" && (
                            <Badge variant="default" className="bg-purple-500">
                              My Content
                            </Badge>
                          )}

                          {resource.duration && (
                            <Badge variant="outline" className="text-xs">
                              {formatDuration(resource.duration)}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourcesModal;

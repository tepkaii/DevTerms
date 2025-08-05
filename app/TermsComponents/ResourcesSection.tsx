import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, FileText, ExternalLink, BookOpen } from "lucide-react";
import { YoutubeSolid } from "iconoir-react";
import type { Term } from "../lib/types";
import {
  extractYouTubeVideoId,
  getYouTubeThumbnail,
  isYouTubeUrl,
  formatDuration,
} from "../lib/videoUtils";

interface ResourcesSectionProps {
  term: Term;
  isVisible: boolean;
  onToggle: () => void;
}

const ResourcesSection: React.FC<ResourcesSectionProps> = ({
  term,
  isVisible,
  onToggle,
}) => {
  const getResourceIcon = (type: any) => {
    switch (type) {
      case "youtube":
        return <YoutubeSolid className="h-4 w-4 text-red-500" />;
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

  const handleResourceClick = (url: string) => {
    window.open(url, "_blank");
  };

  const renderYouTubeThumbnail = (url: string, title: string) => {
    const videoId = extractYouTubeVideoId(url);
    if (!videoId) return null;

    const thumbnailUrl = getYouTubeThumbnail(videoId, "medium");

    return (
      <div
        className="relative cursor-pointer group"
        onClick={() => handleResourceClick(url)}
      >
        <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden group">
          <img
            src={thumbnailUrl}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover group-hover:opacity-90 transition-opacity"
            onError={(e) => {
              e.currentTarget.src =
                "data:image/svg+xml;base64," +
                btoa(`
          <svg width="320" height="180" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="#f3f4f6"/>
            <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#6b7280">
              YouTube Video
            </text>
          </svg>
        `);
            }}
          />
        </div>

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg group-hover:bg-opacity-50 transition-all">
          <div className="bg-primary rounded-[5px] p-3 group-hover:scale-110 transition-transform">
            <Play className="h-6 w-6 text-white fill-white" />
          </div>
        </div>

        {/* YouTube icon */}
        <div className="absolute top-2 right-2">
          <YoutubeSolid className="h-5 w-5 text-red-500  " />
        </div>
      </div>
    );
  };

  if (!term.resources || term.resources.length === 0) {
    return null;
  }

  return (
    <div className="mt-4 pt-3 border-t border-border">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-medium text-sm">Learning Resources</h4>
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="text-xs"
        >
          {isVisible ? "Hide" : "Show"} Resources
        </Button>
      </div>

      {isVisible && (
        <div className="space-y-3">
          {/* Resources Grid */}
          <div className="grid gap-3 md:grid-cols-2">
            {term.resources
              .sort((a, b) => {
                if (a.type === "personal" && b.type !== "personal") return -1;
                if (a.type !== "personal" && b.type === "personal") return 1;
                return 0;
              })
              .map((resource) => (
                <Card
                  key={resource.id}
                  className={`${getResourceColor(
                    resource.type
                  )} border hover:shadow-sm transition-shadow cursor-pointer`}
                  onClick={() => handleResourceClick(resource.url)}
                >
                  <CardContent className="p-3">
                    {/* YouTube Thumbnail for YouTube videos */}
                    {isYouTubeUrl(resource.url) && (
                      <div className="mb-3">
                        {renderYouTubeThumbnail(resource.url, resource.title)}
                      </div>
                    )}

                    <div className="flex items-start gap-2">
                      {/* {getResourceIcon(resource.type)} */}
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
                          {resource.type === "personal" && (
                            <Badge
                              variant="default"
                              className="text-xs bg-purple-500"
                            >
                              My Content
                            </Badge>
                          )}

                          {isYouTubeUrl(resource.url) && (
                            <Badge variant="outline" className="text-xs">
                              <YoutubeSolid className="h-3 w-3 mr-1" />
                              Video
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
        </div>
      )}
    </div>
  );
};

export default ResourcesSection;

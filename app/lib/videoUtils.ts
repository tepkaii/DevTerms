// utils/videoUtils.ts

export const extractYouTubeVideoId = (url: string): string | null => {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }

  return null;
};

export const getYouTubeEmbedUrl = (videoId: string): string => {
  return `https://www.youtube.com/embed/${videoId}`;
};

export const getYouTubeThumbnail = (
  videoId: string,
  quality: "default" | "medium" | "high" | "maxres" = "medium"
): string => {
  const qualityMap = {
    default: "default",
    medium: "mqdefault",
    high: "hqdefault",
    maxres: "maxresdefault",
  };

  return `https://img.youtube.com/vi/${videoId}/${qualityMap[quality]}.jpg`;
};

export const isYouTubeUrl = (url: string): boolean => {
  return /(?:youtube\.com|youtu\.be)/.test(url);
};

export const formatDuration = (duration: string): string => {
  // Handle formats like "10:23", "1:23:45", etc.
  const parts = duration.split(":");
  if (parts.length === 2) {
    return `${parts[0]}:${parts[1]}`;
  } else if (parts.length === 3) {
    return `${parts[0]}h ${parts[1]}m`;
  }
  return duration;
};

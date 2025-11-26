import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Episode } from "@/data/anime-data";
import { cn } from "@/lib/utils";

interface EpisodeListProps {
  episodes: Episode[];
  currentEpisodeId: string;
  onEpisodeSelect: (episode: Episode) => void;
  className?: string;
}

const STORAGE_KEY = "anime-hub-episode-list-collapsed";

export function EpisodeList({
  episodes,
  currentEpisodeId,
  onEpisodeSelect,
  className,
}: EpisodeListProps) {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : false;
  });

  // Save collapsed state to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(isCollapsed));
  }, [isCollapsed]);

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={cn(
        "flex flex-col border-l border-border/50 bg-card/80 backdrop-blur-sm",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/50 p-4">
        <h3 className="font-display text-lg font-bold">Episodes</h3>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleCollapsed}
          className="h-8 w-8"
        >
          {isCollapsed ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronUp className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Episode List */}
      {!isCollapsed && (
        <ScrollArea className="flex-1">
          <div className="space-y-1 p-2">
            {episodes.map((episode) => {
              const isCurrent = episode.id === currentEpisodeId;
              return (
                <button
                  key={episode.id}
                  onClick={() => onEpisodeSelect(episode)}
                  className={cn(
                    "group relative w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all duration-200",
                    isCurrent
                      ? "bg-neon-purple/20 border border-neon-purple/50"
                      : "hover:bg-secondary/50 border border-transparent",
                  )}
                  data-testid={`episode-${episode.number}-button`}
                >
                  {/* Thumbnail */}
                  <div className="relative shrink-0 w-24 h-14 rounded overflow-hidden bg-secondary">
                    <img
                      src={episode.thumbnail}
                      alt={episode.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {isCurrent && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <Play className="h-6 w-6 text-white fill-current" />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={cn(
                          "text-sm font-semibold",
                          isCurrent ? "text-neon-purple" : "text-foreground",
                        )}
                      >
                        Episode {episode.number}
                      </span>
                      {isCurrent && (
                        <span className="text-xs px-2 py-0.5 bg-neon-purple/30 text-neon-purple rounded-full font-semibold">
                          Playing
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      {episode.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {episode.duration}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </ScrollArea>
      )}
    </div>
  );
}

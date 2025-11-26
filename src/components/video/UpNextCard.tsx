import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Episode } from "@/data/anime-data";
import { cn } from "@/lib/utils";

interface UpNextCardProps {
  episode: Episode;
  onPlay: () => void;
  onDismiss?: () => void;
  className?: string;
}

export function UpNextCard({
  episode,
  onPlay,
  onDismiss,
  className,
}: UpNextCardProps) {
  return (
    <Card className={cn("glass-strong overflow-hidden", className)}>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-1 w-1 rounded-full bg-neon-cyan animate-pulse" />
          <h3 className="text-sm font-semibold text-muted-foreground">
            Up Next
          </h3>
          {onDismiss && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onDismiss}
              className="h-6 w-6 ml-auto"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        <div className="flex gap-4">
          {/* Thumbnail */}
          <div className="relative shrink-0 w-32 h-18 rounded-lg overflow-hidden bg-secondary group">
            <img
              src={episode.thumbnail}
              alt={episode.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-1 right-1 text-xs font-semibold text-white bg-black/70 px-2 py-0.5 rounded">
              {episode.duration}
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-neon-cyan mb-1">
              Episode {episode.number}
            </div>
            <h4 className="font-display text-base font-bold line-clamp-2 mb-3">
              {episode.title}
            </h4>
            <Button
              onClick={onPlay}
              size="sm"
              className="bg-neon-purple hover:bg-neon-purple/90 text-white font-semibold"
              data-testid="up-next-play-button"
            >
              <Play className="mr-2 h-4 w-4 fill-current" />
              Play Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

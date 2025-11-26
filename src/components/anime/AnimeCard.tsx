import { Link } from "react-router";
import { Play, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import type { Anime } from "@/data/anime-data";
import { useWatchProgress } from "@/hooks/use-watch-progress";
import { cn } from "@/lib/utils";

interface AnimeCardProps {
  anime: Anime;
  className?: string;
}

export function AnimeCard({ anime, className }: AnimeCardProps) {
  const { getProgress, getProgressPercentage } = useWatchProgress();
  const watchProgress = getProgress(anime.id);
  const progressPercent = getProgressPercentage(anime.id, anime.episodeCount);

  return (
    <Card
      className={cn(
        "group relative overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-neon-purple/50 hover:shadow-lg hover:shadow-neon-purple/20",
        className,
      )}
    >
      <Link to={`/watch/${anime.id}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-2/3 overflow-hidden">
          <img
            src={anime.coverImage}
            alt={anime.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Button
              size="icon"
              className="h-16 w-16 rounded-full bg-neon-purple/90 hover:bg-neon-purple neon-glow-purple"
            >
              <Play className="h-8 w-8 fill-current" />
            </Button>
          </div>

          {/* Rating badge */}
          <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 backdrop-blur-sm">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-semibold text-white">
              {anime.rating}
            </span>
          </div>

          {/* Status badge */}
          {anime.status === "ongoing" && (
            <Badge className="absolute left-2 top-2 bg-neon-cyan/90 text-black font-semibold">
              Ongoing
            </Badge>
          )}
        </div>

        {/* Content */}
        <CardContent className="p-3">
          <h3 className="font-display text-sm font-bold line-clamp-2 mb-1 group-hover:text-neon-purple transition-colors">
            {anime.title}
          </h3>

          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <span>{anime.episodeCount} eps</span>
            <span>•</span>
            <span>{anime.releaseYear}</span>
          </div>

          <div className="flex flex-wrap gap-1 mb-2">
            {anime.genre.slice(0, 2).map((genre) => (
              <Badge
                key={genre}
                variant="secondary"
                className="text-xs px-2 py-0"
              >
                {genre}
              </Badge>
            ))}
          </div>

          {/* Watch Progress */}
          {watchProgress && progressPercent > 0 && (
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">
                  Episode {watchProgress.episodeNumber}
                </span>
                <span className="text-neon-cyan font-semibold">
                  {progressPercent}%
                </span>
              </div>
              <Progress value={progressPercent} className="h-1" />
            </div>
          )}
        </CardContent>
      </Link>
    </Card>
  );
}

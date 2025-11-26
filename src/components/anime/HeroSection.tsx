import { Link } from "react-router";
import { Play, Info, Star, Calendar, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Anime } from "@/data/anime-data";

interface HeroSectionProps {
  anime: Anime;
}

export function HeroSection({ anime }: HeroSectionProps) {
  return (
    <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={anime.heroImage}
          alt={anime.title}
          className="h-full w-full object-cover"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex h-full items-center px-4">
        <div className="max-w-2xl space-y-6">
          {/* Featured Badge */}
          <Badge
            className="bg-neon-purple/20 text-neon-purple border-neon-purple/30 font-semibold backdrop-blur-sm"
            variant="outline"
          >
            Featured
          </Badge>

          {/* Title */}
          <div className="space-y-2">
            <h1 className="font-display text-5xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
              {anime.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {anime.originalTitle}
            </p>
          </div>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-sm">
            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold text-yellow-400">
                {anime.rating}
              </span>
              <span className="text-muted-foreground">/5.0</span>
            </div>

            {/* Year */}
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{anime.releaseYear}</span>
            </div>

            {/* Episodes */}
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Film className="h-4 w-4" />
              <span>{anime.episodeCount} Episodes</span>
            </div>

            {/* Status */}
            <Badge
              variant={anime.status === "ongoing" ? "default" : "secondary"}
              className={
                anime.status === "ongoing" ? "bg-neon-cyan text-black" : ""
              }
            >
              {anime.status === "ongoing" ? "Ongoing" : "Completed"}
            </Badge>
          </div>

          {/* Genres */}
          <div className="flex flex-wrap gap-2">
            {anime.genre.map((genre) => (
              <Badge
                key={genre}
                variant="outline"
                className="border-border/50 bg-card/50 backdrop-blur-sm"
              >
                {genre}
              </Badge>
            ))}
          </div>

          {/* Description */}
          <p className="text-base leading-relaxed text-foreground/90 max-w-xl">
            {anime.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-neon-purple hover:bg-neon-purple/90 text-white font-semibold neon-glow-purple"
            >
              <Link to={`/watch/${anime.id}`}>
                <Play className="mr-2 h-5 w-5 fill-current" />
                Watch Now
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50"
            >
              <Link to={`/watch/${anime.id}`}>
                <Info className="mr-2 h-5 w-5" />
                More Info
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

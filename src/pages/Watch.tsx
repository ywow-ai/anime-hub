import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft, Info, Star } from "lucide-react";
import { getAnimeById, type Episode } from "@/data/anime-data";
import { VideoPlayer } from "@/components/video/VideoPlayer";
import { EpisodeList } from "@/components/video/EpisodeList";
import { UpNextCard } from "@/components/video/UpNextCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useWatchProgress } from "@/hooks/use-watch-progress";

// Sample video URL (Big Buck Bunny - open source video)
const SAMPLE_VIDEO_URL =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

function Watch() {
  const { id } = useParams<{ id: string }>();
  const anime = id ? getAnimeById(id) : undefined;
  const { saveProgress, getProgress } = useWatchProgress();

  const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(null);
  const [showUpNext, setShowUpNext] = useState(false);

  // Initialize current episode from progress or default to first episode
  useEffect(() => {
    if (!anime) return;

    const progress = getProgress(anime.id);
    if (progress && progress.episodeNumber <= anime.episodes.length) {
      const episode = anime.episodes.find(
        (ep) => ep.number === progress.episodeNumber,
      );
      setCurrentEpisode(episode || anime.episodes[0]);
    } else {
      setCurrentEpisode(anime.episodes[0]);
    }
  }, [anime, getProgress]);

  if (!anime) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-xl text-muted-foreground">Anime not found</p>
          <Button asChild variant="outline">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  if (!currentEpisode) {
    return null; // Loading state
  }

  const currentEpisodeIndex = anime.episodes.findIndex(
    (ep) => ep.id === currentEpisode.id,
  );
  const nextEpisode =
    currentEpisodeIndex < anime.episodes.length - 1
      ? anime.episodes[currentEpisodeIndex + 1]
      : null;

  const handleEpisodeSelect = (episode: Episode) => {
    setCurrentEpisode(episode);
    setShowUpNext(false);
    saveProgress(anime.id, episode.number);
  };

  const handleVideoTimeUpdate = (currentTime: number) => {
    // Auto-save progress every 10 seconds
    if (Math.floor(currentTime) % 10 === 0) {
      saveProgress(anime.id, currentEpisode.number, currentTime);
    }
  };

  const handleVideoEnded = () => {
    if (nextEpisode) {
      setShowUpNext(true);
    }
  };

  const handlePlayNext = () => {
    if (nextEpisode) {
      handleEpisodeSelect(nextEpisode);
    }
  };

  return (
    <div className="min-h-screen pb-8">
      <div className="container px-4 py-4">
        <Button asChild variant="ghost" size="sm" className="gap-2">
          <Link to="/">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <div className="container px-4">
        <div className="grid lg:grid-cols-[1fr_400px] gap-6">
          <div className="space-y-6">
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <VideoPlayer
                src={SAMPLE_VIDEO_URL}
                poster={currentEpisode.thumbnail}
                onTimeUpdate={handleVideoTimeUpdate}
                onEnded={handleVideoEnded}
                className="w-full h-full"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Episode {currentEpisode.number}</span>
                    <span>•</span>
                    <span>{currentEpisode.duration}</span>
                  </div>
                  <h1 className="font-display text-3xl font-bold">
                    {anime.title}
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    {currentEpisode.title}
                  </p>
                </div>

                <Button variant="outline" size="icon">
                  <Info className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold">{anime.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">
                  {anime.releaseYear}
                </span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">
                  {anime.episodeCount} Episodes
                </span>
                <Badge
                  variant={anime.status === "ongoing" ? "default" : "secondary"}
                >
                  {anime.status === "ongoing" ? "Ongoing" : "Completed"}
                </Badge>
              </div>

              <div className="flex flex-wrap gap-2">
                {anime.genre.map((genre) => (
                  <Badge key={genre} variant="outline">
                    {genre}
                  </Badge>
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {anime.description}
              </p>
            </div>

            {showUpNext && nextEpisode && (
              <UpNextCard
                episode={nextEpisode}
                onPlay={handlePlayNext}
                onDismiss={() => setShowUpNext(false)}
              />
            )}
          </div>

          <div className="lg:sticky lg:top-20 lg:h-[calc(100vh-6rem)]">
            <EpisodeList
              episodes={anime.episodes}
              currentEpisodeId={currentEpisode.id}
              onEpisodeSelect={handleEpisodeSelect}
              className="h-full rounded-lg overflow-hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Watch;

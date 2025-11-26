import { useState, useEffect } from "react";

interface WatchProgress {
  animeId: string;
  episodeNumber: number;
  timestamp: number;
  lastWatched: Date;
}

const STORAGE_KEY = "anime-hub-watch-progress";

export function useWatchProgress() {
  const [progress, setProgress] = useState<Map<string, WatchProgress>>(
    new Map(),
  );

  useEffect(() => {
    // Load from localStorage
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const data = JSON.parse(stored);
        const map = new Map(
          Object.entries(data).map(([key, value]: [string, any]) => [
            key,
            { ...value, lastWatched: new Date(value.lastWatched) },
          ]),
        );
        setProgress(map);
      } catch (error) {
        console.error("Failed to parse watch progress:", error);
      }
    }
  }, []);

  const saveProgress = (
    animeId: string,
    episodeNumber: number,
    timestamp: number = 0,
  ) => {
    const newProgress = new Map(progress);
    newProgress.set(animeId, {
      animeId,
      episodeNumber,
      timestamp,
      lastWatched: new Date(),
    });
    setProgress(newProgress);

    // Save to localStorage
    const data = Object.fromEntries(newProgress.entries());
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  const getProgress = (animeId: string): WatchProgress | undefined => {
    return progress.get(animeId);
  };

  const getProgressPercentage = (
    animeId: string,
    totalEpisodes: number,
  ): number => {
    const prog = progress.get(animeId);
    if (!prog) return 0;
    return Math.round((prog.episodeNumber / totalEpisodes) * 100);
  };

  return {
    progress,
    saveProgress,
    getProgress,
    getProgressPercentage,
  };
}

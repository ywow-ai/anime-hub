import { HeroSection } from "@/components/anime/HeroSection";
import { CategoryRow } from "@/components/anime/CategoryRow";
import { getFeaturedAnime, getAnimesByCategory } from "@/data/anime-data";

function Home() {
  const featuredAnime = getFeaturedAnime();
  const trendingAnimes = getAnimesByCategory("trending");
  const recentAnimes = getAnimesByCategory("recent");
  const classicAnimes = getAnimesByCategory("classic");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection anime={featuredAnime} />

      {/* Category Rows */}
      <div className="space-y-12 py-12">
        <CategoryRow title="🔥 Trending Now" animes={trendingAnimes} />

        <CategoryRow title="📺 Recently Updated" animes={recentAnimes} />

        <CategoryRow title="⭐ Classics" animes={classicAnimes} />
      </div>

      {/* Bottom Padding */}
      <div className="h-12" />
    </div>
  );
}

export default Home;

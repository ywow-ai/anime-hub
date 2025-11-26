export interface Anime {
  id: string;
  title: string;
  originalTitle: string;
  description: string;
  coverImage: string;
  heroImage: string;
  genre: string[];
  rating: number;
  episodeCount: number;
  releaseYear: number;
  status: "ongoing" | "completed";
  episodes: Episode[];
  category: ("trending" | "recent" | "classic")[];
}

export interface Episode {
  id: string;
  number: number;
  title: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
}

// Mock anime data
export const animeList: Anime[] = [
  {
    id: "1",
    title: "Demon Slayer: Kimetsu no Yaiba",
    originalTitle: "鬼滅の刃",
    description:
      "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
    coverImage:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=600&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1920&h=800&fit=crop",
    genre: ["Action", "Adventure", "Dark Fantasy"],
    rating: 4.9,
    episodeCount: 26,
    releaseYear: 2019,
    status: "completed",
    category: ["trending", "recent"],
    episodes: Array.from({ length: 26 }, (_, i) => ({
      id: `1-${i + 1}`,
      number: i + 1,
      title: `Episode ${i + 1}`,
      duration: "24:00",
      thumbnail: `https://images.unsplash.com/photo-1578632767115-351597cf2477?w=300&h=170&fit=crop&q=80`,
      videoUrl: "/anime/demo.mp4",
    })),
  },
  {
    id: "2",
    title: "Attack on Titan",
    originalTitle: "進撃の巨人",
    description:
      "Humans live in a city surrounded by enormous walls, a defense against the Titans. Eren yearns to venture beyond the walls, but when his hometown is destroyed, he joins the military to fight the Titans.",
    coverImage:
      "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=400&h=600&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=1920&h=800&fit=crop",
    genre: ["Action", "Drama", "Fantasy"],
    rating: 4.9,
    episodeCount: 75,
    releaseYear: 2013,
    status: "completed",
    category: ["trending", "classic"],
    episodes: Array.from({ length: 25 }, (_, i) => ({
      id: `2-${i + 1}`,
      number: i + 1,
      title: `Episode ${i + 1}`,
      duration: "24:00",
      thumbnail: `https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=300&h=170&fit=crop&q=80`,
      videoUrl: "/anime/demo.mp4",
    })),
  },
  {
    id: "3",
    title: "Jujutsu Kaisen",
    originalTitle: "呪術廻戦",
    description:
      "A boy swallows a cursed talisman and must learn to control this power to protect those he loves. He joins a secret organization of Jujutsu Sorcerers to eliminate the curse from the world.",
    coverImage:
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&h=600&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1920&h=800&fit=crop",
    genre: ["Action", "Supernatural", "School"],
    rating: 4.8,
    episodeCount: 24,
    releaseYear: 2020,
    status: "ongoing",
    category: ["trending", "recent"],
    episodes: Array.from({ length: 24 }, (_, i) => ({
      id: `3-${i + 1}`,
      number: i + 1,
      title: `Episode ${i + 1}`,
      duration: "24:00",
      thumbnail: `https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=300&h=170&fit=crop&q=80`,
      videoUrl: "/anime/demo.mp4",
    })),
  },
  {
    id: "4",
    title: "My Hero Academia",
    originalTitle: "僕のヒーローアカデミア",
    description:
      "In a world where people with superpowers are the norm, Izuku Midoriya is born without any powers. However, he is still determined to become a hero and enrolls in a prestigious hero academy.",
    coverImage:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=1920&h=800&fit=crop",
    genre: ["Action", "School", "Superhero"],
    rating: 4.7,
    episodeCount: 113,
    releaseYear: 2016,
    status: "ongoing",
    category: ["trending", "recent"],
    episodes: Array.from({ length: 13 }, (_, i) => ({
      id: `4-${i + 1}`,
      number: i + 1,
      title: `Episode ${i + 1}`,
      duration: "24:00",
      thumbnail: `https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300&h=170&fit=crop&q=80`,
      videoUrl: "/anime/demo.mp4",
    })),
  },
  {
    id: "5",
    title: "One Piece",
    originalTitle: "ワンピース",
    description:
      "Monkey D. Luffy sets off on an adventure with his pirate crew in hopes of finding the greatest treasure ever, known as the One Piece.",
    coverImage:
      "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=400&h=600&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=1920&h=800&fit=crop",
    genre: ["Adventure", "Action", "Comedy"],
    rating: 4.8,
    episodeCount: 1000,
    releaseYear: 1999,
    status: "ongoing",
    category: ["classic", "trending"],
    episodes: Array.from({ length: 20 }, (_, i) => ({
      id: `5-${i + 1}`,
      number: i + 1,
      title: `Episode ${i + 1}`,
      duration: "24:00",
      thumbnail: `https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=300&h=170&fit=crop&q=80`,
      videoUrl: "/anime/demo.mp4",
    })),
  },
  {
    id: "6",
    title: "Naruto",
    originalTitle: "ナルト",
    description:
      "Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.",
    coverImage:
      "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=400&h=600&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=1920&h=800&fit=crop",
    genre: ["Action", "Adventure", "Martial Arts"],
    rating: 4.7,
    episodeCount: 220,
    releaseYear: 2002,
    status: "completed",
    category: ["classic"],
    episodes: Array.from({ length: 15 }, (_, i) => ({
      id: `6-${i + 1}`,
      number: i + 1,
      title: `Episode ${i + 1}`,
      duration: "24:00",
      thumbnail: `https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=300&h=170&fit=crop&q=80`,
      videoUrl: "/anime/demo.mp4",
    })),
  },
  {
    id: "7",
    title: "Fullmetal Alchemist: Brotherhood",
    originalTitle: "鋼の錬金術師",
    description:
      "Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.",
    coverImage:
      "https://images.unsplash.com/photo-1626278664285-f796b9ee7806?w=400&h=600&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1626278664285-f796b9ee7806?w=1920&h=800&fit=crop",
    genre: ["Action", "Adventure", "Drama"],
    rating: 4.9,
    episodeCount: 64,
    releaseYear: 2009,
    status: "completed",
    category: ["classic", "trending"],
    episodes: Array.from({ length: 20 }, (_, i) => ({
      id: `7-${i + 1}`,
      number: i + 1,
      title: `Episode ${i + 1}`,
      duration: "24:00",
      thumbnail: `https://images.unsplash.com/photo-1626278664285-f796b9ee7806?w=300&h=170&fit=crop&q=80`,
      videoUrl: "/anime/demo.mp4",
    })),
  },
  {
    id: "8",
    title: "Chainsaw Man",
    originalTitle: "チェンソーマン",
    description:
      "Denji has a simple dream—to live a happy and peaceful life, spending time with a girl he likes. However, this is quickly shattered by reality when he is betrayed.",
    coverImage:
      "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=400&h=600&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=1920&h=800&fit=crop",
    genre: ["Action", "Dark Fantasy", "Horror"],
    rating: 4.6,
    episodeCount: 12,
    releaseYear: 2022,
    status: "completed",
    category: ["recent", "trending"],
    episodes: Array.from({ length: 12 }, (_, i) => ({
      id: `8-${i + 1}`,
      number: i + 1,
      title: `Episode ${i + 1}`,
      duration: "24:00",
      thumbnail: `https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=300&h=170&fit=crop&q=80`,
      videoUrl: "/anime/demo.mp4",
    })),
  },
  {
    id: "9",
    title: "Spy × Family",
    originalTitle: "スパイファミリー",
    description:
      "A spy must create a fake family to complete a mission, not realizing that the girl he adopts as his daughter is a telepath, and his wife is a skilled assassin.",
    coverImage:
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=600&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1920&h=800&fit=crop",
    genre: ["Action", "Comedy", "Family"],
    rating: 4.8,
    episodeCount: 25,
    releaseYear: 2022,
    status: "ongoing",
    category: ["recent", "trending"],
    episodes: Array.from({ length: 25 }, (_, i) => ({
      id: `9-${i + 1}`,
      number: i + 1,
      title: `Episode ${i + 1}`,
      duration: "24:00",
      thumbnail: `https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=170&fit=crop&q=80`,
      videoUrl: "/anime/demo.mp4",
    })),
  },
  {
    id: "10",
    title: "Death Note",
    originalTitle: "デスノート",
    description:
      "A high school student discovers a supernatural notebook that allows him to kill anyone by writing their name in it. He decides to use it to rid the world of criminals.",
    coverImage:
      "https://images.unsplash.com/photo-1618281460083-c60b610e46e3?w=400&h=600&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1618281460083-c60b610e46e3?w=1920&h=800&fit=crop",
    genre: ["Mystery", "Psychological", "Thriller"],
    rating: 4.9,
    episodeCount: 37,
    releaseYear: 2006,
    status: "completed",
    category: ["classic"],
    episodes: Array.from({ length: 20 }, (_, i) => ({
      id: `10-${i + 1}`,
      number: i + 1,
      title: `Episode ${i + 1}`,
      duration: "24:00",
      thumbnail: `https://images.unsplash.com/photo-1618281460083-c60b610e46e3?w=300&h=170&fit=crop&q=80`,
      videoUrl: "/anime/demo.mp4",
    })),
  },
  {
    id: "11",
    title: "Steins;Gate",
    originalTitle: "シュタインズ・ゲート",
    description:
      "A self-proclaimed mad scientist discovers he can send messages to the past, but changing the past has unforeseen consequences on the future.",
    coverImage:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=600&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&h=800&fit=crop",
    genre: ["Sci-Fi", "Thriller", "Drama"],
    rating: 4.9,
    episodeCount: 24,
    releaseYear: 2011,
    status: "completed",
    category: ["classic"],
    episodes: Array.from({ length: 24 }, (_, i) => ({
      id: `11-${i + 1}`,
      number: i + 1,
      title: `Episode ${i + 1}`,
      duration: "24:00",
      thumbnail: `https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=170&fit=crop&q=80`,
      videoUrl: "/anime/demo.mp4",
    })),
  },
  {
    id: "12",
    title: "Violet Evergarden",
    originalTitle: "ヴァイオレット・エヴァーガーデン",
    description:
      "A former soldier becomes an Auto Memory Doll, writing letters for people to help them express their feelings, while searching for the meaning of the words told to her by her major.",
    coverImage:
      "https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=400&h=600&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=1920&h=800&fit=crop",
    genre: ["Drama", "Fantasy", "Slice of Life"],
    rating: 4.7,
    episodeCount: 13,
    releaseYear: 2018,
    status: "completed",
    category: ["recent"],
    episodes: Array.from({ length: 13 }, (_, i) => ({
      id: `12-${i + 1}`,
      number: i + 1,
      title: `Episode ${i + 1}`,
      duration: "24:00",
      thumbnail: `https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=300&h=170&fit=crop&q=80`,
      videoUrl: "/anime/demo.mp4",
    })),
  },
  {
    id: "13",
    title: "Cowboy Bebop",
    originalTitle: "カウボーイビバップ",
    description:
      "A ragtag crew of bounty hunters chase down the galaxy's most dangerous criminals while trying to escape their own troubled pasts.",
    coverImage:
      "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400&h=600&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=1920&h=800&fit=crop",
    genre: ["Action", "Sci-Fi", "Space Western"],
    rating: 4.8,
    episodeCount: 26,
    releaseYear: 1998,
    status: "completed",
    category: ["classic"],
    episodes: Array.from({ length: 26 }, (_, i) => ({
      id: `13-${i + 1}`,
      number: i + 1,
      title: `Episode ${i + 1}`,
      duration: "24:00",
      thumbnail: `https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=300&h=170&fit=crop&q=80`,
      videoUrl: "/anime/demo.mp4",
    })),
  },
  {
    id: "14",
    title: "Hunter x Hunter",
    originalTitle: "ハンター×ハンター",
    description:
      "A young boy leaves his home on Whale Island to become a Hunter like his father. Along the way, he makes friends and encounters the paranormal.",
    coverImage:
      "https://images.unsplash.com/photo-1611329532992-0b7d094e5acc?w=400&h=600&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1611329532992-0b7d094e5acc?w=1920&h=800&fit=crop",
    genre: ["Action", "Adventure", "Fantasy"],
    rating: 4.9,
    episodeCount: 148,
    releaseYear: 2011,
    status: "completed",
    category: ["classic", "trending"],
    episodes: Array.from({ length: 30 }, (_, i) => ({
      id: `14-${i + 1}`,
      number: i + 1,
      title: `Episode ${i + 1}`,
      duration: "24:00",
      thumbnail: `https://images.unsplash.com/photo-1611329532992-0b7d094e5acc?w=300&h=170&fit=crop&q=80`,
      videoUrl: "/anime/demo.mp4",
    })),
  },
  {
    id: "15",
    title: "Tokyo Revengers",
    originalTitle: "東京卍リベンジャーズ",
    description:
      "A young man discovers he can travel back in time and tries to prevent the death of his girlfriend by changing the future.",
    coverImage:
      "https://images.unsplash.com/photo-1555992336-fb0d29498b13?w=400&h=600&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1555992336-fb0d29498b13?w=1920&h=800&fit=crop",
    genre: ["Action", "Drama", "Supernatural"],
    rating: 4.5,
    episodeCount: 24,
    releaseYear: 2021,
    status: "ongoing",
    category: ["recent", "trending"],
    episodes: Array.from({ length: 24 }, (_, i) => ({
      id: `15-${i + 1}`,
      number: i + 1,
      title: `Episode ${i + 1}`,
      duration: "24:00",
      thumbnail: `https://images.unsplash.com/photo-1555992336-fb0d29498b13?w=300&h=170&fit=crop&q=80`,
      videoUrl: "/anime/demo.mp4",
    })),
  },
  {
    id: "16",
    title: "Mob Psycho 100",
    originalTitle: "モブサイコ100",
    description:
      "A powerful psychic tries to live a normal life while working for a con artist who claims to be a psychic, but his suppressed emotions threaten to unleash his true power.",
    coverImage:
      "https://images.unsplash.com/photo-1566053510639-413d5e0c8b9a?w=400&h=600&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1566053510639-413d5e0c8b9a?w=1920&h=800&fit=crop",
    genre: ["Action", "Comedy", "Supernatural"],
    rating: 4.8,
    episodeCount: 25,
    releaseYear: 2016,
    status: "completed",
    category: ["recent"],
    episodes: Array.from({ length: 25 }, (_, i) => ({
      id: `16-${i + 1}`,
      number: i + 1,
      title: `Episode ${i + 1}`,
      duration: "24:00",
      thumbnail: `https://images.unsplash.com/photo-1566053510639-413d5e0c8b9a?w=300&h=170&fit=crop&q=80`,
      videoUrl: "/anime/demo.mp4",
    })),
  },
  {
    id: "17",
    title: "Vinland Saga",
    originalTitle: "ヴィンランド・サガ",
    description:
      "A young Viking warrior seeks revenge for his father's death while caught in a war between England and Denmark during the Viking Age.",
    coverImage:
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=600&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1920&h=800&fit=crop",
    genre: ["Action", "Adventure", "Historical"],
    rating: 4.7,
    episodeCount: 24,
    releaseYear: 2019,
    status: "ongoing",
    category: ["recent", "trending"],
    episodes: Array.from({ length: 24 }, (_, i) => ({
      id: `17-${i + 1}`,
      number: i + 1,
      title: `Episode ${i + 1}`,
      duration: "24:00",
      thumbnail: `https://images.unsplash.com/photo-1590736969955-71cc94901144?w=300&h=170&fit=crop&q=80`,
      videoUrl: "/anime/demo.mp4",
    })),
  },
  {
    id: "18",
    title: "Code Geass",
    originalTitle: "コードギアス",
    description:
      "A young man gains the power to control minds and leads a rebellion against an oppressive empire while hiding his true identity.",
    coverImage:
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=600&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=1920&h=800&fit=crop",
    genre: ["Action", "Drama", "Mecha"],
    rating: 4.8,
    episodeCount: 50,
    releaseYear: 2006,
    status: "completed",
    category: ["classic"],
    episodes: Array.from({ length: 25 }, (_, i) => ({
      id: `18-${i + 1}`,
      number: i + 1,
      title: `Episode ${i + 1}`,
      duration: "24:00",
      thumbnail: `https://images.unsplash.com/photo-1589254065878-42c9da997008?w=300&h=170&fit=crop&q=80`,
      videoUrl: "/anime/demo.mp4",
    })),
  },
];

// Helper functions
export const getAnimeById = (id: string): Anime | undefined => {
  return animeList.find((anime) => anime.id === id);
};

export const getAnimesByCategory = (
  category: "trending" | "recent" | "classic",
): Anime[] => {
  return animeList.filter((anime) => anime.category.includes(category));
};

export const getFeaturedAnime = (): Anime => {
  return animeList[0]; // Featured anime
};

type ArtistPageProps = {
  params: {
    slug: string;
  };
};

const artists = {
  "loxion-beatz": {
    name: "Loxion Beatz",
    genre: "Amapiano",
    bio: "Producer focused on deep log drums and township energy.",
  },

  "ndu-sa": {
    name: "Ndu SA",
    genre: "Afro Tech",
    bio: "Creative visionary blending rhythm, culture and technology.",
  },

  "vision-waves": {
    name: "Vision Waves",
    genre: "Hip Hop",
    bio: "Storytelling through futuristic African soundscapes.",
  },
};

export default function ArtistProfile({
  params,
}: ArtistPageProps) {

  const artist =
    artists[params.slug as keyof typeof artists];

  if (!artist) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Artist Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-4xl mx-auto">

        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-8"></div>

        <h1 className="text-6xl font-black">
          {artist.name}
        </h1>

        <p className="text-purple-400 text-xl mt-4">
          {artist.genre}
        </p>

        <p className="text-zinc-400 text-lg mt-8 max-w-2xl leading-relaxed">
          {artist.bio}
        </p>

        <div className="flex gap-4 mt-10 flex-wrap">

          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            Follow Artist
          </button>

          <button className="border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition">
            Message
          </button>

        </div>

      </div>

    </main>
  );
}
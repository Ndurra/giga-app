import {
  Music2,
  Radio,
  Users,
  ArrowRight,
} from "lucide-react";

const artists = [
  {
    name: "Loxion Beatz",
    genre: "Amapiano",
  },
  {
    name: "Ndu SA",
    genre: "Afro Tech",
  },
  {
    name: "Vision Waves",
    genre: "Hip Hop",
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <h1 className="text-2xl font-bold tracking-wide">
          GiGa
        </h1>

        <button className="bg-white text-black px-4 py-2 rounded-full font-medium hover:scale-105 transition">
          Join Now
        </button>
      </nav>

      {/* HERO */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-4">
            The Future Of Creative Collaboration
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Connect Artists.
            <br />
            Build Culture.
          </h1>

          <p className="mt-6 text-zinc-400 text-lg max-w-xl">
            GiGa helps artists, producers, DJs and creatives
            connect, collaborate and grow together in one
            powerful ecosystem.
          </p>

          <div className="flex gap-4 mt-10 flex-wrap">
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition">
              Start Exploring
              <ArrowRight size={18} />
            </button>

            <button className="border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="grid md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto pb-24">
        <div className="bg-zinc-900 p-6 rounded-3xl border border-white/10">
          <Music2 className="mb-4" />

          <h3 className="text-xl font-bold mb-2">
            Artist Profiles
          </h3>

          <p className="text-zinc-400">
            Showcase music, links, visuals and your unique identity.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-3xl border border-white/10">
          <Radio className="mb-4" />

          <h3 className="text-xl font-bold mb-2">
            Discover Talent
          </h3>

          <p className="text-zinc-400">
            Find creatives and collaborators from your city and beyond.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-3xl border border-white/10">
          <Users className="mb-4" />

          <h3 className="text-xl font-bold mb-2">
            Build Community
          </h3>

          <p className="text-zinc-400">
            Connect musicians, dancers, DJs, videographers and more.
          </p>
        </div>
      </section>

      {/* FEATURED ARTISTS */}
      <section className="px-6 max-w-6xl mx-auto pb-24">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">
            Featured Artists
          </h2>

          <button className="text-zinc-400 hover:text-white transition">
            View All
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {artists.map((artist) => (
            <div
              key={artist.name}
              className="bg-zinc-900 rounded-3xl p-6 border border-white/10 hover:border-white/30 transition"
            >
              <div className="w-16 h-16 rounded-full bg-zinc-700 mb-5"></div>

              <h3 className="text-xl font-bold">
                {artist.name}
              </h3>

              <p className="text-zinc-400 mt-1">
                {artist.genre}
              </p>

              <button className="mt-6 text-sm border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto bg-white text-black rounded-[3rem] p-10 md:p-16">
          <h2 className="text-4xl md:text-5xl font-black max-w-2xl">
            The next generation of African creativity starts here.
          </h2>

          <p className="mt-6 text-zinc-700 max-w-xl">
            Join GiGa and become part of a movement built for creators.
          </p>

          <button className="mt-8 bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition">
            Create Account
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 text-zinc-500 text-sm">
        <div className="max-w-6xl mx-auto flex justify-between flex-wrap gap-4">
          <p>© 2026 GiGa. All rights reserved.</p>

          <div className="flex gap-6">
            <button>Instagram</button>
            <button>Twitter</button>
            <button>Contact</button>
          </div>
        </div>
      </footer>

    </main>
  );
}
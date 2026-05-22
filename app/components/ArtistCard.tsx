import Link from "next/link";

type ArtistCardProps = {
  name: string;
  genre: string;
};

export default function ArtistCard({
  name,
  genre,
}: ArtistCardProps) {

  return (
    <Link
      href={`/artists/${name.toLowerCase().replace(/\s+/g, "-")}`}
    >

      <div className="group bg-zinc-900 rounded-3xl p-6 border border-white/10 hover:border-purple-500/50 transition duration-300 hover:-translate-y-2 cursor-pointer">

        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-5"></div>

        <h3 className="text-2xl font-bold">
          {name}
        </h3>

        <p className="text-zinc-400 mt-2">
          {genre}
        </p>

        <button className="mt-6 border border-white/20 px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
          View Profile
        </button>

      </div>

    </Link>
  );
}
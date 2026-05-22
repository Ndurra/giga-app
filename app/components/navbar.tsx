import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-5 border-b border-white/10">
      
      <Link
        href="/"
        className="text-2xl font-bold tracking-wide"
      >
        GiGa
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
        <Link href="/">Home</Link>
        <Link href="/discover">Discover</Link>
        <Link href="/artists">Artists</Link>
        <Link href="/login">Login</Link>
      </div>

      <button className="bg-white text-black px-4 py-2 rounded-full font-medium hover:scale-105 transition">
        Join Now
      </button>
    </nav>
  );
}
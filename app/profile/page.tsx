"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const INITIAL_LOADING_STATE = true;
const EMPTY_STRING = "";

export default function ProfilePage() {

  const [loading, setLoading] = useState(INITIAL_LOADING_STATE);

  const [username, setUsername] = useState(EMPTY_STRING);
  const [artistName, setArtistName] = useState(EMPTY_STRING);
  const [genre, setGenre] = useState(EMPTY_STRING);
  const [bio, setBio] = useState(EMPTY_STRING);

  async function getProfile() {

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setLoading(false);
      return;
    }

    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (data) {
      setUsername(data.username || EMPTY_STRING);
      setArtistName(data.artist_name || EMPTY_STRING);
      setGenre(data.genre || EMPTY_STRING);
      setBio(data.bio || EMPTY_STRING);
    }

    setLoading(false);
  }

  async function updateProfile() {

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("You must be logged in.");
      return;
    }
    console.log(user);

    const updates = {
      id: user.id,
      username,
      artist_name: artistName,
      genre,
      bio,
    };

    const { error } = await supabase
      .from("profiles")
      .upsert(updates);

    if (error) {
      alert(error.message);
    } else {
      alert("Profile updated!");
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-2xl mx-auto bg-zinc-900 border border-white/10 rounded-3xl p-8">

        <h1 className="text-5xl font-black mb-10">
          Your Profile
        </h1>

        <div className="space-y-6">

          <input
            type="text"
            placeholder="Username"
            className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="text"
            placeholder="Artist Name"
            className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 outline-none"
            value={artistName}
            onChange={(e) => setArtistName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Genre"
            className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 outline-none"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />

          <textarea
            placeholder="Bio"
            className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 outline-none min-h-[140px]"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />

          <button
            onClick={updateProfile}
            className="w-full bg-white text-black py-4 rounded-xl font-bold hover:scale-[1.02] transition"
          >
            Save Profile
          </button>

        </div>

      </div>

    </main>
  );
}
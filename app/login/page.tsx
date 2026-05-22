"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function LoginPage() {

  const [email, setEmail] = useState("");

  async function handleSignup() {

    const { error } = await supabase.auth.signInWithOtp({
  email,
  options: {
    emailRedirectTo: "http://localhost:3000/profile",
  },
});

    if (error) {
      alert(error.message);
    } else {
      alert("Check your email for login link!");
    }
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-zinc-900 border border-white/10 rounded-3xl p-8">

        <h1 className="text-4xl font-black mb-8">
          Join GiGa
        </h1>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 mb-6 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-white text-black py-4 rounded-xl font-bold hover:scale-[1.02] transition"
        >
          Continue
        </button>

      </div>

    </main>
  );
}
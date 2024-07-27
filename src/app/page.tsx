"use client";

import Github from "next-auth/providers/github";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <button
        className="btn btn-primary"
        onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
      >
        Login com GitHub
      </button>
    </main>
  );
}

"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    signIn("credentials", {
      ...data,
      callbackUrl: "/dashboard",
    });
  }

  return (
    <main className="">
      <div className="h-screen flex justify-center items-center bg-slate-600 px-5">
        <form
          onSubmit={login}
          className="bg-white p-12 rounded-lg w-96 max-w-full flex justify-center items-center flex-col gap-2"
        >
          <h2 className="font-bold text-xl mb-3">Faça seu Login</h2>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input input-primary w-full"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Senha"
            className="input input-primary w-full"
            required
          />
          <button className="btn btn-primary w-full" type="submit">
            Login
          </button>

          <button
            className="btn btn-primary w-full mt-2"
            type="button"
            onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
          >
            Login com GitHub
          </button>

          {error === "CredentialsSignin" && (
            <div className="text-red-500 mt-2">Erro no Login</div>
          )}
        </form>
      </div>
    </main>
  );
}

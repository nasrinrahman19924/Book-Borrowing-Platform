"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await authClient.signIn.email({ email, password });
      router.push("/");
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl p-6 space-y-4">

        <h2 className="text-2xl font-bold text-center">Login</h2>

        
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full"
        >
          Continue with Google
        </button>

        <div className="divider">OR</div>

        
        <form onSubmit={handleLogin} className="space-y-3">
          <input
            className="input input-bordered w-full"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="input input-bordered w-full"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-primary w-full">Login</button>
        </form>

        <p className="text-center text-sm">
          New here?{" "}
          <a href="/register" className="text-primary font-semibold">
            Create Account
          </a>
        </p>
      </div>
    </div>
  );
}
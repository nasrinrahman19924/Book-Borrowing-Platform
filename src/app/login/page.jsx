"use client";

import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const handleGoogleLogin = async () => {
    await authClient.signIn({
      provider: "google",
    });
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Login</h1>

      <button
        onClick={handleGoogleLogin}
        className="btn btn-primary w-full"
      >
        Continue with Google
      </button>
    </div>
  );
}
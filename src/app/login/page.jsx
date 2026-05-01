"use client";

import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <button onClick={handleGoogleLogin} className="btn btn-primary">
        Continue with Google
      </button>
    </div>
  );
}
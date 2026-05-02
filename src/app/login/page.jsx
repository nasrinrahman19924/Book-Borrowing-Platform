"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/", // 👈 login শেষে কোথায় যাবে
    });
  };

  return (
    <div className="flex justify-center mt-20">
      <button onClick={handleGoogleLogin} className="btn btn-primary">
        Continue with Google
      </button>
    </div>
  );
}
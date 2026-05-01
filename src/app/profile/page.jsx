"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const session = await authClient.getSession();
      setUser(session?.user);
    };
    loadUser();
  }, []);

  if (!user) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 text-center">
      <img
        src={user.image}
        alt="user"
        className="w-32 h-32 rounded-full mx-auto"
      />

      <h1 className="text-3xl font-bold mt-4">{user.name}</h1>
      <p className="mt-2">{user.email}</p>

      <Link href="/profile/update" className="btn btn-outline mt-6">
        Update Profile
      </Link>
    </div>
  );
}
"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  useEffect(() => {
    
    if (!isPending && !session) {
      router.replace("/login");
    }
  }, [isPending, session, router]);

  
  if (isPending) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  
  if (!session) return null;

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">My Profile</h1>
      <p>Name: {session.user.name}</p>
      <p>Email: {session.user.email}</p>
    </div>
  );
}
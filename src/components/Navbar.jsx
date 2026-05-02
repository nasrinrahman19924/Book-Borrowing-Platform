"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const { data: session } = authClient.useSession(); // 👈 correct

  const user = session?.user;

  return (
    <div className="navbar bg-base-100 px-4">
      
     <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
       {/* LEFT */}
      <div className="flex-1">
        <Link href="/" className="text-xl font-bold">
          📚 BookApp
        </Link>
      </div>

      {/* CENTER */}
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/all-books">All Books</Link>
        <Link href="/profile">My Profile</Link>
      </div>

      {/* RIGHT */}
      <div>
        {user ? (
          <div className="flex items-center gap-6 mt-6">
            <span>{user.name}</span>

            <button
              onClick={async () => {
                await authClient.signOut();
                window.location.href = "/";
              }}
              className="btn btn-sm btn-error"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link href="/login" className="btn btn-primary btn-sm">
            Login
          </Link>
        )}
      </div>
     </nav>
    </div>
  );
}
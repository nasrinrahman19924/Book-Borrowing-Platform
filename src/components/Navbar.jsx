"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const [user, setUser] = useState(null);

  // Load user
  useEffect(() => {
    const loadUser = async () => {
      const session = await authClient.getSession();
      setUser(session?.user);
    };
    loadUser();
  }, []);

  const handleLogout = async () => {
    await authClient.signOut();
    setUser(null);
  };

  return (
    <div className="navbar bg-base-100 justify-between shadow-md px-6">

      {/* 🔵 LEFT: Logo */}
      <div className="flex-1">
        <Link href="/" className="text-2xl font-bold text-primary">
          📚 BookApp
        </Link>
      </div>

      {/* 🟢 CENTER: Navigation */}
      <div className="flex-none justify-center hidden md:flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/all-books">All Books</Link>
        <Link href="/profile">My Profile</Link>
      </div>
      <div className="dropdown md:hidden">
        <label tabIndex={0} className="btn btn-ghost">
          ☰
        </label>

        <ul className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/all-books">All Books</Link></li>
          <li><Link href="/profile">My Profile</Link></li>
        </ul>
      </div>

      {/* 🔴 RIGHT: Auth */}
      <div className="flex-none ml-auto flex items-center gap-4">
        {!user ? (
          <Link href="/login" className="btn btn-primary">
            Login
          </Link>
        ) : (
          <>
            <span className="font-semibold">
              {user.name}
            </span>

            <button
              onClick={handleLogout}
              className="btn btn-error"
            >
              Logout
            </button>
          </>
        )}
      </div>

    </div>
  );
}
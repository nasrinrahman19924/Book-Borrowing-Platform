import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      
      {/* Logo */}
      <div className="flex-1">
        <Link href="/" className="text-2xl font-bold text-primary">
          📚 BookApp
        </Link>
      </div>

      {/* Menu */}
      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/all-books">All Books</Link>
        <Link href="/profile">My Profile</Link>
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
}
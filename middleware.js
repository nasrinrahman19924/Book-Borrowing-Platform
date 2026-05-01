import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("better-auth.session-token");

  const isProtected =
    req.nextUrl.pathname.startsWith("/profile") ||
    req.nextUrl.pathname.startsWith("/books");

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
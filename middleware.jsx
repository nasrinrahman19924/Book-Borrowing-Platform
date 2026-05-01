import { auth } from "@/lib/auth";   // ✅ ঠিক
import { NextResponse } from "next/server";

export async function middleware(req) {
  const session = await auth.api.getSession(req);

  const isProtected =
    req.nextUrl.pathname.startsWith("/profile") ||
    req.nextUrl.pathname.startsWith("/books");

  if (isProtected && !session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
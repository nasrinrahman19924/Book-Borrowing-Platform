"use client";

import Marquee from "react-fast-marquee";

export default function MarqueeText() {
  return (
    <Marquee className="bg-primary text-white py-3">
      New Arrivals: Clean Code | Atomic Habits | Sapiens |
      Special Discount on Memberships 📚
    </Marquee>
  );
}
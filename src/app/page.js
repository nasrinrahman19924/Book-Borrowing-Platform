import Link from "next/link";
import MarqueeText from "@/components/MarqueeText";
import FeaturedBooks from "@/components/FeaturedBooks";

export default function Home() {
  return (
    <>
      {/* Banner */}
      <div className="hero min-h-[80vh] bg-base-200">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-6xl font-bold">
              Find Your Next Read
            </h1>

            <p className="py-6 text-lg">
              Discover amazing books from every category
            </p>

            <Link
              href="/all-books"
              className="btn btn-primary"
            >
              Browse Now
            </Link>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <MarqueeText />

      {/* Featured Books */}
      <FeaturedBooks />

      {/* Extra Section 1 */}
      <section className="py-20 bg-base-200 text-center">
        <h2 className="text-4xl font-bold">
          Why Choose Us?
        </h2>

        <p className="mt-4">
          Fast, secure, and modern online borrowing
        </p>
      </section>

      {/* Extra Section 2 */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold">
          Trusted by Readers
        </h2>

        <p className="mt-4">
          Thousands of students use BookApp daily
        </p>
      </section>
    </>
  );
}
import Link from "next/link";
import MarqueeText from "@/components/MarqueeText";
import FeaturedBooks from "@/components/FeaturedBooks";


  export default function Home() {
    return (
      <>
          {/* 🔥 Banner Section */}
      <div
        className="hero min-h-[70vh]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512820790803-83ca734da794')",
        }}
      >
        {/* Overlay */}
        <div className="hero-overlay bg-gradient-to-r from-black via-black/20 to-transparent"></div>

        <div className="hero-content text-center text-white">
          <div>
            <h1 className="text-5xl font-bold">
              Find Your Next Read 📚
            </h1>

            <p className="py-4">
              Discover amazing books from every category
            </p>

            <Link href="/all-books">
              <button className="btn btn-primary">
                Browse Now
              </button>
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
import { getBooks } from "@/lib/books";

export default function FeaturedBooks() {
  const books = getBooks().slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto py-16">
      <h2 className="text-4xl font-bold text-center mb-10">
        Featured Books
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="card bg-base-100 shadow-xl"
          >
            <figure>
              <img src={book.image_url} alt={book.title} />
            </figure>

            <div className="card-body">
              <h2 className="card-title">{book.title}</h2>
              <p>{book.author}</p>

              <button className="btn btn-primary">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
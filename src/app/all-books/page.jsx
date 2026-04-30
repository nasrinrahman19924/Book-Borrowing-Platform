"use client";

import { useState } from "react";
import { getBooks } from "@/lib/books";

export default function AllBooksPage() {
  const allBooks = getBooks();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredBooks = allBooks.filter((book) => {
    const matchSearch = book.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || book.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="max-w-7xl mx-auto p-6">

      {/* Search */}
      <input
        type="text"
        placeholder="Search books..."
        className="input input-bordered w-full mb-6"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Category Buttons */}
      <div className="flex gap-3 mb-6">
        {["All", "Story", "Tech", "Science"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className="btn btn-outline"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Books */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <div key={book.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img src={book.image_url} alt={book.title} />
            </figure>

            <div className="card-body">
              <h2 className="card-title">{book.title}</h2>
              <p>{book.author}</p>

              <button className="btn btn-primary">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
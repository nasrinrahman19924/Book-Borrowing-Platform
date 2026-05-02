import { getBookById } from "@/lib/books";
import BorrowButton from "@/components/BorrowButton";

export default async function BookDetails({ params }) {
  const { id } = await params;   

  const book = getBookById(id);

  if (!book) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold">
          Book Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-10 grid md:grid-cols-2 gap-10">

      
      <div>
        <img src={book.image_url} alt={book.title} />
      </div>

     
      <div>
        <h1 className="text-5xl font-bold">{book.title}</h1>
        <p className="mt-4">Author: {book.author}</p>
        <p className="mt-6">{book.description}</p>
        <p className="mt-6">{book.available_quantity} copies left</p>

        <BorrowButton />
      </div>
    </div>
  );
}
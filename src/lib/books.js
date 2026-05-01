import books from "@/data/books.json";

export const getBooks = () => books;

export const getBookById = (id) =>
  books.find((book) => String(book.id) === String(id));
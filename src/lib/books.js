import books from "@/data/books.json";

export const getBooks = () => books;

export const getBookById = (id) =>
  books.find((b) => b.id === id);
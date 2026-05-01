"use client";

import toast from "react-hot-toast";

export default function BorrowButton() {
  return (
    <button
      onClick={() => toast.success("Book Borrowed!")}
      className="btn btn-primary mt-8"
    >
      Borrow This Book
    </button>
  );
}
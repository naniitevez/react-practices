import React from "react";
import { useParams } from "react-router-dom";
import books from "../data/books";
import GoBack from "../components/GoBack";

const Book = () => {
  let { bookId } = useParams();
  const book = books.filter((book) => book.id === bookId)[0];

  return (
    <div id="book_page">
      <GoBack />
      <h1 className="title">{book.title}</h1>
      <section className="book_container">
        <figure className="image_container" style={{ viewTransitionName: `book-${book.id}` }}>
          <img src={book.cover} alt="" />
        </figure>
        <p>{book.description}</p>
      </section>
    </div>
  );
};

export default Book;

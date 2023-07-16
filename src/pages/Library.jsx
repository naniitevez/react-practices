import React from "react";
import { useNavigate } from "react-router-dom";
import GoBack from "../components/GoBack";
import Book from "../components/Book";
import books from "../data/books";
import "../App.scss";
import { flushSync } from "react-dom";

const Library = () => {
  const navigate = useNavigate();

  const handleRedirect = (link) => {
    if (!document.startViewTransition) {
      navigate(`/book/${link}`);
      return;
    }

    document.startViewTransition(() =>
      flushSync(() => navigate(`/book/${link}`))
    );
  };

  return (
    <div id="library-page">
      <GoBack />
      <>
        <h1 className="title">
          RECOMENDED <span>BOOKS</span>
        </h1>
        <section className="library_container">
          {books?.map((book) => (
            <Book
              handleClick={handleRedirect}
              img={book.cover}
              id={book.id}
              title={book.title}
              key={book.id}
            />
          ))}
        </section>
      </>
    </div>
  );
};

export default Library;

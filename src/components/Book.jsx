import React from "react";

const Book = ({ handleClick, img, id, title }) => {
  return (
    <figure
      onClick={() => handleClick(id)}
      className="book_container"
    >
      <img
        src={img}
        alt={`Portada del libro: ${title}`}
        title={title}
        width={200}
        style={{ viewTransitionName: `book-${id}` }}
      />
    </figure>
  );
};

export default Book;

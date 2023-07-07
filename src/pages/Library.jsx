import React from "react";
import GoHome from "../components/GoHome";
import "../App.scss";

const Library = () => {
  return (
    <div id="library-page">
      <GoHome />
      <>
        <h1 className="title">
          RECOMENDED <span>BOOKS</span>
        </h1>
        <section className="library_container">
          <figure className="book_container">
            <img
              src="https://books.zaps.dev/images/compressed/619O1ieMN4L.webp"
              alt=""
              width={200}
            />
          </figure>
          <figure className="book_container">
            <img
              src="https://books.zaps.dev/images/compressed/81A0Cu26bGL_compressed.jpeg"
              alt=""
              width={200}
            />
          </figure>
          <figure className="book_container">
            <img
              src="https://books.zaps.dev/images/compressed/81wgcld4wxL_compressed.webp"
              alt=""
              width={200}
            />
          </figure>
          <figure className="book_container">
            <img
              src="https://books.zaps.dev/images/compressed/81Yd6Q6geBL.webp"
              alt=""
              width={200}
            />
          </figure>
          <figure className="book_container">
            <img
              src="https://books.zaps.dev/images/compressed/71aqa5sZxYL.webp"
              alt=""
              width={200}
            />
          </figure>
          <figure className="book_container">
            <img
              src="https://books.zaps.dev/images/compressed/71yA4+MC46L_compressed.webp"
              alt=""
              width={200}
            />
          </figure>
          <figure className="book_container">
            <img
              src="https://books.zaps.dev/images/compressed/71+pnb1BMOL_compressed.jpg"
              alt=""
              width={200}
            />
          </figure>
          <figure className="book_container">
            <img
              src="https://books.zaps.dev/images/compressed/61XPbDeVTjL.webp"
              alt=""
              width={200}
            />
          </figure>
        </section>
      </>
    </div>
  );
};

export default Library;

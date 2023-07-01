import { useState } from "react";
import "./App.css";
import { flushSync } from "react-dom";

const GALLERY = "gallery";
const FULL = "full";

function App() {
  const [imagesView, setImagesView] = useState(GALLERY);
  const [transitionName, setTransitionName] = useState("");
  const [imageSelected, setImageSelected] = useState("");

  function handleClick(e) {
    document.startViewTransition(() =>
      flushSync(() => {
        setTransitionName(e.target.style.viewTransitionName);
        setImageSelected(e.target.src);
        setImagesView((prev) => (prev === GALLERY ? FULL : GALLERY));
      })
    );
  }

  return (
    <>
      {imagesView === GALLERY ? (
        <>
          <h1 className="title">Gallery</h1>
          <section className="container">
            <figure className="image_container">
              <img
                src="https://picsum.photos/id/10/1200/1200"
                alt=""
                width={300}
                onClick={handleClick}
                style={{ viewTransitionName: "paisaje-1" }}
              />
            </figure>
            <figure className="image_container">
              <img
                src="https://picsum.photos/id/11/1200/1200"
                alt=""
                width={300}
                onClick={handleClick}
                style={{ viewTransitionName: "paisaje-2" }}
              />
            </figure>
            <figure className="image_container">
              <img
                src="https://picsum.photos/id/12/1200/1200"
                alt=""
                width={300}
                onClick={handleClick}
                style={{ viewTransitionName: "paisaje-3" }}
              />
            </figure>
            <figure className="image_container">
              <img
                src="https://picsum.photos/id/13/1200/1200"
                alt=""
                width={300}
                onClick={handleClick}
                style={{ viewTransitionName: "paisaje-4" }}
              />
            </figure>
            <figure className="image_container">
              <img
                src="https://picsum.photos/id/14/1200/1200"
                alt=""
                width={300}
                onClick={handleClick}
                style={{ viewTransitionName: "paisaje-5" }}
              />
            </figure>
            <figure className="image_container">
              <img
                src="https://picsum.photos/id/15/1200/1200"
                alt=""
                width={300}
                onClick={handleClick}
                style={{ viewTransitionName: "paisaje-6" }}
              />
            </figure>
            <figure className="image_container">
              <img
                src="https://picsum.photos/id/16/1200/1200"
                alt=""
                width={300}
                onClick={handleClick}
                style={{ viewTransitionName: "paisaje-7" }}
              />
            </figure>
            <figure className="image_container">
              <img
                src="https://picsum.photos/id/18/1200/1200"
                alt=""
                width={300}
                onClick={handleClick}
                style={{ viewTransitionName: "paisaje-8" }}
              />
            </figure>
          </section>
        </>
      ) : (
        <section className="full_picture_container">
          <button className="close" onClick={handleClick}>
            X
          </button>
          <img
            src={imageSelected}
            alt=""
            width={600}
            onClick={handleClick}
            style={{ viewTransitionName: transitionName }}
          />
        </section>
      )}
    </>
  );
}

export default App;

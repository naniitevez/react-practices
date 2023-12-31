import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Gallery from "./pages/Gallery.jsx";
import Library from "./pages/Library.jsx";
import Book from "./pages/Book.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/library",
    element: <Library />,
  },
  {
    path: "/book/:bookId",
    element: <Book />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

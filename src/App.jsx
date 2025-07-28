import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Login from "./Components/Login/Login";
import { store } from "./lib/store";
import { Provider } from "react-redux";
import Home from "./Components/Home/Home";
import Movies from "./Components/Movies/Movies";
import Series from "./Components/Series/Series";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import SeriesDetails from "./Components/SeriesDetails/SeriesDetails";
import CharDetails from "./Components/CharDetails/CharDetails";
import AllCharactor from "./Components/AllCharactor/AllCharactor";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";

let Router = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "series",
        element: <Series />,
      },
      {
        path: "movie/:id",
        element: <MovieDetails />,
      },
      {
        path: "tv/:id",
        element: <SeriesDetails />,
      },
      {
        path: "person/:id",
        element: <CharDetails />,
      },
      {
        path: "charactor",
        element: <AllCharactor />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={Router}></RouterProvider>
      </Provider>
    </>
  );
}

export default App;

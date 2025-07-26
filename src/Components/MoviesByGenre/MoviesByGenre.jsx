import React, { useEffect } from "react";
import MediaSlider from "../MediaSlider.jsx/MediaSlider";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesByGenre } from "../../lib/moviesByListSlice";

export default function MoviesByGenre({ genreId = 28, type }) {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesByGenre({ genreId, type }));
  }, [dispatch, genreId, type]);
  let { tv, movie } = useSelector((state) => state.moviebygenre);
  let data = type === "movie" ? movie : tv;
  return (
    <>
      <MediaSlider type={type} data={data} />
    </>
  );
}

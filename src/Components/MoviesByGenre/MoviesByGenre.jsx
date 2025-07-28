import React, { useEffect, useState } from "react";
import MediaSlider from "../MediaSlider.jsx/MediaSlider";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesByGenre } from "../../lib/moviesByListSlice";
import Loading from "../Loading/Loading";

export default function MoviesByGenre({ genreId = 28, type }) {
  let dispatch = useDispatch();
  let { tv, movie, isLoading } = useSelector((state) => state.moviebygenre);
  const [ShowLoading, setShowLoading] = useState(true);
  useEffect(() => {
    dispatch(getMoviesByGenre({ genreId, type }));
  }, [dispatch, genreId, type]);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);
  let data = type === "movie" ? movie : tv;
  return (
    <>{ShowLoading ? <Loading /> : <MediaSlider type={type} data={data} />}</>
  );
}

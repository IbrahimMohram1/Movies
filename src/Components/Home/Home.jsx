import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../lib/store";
import { getAllMovies } from "../../lib/moviesSlice";
import HomeSlider from "../HomeSlider/HomeSlider";
import { Link } from "react-router-dom";
import { getTopRated } from "../../lib/topRatedSlice";
import TopRated from "../TopRated/TopRated";
import { getList } from "../../lib/listSlice";
import Title from "../Title/Title";
import MoviesByGenre from "../MoviesByGenre/MoviesByGenre";
import { getMoviesByGenre } from "../../lib/moviesByListSlice";
import ListComponent from "../ListComponent/ListComponent";
import Charactor from "../Charactor/Charactor";
const type = "movie"; // أو "tv" لو عايز تجرب المسلسلات

export default function Home() {
  let dispatch = useDispatch();
  const allMoviesData = useSelector(
    (state) => state.movies[type] || { results: [] },
  );
  const allMovies = allMoviesData.results || [];

  const [activeMovie, setActiveMovie] = useState(null);

  useEffect(() => {
    dispatch(getAllMovies({ type, page: 1 }));
  }, [dispatch, type]);

  useEffect(() => {
    if (allMovies?.length > 0 && !activeMovie) {
      setActiveMovie(allMovies[0]);
    }
  }, [allMovies, type, activeMovie]);

  return (
    <>
      <div
        className="h-screen object-center bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: activeMovie
            ? `url(https://image.tmdb.org/t/p/original${activeMovie.backdrop_path})`
            : "none",
        }}
      >
        {" "}
        <div className="w-[75%] h-[75%] flex justify-start items-end  mx-auto">
          <div className="w-[50%] text-white bg-black/35  p-6 rounded-md">
            {activeMovie ? (
              <>
                <h2 className="text-3xl font-bold">
                  {activeMovie.original_title}
                </h2>
                <p className="mt-2">
                  {activeMovie.overview?.split(" ").slice(0, 20).join(" ")}
                </p>
                <div className="flex justify-around  my-2 ">
                  <p>Vote : {activeMovie.vote_average}</p>
                  <p>Vote Count : {activeMovie.vote_count}</p>
                </div>
                <p>
                  Original Language :{" "}
                  <span className="text-blue-300 text-xl">
                    {activeMovie.original_language}
                  </span>
                </p>
                {activeMovie && (
                  <Link
                    to={`/movie/${activeMovie.id}`}
                    className="inline-block mt-4 px-4 py-2 border rounded-md"
                  >
                    More Info
                  </Link>
                )}
              </>
            ) : (
              <h2>Loading movie...</h2>
            )}
          </div>
          <div className="w-[50%] h-[50%] ml-16">
            <HomeSlider movies={allMovies} setActiveMovie={setActiveMovie} />
          </div>
        </div>
      </div>

      <Title title="Top Rated Movies" link="/movies" />

      <TopRated type="movie" />

      <Title title="Movies" link="/movies" />
      <ListComponent type="movie" />
      <MoviesByGenre genreId="28" type="movie" />
      <Title title="Series" link="/series" />

      <ListComponent type="tv" />
      <MoviesByGenre genreId="10759" type="tv" />

      <Title title="Charactors" link="/charactor" />
      <Charactor />
    </>
  );
}

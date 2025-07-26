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
import { FaRegStar, FaStar } from "react-icons/fa";
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
        className="h-screen bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: activeMovie
            ? `url(https://image.tmdb.org/t/p/original${activeMovie.backdrop_path})`
            : "none",
        }}
      >
        <div className="container mx-auto h-full flex flex-col md:flex-row md:justify-end justify-center items-center md:items-end p-4 md:p-0">
          {/* النصوص */}
          <div className="bg-black/35 text-white rounded-md p-6 md:w-1/2 w-full mb-6 md:mb-0">
            {activeMovie ? (
              <>
                <h2 className="text-3xl font-bold">
                  {activeMovie.original_title}
                </h2>
                <p className="mt-2">
                  {activeMovie.overview?.split(" ").slice(0, 10).join(" ")}
                </p>
                <div className="flex justify-between flex-wrap gap-y-2 my-2">
                  <p className="flex text-yellow-400 text-lg">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        {i < Math.round(activeMovie.vote_average / 2) ? (
                          <FaStar />
                        ) : (
                          <FaRegStar />
                        )}
                      </span>
                    ))}
                  </p>
                  <p>Vote Count : {activeMovie.vote_count}</p>
                </div>
                <p>
                  Original Language :{" "}
                  <span className="text-blue-300 text-xl">
                    {activeMovie.original_language}
                  </span>
                </p>
                <Link
                  to={`/movie/${activeMovie.id}`}
                  className="inline-block mt-4 px-4 py-2 border rounded-md"
                >
                  More Info
                </Link>
              </>
            ) : (
              <h2>Loading movie...</h2>
            )}
          </div>

          {/* السلايدر */}
          <div className="md:w-1/2 w-1/2 h-[250px] md:h-[400px] ml-0 md:ml-16">
            <HomeSlider movies={allMovies} setActiveMovie={setActiveMovie} />
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto">
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
      </div>
    </>
  );
}

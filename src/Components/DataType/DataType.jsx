import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../../lib/moviesSlice";
import { Link } from "react-router-dom";

export default function DataType({ type }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movies[type] || []);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAllMovies({ type, page }));
  }, [dispatch, type, page]);
  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
  };
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <>
      <div className="flex flex-wrap justify-center items-center  my-5">
        {data.results?.map((item) => {
          if (!item.backdrop_path) return null;
          return (
            <Link
              to={`/${type}/${item.id}`}
              className=" md:w-1/4 w-full p-2"
              key={item.id}
            >
              <div>
                <img
                  loading="lazy"
                  src={`https://image.tmdb.org/t/p/w780/${item.backdrop_path}`}
                />
              </div>
            </Link>
          );
        })}
        <Pagination
          pageCount={data.total_pages}
          currentPage={page - 1}
          onPageChange={(e) => handlePageChange(e.selected + 1)}
        />
      </div>
    </>
  );
}

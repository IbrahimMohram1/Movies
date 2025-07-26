import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharactor } from "../../lib/charactorSlice";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";

export default function AllCharactor() {
  let dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAllCharactor({ page }));
  }, [dispatch, page]);
  let { Charactor } = useSelector((state) => state.charactor);
  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
  };
  return (
    <>
      <div className="flex justify-center items-center flex-wrap">
        {Charactor?.results?.map((item) => {
          if (!item.profile_path) return null;

          return (
            <Link
              to={`/person/${item.id}`}
              className=" md:w-1/4 w-full p-2"
              key={item.id}
            >
              <img
                className=""
                src={`https://image.tmdb.org/t/p/w780/${item.profile_path}`}
                alt={item.name}
              />
            </Link>
          );
        })}
      </div>
      <Pagination
        pageCount={Charactor.total_pages}
        currentPage={page - 1}
        onPageChange={(e) => handlePageChange(e.selected + 1)}
      />
    </>
  );
}

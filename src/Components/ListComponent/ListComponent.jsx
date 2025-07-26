import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../lib/listSlice";
import { getMoviesByGenre } from "../../lib/moviesByListSlice";

export default function ListComponent({ type }) {
  let dispatch = useDispatch();
  const [SelctedId, setSelctedId] = useState({ movie: null, tv: null });

  let List = useSelector((state) => state.list[type] || []);
  useEffect(() => {
    dispatch(getList(type));
  }, [dispatch, type]);

  useEffect(() => {
    if (List.length > 0 && !SelctedId[type]) {
      setSelctedId((prev) => ({
        ...prev,
        [type]: List[0].id,
      }));
    }
  }, [List, SelctedId, type]);

  const changeIdGenres = (id) => {
    getMoviesByGenre(id);
    setSelctedId((prev) => ({
      ...prev,
      [type]: id,
    }));
    dispatch(getMoviesByGenre({ genreId: id, type }));
  };

  return (
    <>
      <div className="flex flex-wrap gap-4  items-center justify-center my-11">
        {List.map((item) => {
          const isActive = item.id === SelctedId[type];

          return (
            <h2
              id={item.id}
              onClick={() => changeIdGenres(item.id)}
              key={item.id}
              className={`text-xs font-bold py-3 px-5 border border-fuchsia-400 rounded-lg transition-colors duration-400
             hover:bg-fuchsia-400 hover:text-white cursor-pointer ${
               isActive
                 ? "bg-fuchsia-400 text-white border-fuchsia-400"
                 : "border-fuchsia-400 hover:bg-fuchsia-400 hover:text-white"
             }`}
            >
              {item.name}
            </h2>
          );
        })}
      </div>
    </>
  );
}

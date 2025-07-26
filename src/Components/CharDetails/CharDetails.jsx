import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharactorDetails } from "../../lib/charactorDetailsSlice";
import { Link, useParams } from "react-router-dom";

export default function CharDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { details, credits } = useSelector(
    (state) => state.chardetails.Charactor,
  );
  useEffect(() => {
    console.log(credits);

    dispatch(getCharactorDetails(id));
  }, [dispatch, id]);

  if (!details) return <p>Loading character details...</p>;

  return (
    <>
      <div className="flex flex-wrap justify-center items-center h-[500px] mt-2">
        <div className="md:w-1/2 w-full h-full  ">
          <img
            className="h-full w-full object-contain"
            src={`https://image.tmdb.org/t/p/w780/${details.profile_path}`}
          />
        </div>
        <div className="md:w-1/2 w-full h-full  ">
          <h1 className="text-3xl font-bold ">{details.name}</h1>
          <p>{details.biography}</p>
          <p>birthDay : {details.birthday}</p>
          <p>Place of birth : {details.place_of_birth}</p>
          <p>popularity : {details.popularity}</p>
        </div>
      </div>
      <h2 className="text-3xl p-5 ">
        {details.gender === 2 ? "His movies" : "Her movies"}
      </h2>
      <div className="flex flex-wrap justify-center items-center ">
        {credits.cast.map((item) => {
          if (!item.backdrop_path) return null; // لو الصورة مش موجودة ما تعرضش حاجة
          return (
            <div key={item.id} className="w-1/4 p-2">
              <Link to={`/${item.media_type}/${item.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w780/${item.backdrop_path}`}
                  alt={item.name}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

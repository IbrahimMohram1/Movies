import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharactorDetails } from "../../lib/charactorDetailsSlice";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function CharDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { details, credits } = useSelector(
    (state) => state.chardetails.Charactor,
  );
  const isLoading = useSelector((state) => state.chardetails.isLoading);

  useEffect(() => {
    dispatch(getCharactorDetails(id));
  }, [dispatch, id]);

  return (
    <>
      {isLoading ? (
        <Loading size="screen" />
      ) : (
        <div className="container max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-center  mt-2">
            <div className="md:w-1/2 w-full  h-[500px]  ">
              <img
                className="h-full w-full object-contain"
                src={`https://image.tmdb.org/t/p/w780/${details?.profile_path}`}
              />
            </div>
            <div className="md:w-1/2 w-full h-full  ">
              <h1 className="text-3xl font-bold text-fuchsia-400 my-3 ">
                {details?.name}
              </h1>
              <p>{details?.biography}</p>
              <div className="flex flex-col gap-y-3">
                <p className="mt-3">
                  {" "}
                  <span className="text-xl text-fuchsia-300 font-bold mr-2 ">
                    birthDay :
                  </span>{" "}
                  {details?.birthday}
                </p>
                <p>
                  {" "}
                  <span className="text-xl text-fuchsia-300 font-bold mr-2 ">
                    Place of birth :
                  </span>{" "}
                  {details?.place_of_birth}
                </p>
                <p>
                  {" "}
                  <span className="text-xl text-fuchsia-300 font-bold mr-2 ">
                    popularity :{" "}
                  </span>
                  {details?.popularity}
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-3xl p-5 text-fuchsia-300">
            {details?.gender === 2 ? "His movies" : "Her movies"}
          </h2>
          <div className="flex flex-wrap justify-center items-center ">
            {credits?.cast?.map((item) => {
              if (!item.backdrop_path) return null; // لو الصورة مش موجودة ما تعرضش حاجة
              return (
                <div key={item.id} className="md:w-1/4  w-full p-2">
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
        </div>
      )}
    </>
  );
}

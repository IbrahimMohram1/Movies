import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../lib/details.slice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function DetailsData({ type, id }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.details[type]);
  const details = data?.details;
  const cast = data?.cast;
  const crew = data?.crew;
  const similar = data?.similar || [];
  const isLoading = data?.isLoading;

  useEffect(() => {
    dispatch(getDetails({ type, id }));
    console.log(data);
  }, [dispatch, id]);

  return (
    <>
      {isLoading ? (
        <Loading size="screen" />
      ) : details ? (
        <>
          <div
            key={details.id}
            className="h-screen object-cover bg-cover bg-center"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${details.backdrop_path})`,
            }}
          ></div>

          <div className="container max-w-7xl mx-auto">
            <div className="flex flex-wrap flex-col justify-start items-start p-5 w-[80%] gap-y-3">
              <h2 className="text-2xl text-fuchsia-300">
                {details.name || details.original_title}
              </h2>
              <p>{details.overview}</p>
              <p className="text-3xl">Genres</p>

              <div className="flex flex-wrap gap-4 items-center justify-center my-2">
                {details.genres?.length > 0 &&
                  details.genres.map((genre) => (
                    <p
                      key={genre.id}
                      className="text-xs py-2 px-6 border border-fuchsia-400 rounded-lg bg-fuchsia-400 text-white"
                    >
                      {genre.name}
                    </p>
                  ))}
              </div>
            </div>

            <div className="p-5">
              <h2 className="text-3xl">Casts</h2>
              <Swiper
                spaceBetween={30}
                slidesPerView={2}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 4 },
                  1024: { slidesPerView: 7 },
                }}
                modules={[Autoplay]}
              >
                {cast.map((item) => {
                  if (!item.profile_path) return null;

                  return (
                    <SwiperSlide className="mb-12" key={item.id}>
                      <img
                        className="w-[180px] h-[150px] rounded-full object-cover"
                        loading="lazy"
                        src={`https://image.tmdb.org/t/p/w780/${item.profile_path}`}
                        alt={item.name}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            <div className="p-5">
              <h2 className="text-3xl">Crew</h2>
              <Swiper
                spaceBetween={30}
                slidesPerView={2}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 4 },
                  1024: { slidesPerView: 7 },
                }}
                modules={[Autoplay]}
              >
                {crew.map((item) => {
                  if (!item.profile_path) return null;

                  return (
                    <SwiperSlide className="mb-12" key={item.id}>
                      <img
                        loading="lazy"
                        className="w-[180px] h-[150px] rounded-full object-cover"
                        src={`https://image.tmdb.org/t/p/w780/${item.profile_path}`}
                        alt={item.name}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            <h2 className="text-3xl p-5">{`Similar ${type}`}</h2>

            <div className="flex justify-center items-center flex-wrap">
              {similar?.map((item) => {
                if (!item.backdrop_path) return null;

                return (
                  <Link
                    to={`/${type}/${item.id}`}
                    className="md:w-1/4 w-full p-2"
                    key={item.id}
                  >
                    <div>
                      <img
                        loading="lazy"
                        src={`https://image.tmdb.org/t/p/w780/${item.backdrop_path}`}
                        alt={item.title || item.name}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

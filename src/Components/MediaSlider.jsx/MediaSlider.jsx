import React from "react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function MediaSlider({ type, data = [] }) {
  return (
    <>
      <Swiper
        className="px-5"
        spaceBetween={20}
        slidesPerView={7}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {data?.map((item) => {
          if (!item.poster_path) return null;
          return (
            <SwiperSlide key={item.id}>
              <Link to={`/${type}/${item.id}`}>
                <img
                  className="h-full  object-cover rounded-xl"
                  src={`https://image.tmdb.org/t/p/w780/${item.poster_path}`}
                  alt={item.original_title}
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

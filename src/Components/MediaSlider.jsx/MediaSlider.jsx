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
        slidesPerView={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 7,
          },
        }}
        modules={[Autoplay]}
      >
        {data?.map((item) => {
          if (!item.poster_path) return null;
          return (
            <SwiperSlide key={item.id}>
              <Link to={`/${type}/${item.id}`}>
                <img
                  className="md:h-full  h-[300px] object-cover rounded-xl"
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

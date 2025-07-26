import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { getAllMovies } from "../../lib/moviesSlice";
import {
  EffectCards,
  EffectCoverflow,
  EffectCreative,
  Thumbs,
  Autoplay,
} from "swiper/modules";

import styles from "./HomeSlider.module.css";
export default function HomeSlider({ movies, setActiveMovie }) {
  return (
    <div className={styles.homeSlider}>
      <Swiper
        className="h-full"
        spaceBetween={15}
        slidesPerView={3}
        effect={"coverflow"}
        modules={[EffectCoverflow, Autoplay]}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => {
          const currentIndex = swiper.activeIndex;
          setActiveMovie(movies[currentIndex]);
        }}
      >
        {movies?.map((movie) => (
          <SwiperSlide key={movie.id} className="w-full">
            <img
              className="h-full  object-cover rounded-xl"
              src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
              alt={movie.original_title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

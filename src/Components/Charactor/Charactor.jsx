import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharactor } from "../../lib/charactorSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

export default function Charactor() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCharactor());
  }, [dispatch]);
  let { Charactor } = useSelector((state) => state.charactor);

  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={7}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {Charactor.map((item) => {
          if (!item.profile_path) return null;

          return (
            <SwiperSlide className="mb-12" key={item.id}>
              <Link to={`person/${item.id}`}>
                <img
                  className="w-[180px] h-[180px] rounded-full object-cover"
                  src={`https://image.tmdb.org/t/p/w780/${item.profile_path}`}
                  alt={item.name}
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

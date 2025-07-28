import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharactor } from "../../lib/charactorSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function Charactor() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCharactor({ page: 1 }));
  }, [dispatch]);
  let { Charactor, isLoading } = useSelector((state) => state.charactor);
  const [ShowLoading, setShowLoading] = useState(true);
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <>
      <Swiper
        spaceBetween={30}
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
        {ShowLoading ? (
          <Loading />
        ) : (
          Charactor?.results?.map((item) => {
            if (!item.profile_path) return null;

            return (
              <div key={item.id} className="flex justify-center items-center">
                <SwiperSlide className="mb-12">
                  <Link to={`/person/${item.id}`}>
                    <img
                      className="w-[180px] h-[180px] rounded-full object-cover"
                      src={`https://image.tmdb.org/t/p/w780/${item.profile_path}`}
                      alt={item.name}
                    />
                  </Link>
                </SwiperSlide>
              </div>
            );
          })
        )}
      </Swiper>
    </>
  );
}

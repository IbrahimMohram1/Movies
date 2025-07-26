import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopRated } from "../../lib/topRatedSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import MediaSlider from "../MediaSlider.jsx/MediaSlider";

export default function TopRated({ type }) {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopRated());
  }, [dispatch]);
  let { topRated } = useSelector((state) => state.topRated);

  return (
    <>
      <MediaSlider type={type} data={topRated} />
    </>
  );
}

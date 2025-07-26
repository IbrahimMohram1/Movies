import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../../lib/moviesSlice";
import DataType from "../DataType/DataType";
import Pagination from "../Pagination/Pagination";
const type = "movie"; // أو "tv" لو عايز تجرب المسلسلات

export default function Movies() {
  return (
    <>
      <DataType type="movie" />
    </>
  );
}

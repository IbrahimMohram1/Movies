import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../../lib/moviesSlice";
import DataType from "../DataType/DataType";

export default function Movies() {
  return (
    <>
      <DataType type="tv" />
    </>
  );
}

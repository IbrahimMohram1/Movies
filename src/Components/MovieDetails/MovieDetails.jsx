import React from "react";
import DetailsData from "../DetailsData/DetailsData";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();

  return (
    <>
      <DetailsData type="movie" id={id} />
    </>
  );
}

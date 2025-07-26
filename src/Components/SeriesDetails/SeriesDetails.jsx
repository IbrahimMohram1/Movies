import React from "react";
import { useParams } from "react-router-dom";
import DetailsData from "../DetailsData/DetailsData";

export default function SeriesDetails() {
  const { id } = useParams();

  return (
    <>
      <DetailsData type="tv" id={id} />
    </>
  );
}

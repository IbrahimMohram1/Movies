import React from "react";
import { ClimbingBoxLoader, HashLoader } from "react-spinners";

export default function Loading({ size }) {
  return (
    <>
      <div className={`flex justify-center items-center h-${size} `}>
        <HashLoader size={50} color="#ed6bff" />
      </div>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Title({ title, link }) {
  return (
    <>
      <div className=" flex justify-between items-center px-8 my-12">
        <h2 className="text-3xl font-bold">{title}</h2>
        <Link to={link}>
          See More <span className=" ">➔</span>{" "}
        </Link>
      </div>
    </>
  );
}

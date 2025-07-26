import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "../../assets/2142357.jpg";

export default function NotFoundPage() {
  return (
    <>
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center items-center min-h-screen gap-y-3">
          <div className=" text-center md:w-1/2 w-full ">
            <img src={NotFoundImage} alt="" srcset="" />
          </div>
          <div className=" text-center md:w-1/2 w-full ">
            <h2>Not Found Page Please Back to Home</h2>
            <Link to={"/"} className="w-fit inline-block my-3">
              <li className="px-5 py-3 border border-fuchsia-400 text-white w-fit inline-block">
                {" "}
                Home{" "}
              </li>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

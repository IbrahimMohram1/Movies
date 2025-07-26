import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ pageCount, currentPage, onPageChange }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 576); // Bootstrap's sm breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <>
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={pageCount}
        forcePage={currentPage}
        marginPagesDisplayed={isMobile ? 1 : 2}
        pageRangeDisplayed={isMobile ? 2 : 5}
        onPageChange={onPageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </>
  );
}

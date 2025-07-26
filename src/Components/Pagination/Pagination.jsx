import React, { useState } from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ pageCount, currentPage, onPageChange }) {
  return (
    <>
      <div>
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          pageCount={pageCount}
          forcePage={currentPage}
          marginPagesDisplayed={2}
          pageRangeDisplayed={7}
          onPageChange={onPageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
        />
      </div>
    </>
  );
}

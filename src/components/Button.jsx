import React from "react";

export default function Button({
  darkMode,
  nextPage,
  prevPage,
  pageNumber,
  totalResults,
  pageSize,
}) {
  return (
    <div className="d-flex justify-content-between my-3">
      <button
        type="button"
        className={`btn btn-${darkMode ? "light" : "dark"}`}
        onClick={prevPage}
        disabled={pageNumber <= 1}
      >
        Prev
      </button>

      <button
        type="button"
        className={`btn btn-${darkMode ? "light" : "dark"}`}
        onClick={nextPage}
        disabled={pageNumber + 1 > Math.ceil(totalResults / pageSize)}
      >
        Next &raquo;
      </button>
    </div>
  );
}

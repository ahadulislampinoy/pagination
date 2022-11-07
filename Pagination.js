import React from "react";

const Pagination = ({ memePerPage, totalMemes, handlePaginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalMemes / memePerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="text-center mt-12 mb-6">
      <nav
        aria-label="Pagination"
        className="inline-flex -space-x-px rounded-md shadow-sm bg-gray-100 text-gray-800"
      >
        {pageNumber.map((number) => (
          <button
            onClick={() => handlePaginate(number)}
            type="button"
            aria-current="page"
            className="inline-flex items-center px-4 py-2 text-sm font-semibold border text-gray-800 bg-gray-200 border-gray-300"
          >
            {number}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Pagination;

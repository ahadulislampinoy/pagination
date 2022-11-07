iimport React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pagination from "./Pagination";

const Home = () => {
  const memes = useLoaderData();
  const [search, setSearch] = useState("");

  // Pagination start
  const [currentPage, setCurrentPage] = useState(1);
  const [memePerPage] = useState(10);

  const indexOfLastMeme = currentPage * memePerPage;
  const indexOfFirstMeme = indexOfLastMeme - memePerPage;
  const currentMemes = memes.slice(indexOfFirstMeme, indexOfLastMeme);

  const handlePaginate = (number) => setCurrentPage(number);
  // Pagination end

  return (
    <div>
      <h1 className="text-3xl text-center mt-8 mb-4 font-semibold text-violet-700">
        The Meme World
      </h1>
      <div className="text-center">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          name="search"
          placeholder="Search..."
          className=" w-32 py-3 px-12 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-200 text-gray-800 focus:bg-gray-50"
        />
      </div>
      <div className="grid grid-cols-4 gap-8 p-8">
        {/* Pagination */}
        {currentMemes
          .filter((meme) => {
            if (search === "") {
              return meme;
            } else if (meme.name.toLowerCase().includes(search.toLowerCase())) {
              return meme;
            }
          })
          .map((meme) => (
            <Link
              to="/"
              key={meme._id}
              className="max-w-xs rounded-md shadow-md bg-gray-200 text-gray-800"
            >
              <img
                src={meme.url}
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 p-4 bg-gray-200"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold tracking-wide">
                    {meme.name}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
      </div>
      {/* Pagination start */}
      <Pagination
        memePerPage={memePerPage}
        totalMemes={memes.length}
        handlePaginate={handlePaginate}
      />
      {/* Pagination end */}
    </div>
  );
};

export default Home;

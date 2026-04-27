import React, { useState } from "react";
import { MovieCard } from "./MovieCards";
import Link from "next/link";

const Top = ({ movies }: { movies: any[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const topRatedMovies = movies.filter((movie) => movie.vote_average >= 7);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = topRatedMovies.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Link href="/top-rated">
      <div className="space-y-8">
        <section>
          <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white uppercase tracking-tighter">
            Top Rated
          </h2>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {currentItems.map((movie: any) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>

          <div className="flex items-center justify-end gap-2 mt-12 text-white text-sm">
            \
            <button
              disabled={currentPage === 1}
              onClick={() => paginate(currentPage - 1)}
              className="px-4 py-2 border border-zinc-800 rounded-md hover:bg-zinc-800 disabled:opacity-30"
            >
              &lt; Previous
            </button>
            {[1, 2, 3].map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`w-10 h-10 rounded-md border border-zinc-800 transition-colors ${
                  currentPage === number
                    ? "bg-white text-black font-bold"
                    : "hover:bg-zinc-800"
                }`}
              >
                {number}
              </button>
            ))}
            <span className="px-2">...</span>
            <button
              disabled={indexOfLastItem >= topRatedMovies.length}
              onClick={() => paginate(currentPage + 1)}
              className="px-4 py-2 border border-zinc-800 rounded-md hover:bg-zinc-800 flex items-center gap-2"
            >
              Next &gt;
            </button>
          </div>
        </section>
      </div>
    </Link>
  );
};

export default Top;

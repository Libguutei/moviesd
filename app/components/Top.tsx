import React, { useState } from "react";
import { MovieCard } from "./MovieCards";
import { Movie } from "../types";
import Link from "next/link";
import SeeMore from "./SeeMore";

const Top = ({ movies }: { movies: Movie[] }) => {
  const [currentPage] = useState(1);
  const itemsPerPage = 10;

  const topRatedMovies = movies.filter((movie) => movie.vote_average >= 7);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = topRatedMovies.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="space-y-8">
      <section>
        <div className=" justify-between mb-6">
          <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-black uppercase tracking-tighter">
            Top Rated
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {currentItems.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Top;

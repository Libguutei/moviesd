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
    <div className="space-y-8">
      <section>
        <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white uppercase tracking-tighter">
          Top Rated
        </h2>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {currentItems.map((movie: any) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
          <Link href="/top-rated">
            <div>
              <h1 className="text-center text-white col-span-full mt-4 font-bold justify-self-end hover:underline cursor-pointer">
                See more
              </h1>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Top;

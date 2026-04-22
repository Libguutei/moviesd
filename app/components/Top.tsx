import React from "react";
import { MovieCard } from "./MovieCards";

const Top = ({ movies }: { movies: any[] }) => {
  const topRatedMovies = movies.filter((movie) => {
    return movie.vote_average >= 7;
  });
  return (
    <div>
      <div>
        <section>
          <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white">
            Top Rated
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {topRatedMovies.map((movie: any) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Top;

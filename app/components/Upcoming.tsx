import React from "react";
import { MovieCard } from "./MovieCards";

const Upcoming = ({
  movies,
  handleSeeMore,
}: {
  movies: any[];
  handleSeeMore: () => void;
}) => {
  const upcomingMovies = movies.filter((movie) => {
    const releaseDate = new Date(movie.release_date);
    const today = new Date();
    return releaseDate > today;
  });
  return (
    <div>
      <section>
        <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white">
          Upcoming
        </h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {upcomingMovies.map((movie: any) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}{" "}
          <h1
            onClick={handleSeeMore}
            className="text-center text-white col-span-full mt-4 font-bold justify-self-end hover:underline cursor-pointer"
          >
            See more
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Upcoming;

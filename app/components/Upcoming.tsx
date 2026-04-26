import React from "react";
import { MovieCard } from "./MovieCards";
import SeeMore from "./SeeMore";

const Upcoming = ({ movies }: { movies: any[] }) => {
  const upcomingMovies = movies.filter((movie) => {
    const releaseDate = new Date(movie.release_date);
    const today = new Date();
    return releaseDate > today;
  });
  return (
    <div>
      <section>
         <div className="flex items-center justify-between mb-6"> 
  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
    Upcoming
  </h2>
  <SeeMore />
</div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {upcomingMovies.map((movie: any) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Upcoming;

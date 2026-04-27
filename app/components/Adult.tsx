import React from "react";
import { MovieCard } from "./MovieCards";

const Adult = ({ movies }: { movies: any[] }) => {
  const adultMovies = movies.filter((movie) => {
    return movie.adult === true;
  });
  return (
    <div>
      <div>
        <section>
          <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white">
            Adult Content
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {adultMovies.map((movie: any) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>{" "}
        <h1 className="text-center text-white col-span-full mt-4 font-bold justify-self-end hover:underline cursor-pointer">
          See more{" "}
        </h1>
      </div>
    </div>
  );
};

export default Adult;

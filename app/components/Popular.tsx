import React, { useState } from "react";
import { MovieCard } from "./MovieCards";
import { Movie } from "../types";
import SeeMore from "./SeeMore";

const Popular = ({ movies }: { movies: any[] }) => {
  const popularList = movies.filter((movie) => {
    return movie.popularity > 10;
  });
  return (
    <div>
      <div>
        <section>
        <div className="flex items-center justify-between mb-6"> 
  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
    Popular
  </h2>
  <SeeMore />
</div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {popularList.map((movie: any) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          
          </div>
        </section>
      </div>
    </div>
  );
};

export default Popular;

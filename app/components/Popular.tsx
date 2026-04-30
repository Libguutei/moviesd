"use client";
import React, { useState, useEffect } from "react";
import { MovieCard } from "./MovieCards";
import { Movie } from "../types";
import Link from "next/link";

const Popular = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=024dbea23ede015af364eba879a8b264`,
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results || []));
  }, []);

  return (
    <div>
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-black pb-4">
            Popular
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {movies.slice(0, 10).map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
          <Link href="/popular">
            <h1 className="text-center text-black col-span-full mt-4 font-bold justify-self-end hover:underline cursor-pointer">
              See more
            </h1>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Popular;

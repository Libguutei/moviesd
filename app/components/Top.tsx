"use client";
import React, { useState, useEffect } from "react";
import { MovieCard } from "./MovieCards";
import { Movie } from "../types";
import Link from "next/link";

const Top = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=024dbea23ede015af364eba879a8b264`,
    )
      .then((res) => res.json())
      .then((data) => {
        const sorted = [...data.results].sort(
          (a, b) => b.vote_average - a.vote_average,
        );
        setMovies(sorted);
      });
  }, []);

  return (
    <div className="space-y-8">
      <section>
        <div className="justify-between mb-6">
          <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-black uppercase tracking-tighter">
            Top Rated
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {movies.slice(0, 10).map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
          <div className="w-full justify-end">
            <Link href="/top">
              <h1 className="text-center text-black col-span-full mt-4 font-bold justify-end hover:underline cursor-pointer">
                See more
              </h1>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Top;

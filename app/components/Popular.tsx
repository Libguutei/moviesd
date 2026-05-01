"use client";
import React, { useState, useEffect } from "react";
import { MovieCard } from "./MovieCards";
import { Movie } from "../types";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Popular = ({ showAll = false }: { showAll?: boolean }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=024dbea23ede015af364eba879a8b264&page=${page}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results || []);
        setTotalPages(data.total_pages);
      });
  }, [page]);

  const renderPages = () => {
    let numbers = [];
    for (let i = page - 2; i <= page + 2; i++) {
      if (i >= 1 && i <= totalPages) {
        numbers.push(
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`px-3 py-1 rounded ${
              page === i
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            {i}
          </button>,
        );
      }
    }
    return numbers;
  };

  return (
    <div>
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-black pb-4">
            Popular
          </h2>
          {!showAll && (
            <Link
              href="/popular[type]"
              className="text-sm font-bold text-black hover:underline flex items-center gap-1 pb-4"
            >
              See more →
            </Link>
          )}
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {movies.slice(0, 10).map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {showAll && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setPage((p) => p - 1)}
              disabled={page === 1}
              className="px-3 py-1 rounded bg-gray-200 text-black hover:bg-gray-300 disabled:opacity-40"
            >
              ← Previous
            </button>

            {renderPages()}

            {page + 2 < totalPages && (
              <>
                <span className="text-gray-500">...</span>
                <button
                  onClick={() => setPage(totalPages)}
                  className="px-3 py-1 rounded bg-gray-200 text-black hover:bg-gray-300"
                >
                  {totalPages}
                </button>
              </>
            )}

            <button
              onClick={() => setPage((p) => p + 1)}
              disabled={page === totalPages}
              className="px-3 py-1 rounded bg-gray-200 text-black hover:bg-gray-300 disabled:opacity-40"
            >
              Next →
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Popular;

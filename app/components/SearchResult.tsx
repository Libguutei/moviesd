"use client";
import React from "react";
import Link from "next/link";

const SearchResult = ({
  movies,
  search,
}: {
  movies: any[];
  search: string;
}) => {
  if (!search || !movies || movies.length === 0) return null;

  return (
    <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-2xl overflow-hidden z-[9999] min-w-[300px]">
      <div className="max-h-[450px] overflow-y-auto">
        {movies.slice(movies).map((movie: any) => (
          <Link
            key={movie.id}
            href={`/product/${movie.id}`}
            className="flex items-center gap-3 p-3 hover:bg-indigo-50 border-b border-gray-100 last:border-0 transition-colors"
          >
            <div className="w-10 h-14 flex-shrink-0 bg-gray-200 rounded">
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-full object-cover rounded"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-400">
                  No Pic
                </div>
              )}
            </div>
            <div className="flex flex-col overflow-hidden text-left">
              <span className="text-sm font-bold text-black truncate">
                {movie.title}
              </span>
              <span className="text-xs text-gray-500">
                {movie.release_date?.split("-")[0] || "N/A"}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;

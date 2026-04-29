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
        {movies.slice(0, 7).map((movie: any) => (
          <Link
            key={movie.id}
            href={`/product/${movie.id}`}
            className="flex items-center gap-3 p-3 hover:bg-indigo-50 border-b border-gray-100 last:border-0 transition-colors"
          >
            <div className="w-10 h-14 flex-shrink-0 bg-gray-200 rounded overflow-hidden">
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-400">
                  No Pic
                </div>
              )}
            </div>
            <div className="flex-1 flex  justify-between">
              <div className="flex flex-col overflow-hidden text-left">
                <span className="text-sm font-bold text-black truncate">
                  {movie.title}
                </span>
                <div className="flex items-center gap-1 text-sm text-yellow-500 font-bold">
                  <span>★</span>
                  <span>{movie.vote_average?.toFixed(1)}</span>
                </div>
                <span className="text-xs text-gray-500">
                  {movie.release_date?.split("-")[0] || "N/A"}
                </span>
              </div>
              <p className="text-black hover:text-gray-500 text-sm font-medium content-end mt-1">
                See More
              </p>
            </div>
          </Link>
        ))}
      </div>{" "}
      <div className="p-3 text-center bg-gray-100 hover:bg-gray-100 transition-colors hover:text-gray-500">
        <p>See all result for {search} </p>
      </div>
    </div>
  );
};

export default SearchResult;

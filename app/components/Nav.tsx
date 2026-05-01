"use client";
import React, { useState, useEffect } from "react";
import SearchResult from "./SearchResult";
import Link from "next/link";
import SearchBar from "./SearchBar";

interface NavProps {
  onGenreToggle?: () => void;
  search?: string;
  setSearch?: (val: string) => void;
  movies?: any[];
}

const Nav = ({
  onGenreToggle,
  search: propSearch,
  setSearch: propSetSearch,
  movies: propMovies,
}: NavProps) => {
  const [localSearch, setLocalSearch] = useState("");
  const [localMovies, setLocalMovies] = useState<any[]>([]);

  const isControlled = propSearch !== undefined;
  const currentSearch = isControlled ? propSearch : localSearch;
  const currentMovies = isControlled ? propMovies || [] : localMovies;

  const handleSearchChange = (val: string) => {
    if (isControlled && propSetSearch) {
      propSetSearch(val);
    } else {
      setLocalSearch(val);
    }
  };

  useEffect(() => {
    if (isControlled) return;

    const fetchMovies = async () => {
      if (localSearch.length > 1) {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=024dbea23ede015af364eba879a8b264&query=${localSearch}`,
        );
        const data = await res.json();
        setLocalMovies(data.results || []);
      } else {
        setLocalMovies([]);
      }
    };

    const delay = setTimeout(fetchMovies, 300);
    return () => clearTimeout(delay);
  }, [localSearch, isControlled]);

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200 shadow-sm relative z-[50]">
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M5.83268 1.6665V18.3332M14.166 1.6665V18.3332M1.66602 9.99984H18.3327M1.66602 5.83317H5.83268M1.66602 14.1665H5.83268M14.166 14.1665H18.3327M14.166 5.83317H18.3327M3.48268 1.6665H16.516C17.5193 1.6665 18.3327 2.47985 18.3327 3.48317V16.5165C18.3327 17.5198 17.5193 18.3332 16.516 18.3332H3.48268C2.47936 18.3332 1.66602 17.5198 1.66602 16.5165V3.48317C1.66602 2.47985 2.47936 1.6665 3.48268 1.6665Z"
            stroke="#4338CA"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <Link href="/" className="font-bold text-indigo-600  italic text-xs">
          MOVIE Z
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() =>
            onGenreToggle ? onGenreToggle() : (window.location.href = "/")
          }
          className="px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm font-medium text-black flex items-center gap-2 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="#18181B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Genre
        </button>
        <div className="relative w-[380px]">
          {" "}
          <SearchBar movies={currentMovies} search={currentSearch} />
        </div>
      </div>
      <div className="w-10 h-10  rounded-lg items-center flex justify-center border-gray-200 border-1 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M8 2C7.20435 2.79565 6.75736 3.87478 6.75736 5C6.75736 6.12522 7.20435 7.20435 8 8C8.79565 8.79565 9.87478 9.24264 11 9.24264C12.1252 9.24264 13.2044 8.79565 14 8C14 9.18669 13.6481 10.3467 12.9888 11.3334C12.3295 12.3201 11.3925 13.0892 10.2961 13.5433C9.19975 13.9974 7.99335 14.1162 6.82946 13.8847C5.66558 13.6532 4.59648 13.0818 3.75736 12.2426C2.91825 11.4035 2.3468 10.3344 2.11529 9.17054C1.88378 8.00666 2.0026 6.80026 2.45673 5.7039C2.91085 4.60754 3.67989 3.67047 4.66658 3.01118C5.65328 2.35189 6.81331 2 8 2Z"
            stroke="#18181B"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Nav;

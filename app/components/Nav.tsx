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
        <Link href="/" className="font-bold text-indigo-600 text-xl">
          MOVIE Z
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() =>
            onGenreToggle ? onGenreToggle() : (window.location.href = "/")
          }
          className="px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm font-medium text-black"
        >
          Genre
        </button>
        <div className="relative w-[380px]">
          {" "}
          <SearchBar movies={currentMovies} search={currentSearch} />
        </div>
      </div>
      <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
    </nav>
  );
};

export default Nav;

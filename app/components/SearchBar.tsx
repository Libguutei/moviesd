"use client";
import { useState, useRef, useEffect } from "react";
import SearchResult from "./SearchResult";

function useMovieSearch(query: string) {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query || query.trim().length < 2) {
      setMovies([]);
      return;
    }
    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=024dbea23ede015af364eba879a8b264&query=${encodeURIComponent(query)}`,
        );
        const data = await res.json();
        setMovies(data.results || []);
      } catch {
        setMovies([]);
      } finally {
        setLoading(false);
      }
    }, 400);
    return () => clearTimeout(timer);
  }, [query]);

  return { movies, loading };
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const { movies, loading } = useMovieSearch(query);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative w-full ">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        placeholder="Searching..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
      />
      {loading && (
        <span className="absolute right-3 top-2.5 text-sm text-gray-400">
          Searching...
        </span>
      )}
      {open && <SearchResult movies={movies} search={query} />}
    </div>
  );
}

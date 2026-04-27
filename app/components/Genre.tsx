/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const Genre = ({ className = "" }) => {
  const [genres, setGenres] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=024dbea23ede015af364eba879a8b264`,
      )
      .then((res) => setGenres(res.data.genres))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={`w-144.25 py-2 h-100 rounded-2xl ${className}`}>
      <div className="p-5">
        <h1 className="text-black text-2xl font-bold mb-2">Genres</h1>
        <p className="mb-5 text-gray-600">See lists of movies by genre</p>

        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-3 gap-2 overflow-scroll">
          {genres.map((genre) => (
            <span
              key={genre.id}
              className="flex items-center justify-center px-1 py-1 bg-white-800 text-black rounded-xl text-sm font-medium hover:bg-white hover:text-black transition-all cursor-pointer border border-gray-300 text-center"
            >
              {genre.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Genre;

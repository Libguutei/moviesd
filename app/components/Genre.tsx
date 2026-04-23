"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const Genre = () => {
  const [genres, setGenres] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=024dbea23ede015af364eba879a8b264`,
      )
      .then((res) => {
        setGenres(res.data.genres);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="w-[577px] h-10 flex grid-cols-6 grid-rows-5 items-center gap-4 overflow-x-auto px-6 py-2">
      <h1 className="text-white"> Genre</h1>
      {genres.map((genre) => (
        <span
          key={genre.id}
          className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm grid-cols-6 grid-rows-5"
        >
          {genre.name}
        </span>
      ))}
    </div>
  );
};

export default Genre;

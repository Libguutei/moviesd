import { useState } from "react";
import { MovieCard } from "./MovieCards";

export default function Herosection({ movie }: { movie: any[] }) {
  const [index, setIndex] = useState(0);
  if (!movie) return null;
  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  return (
    <div
      className="w-full h-[600px]
     rounded-lg overflow-hidden relative"
    >
      <img
        src={backdropUrl}
        alt={movie.title}
        className="h-full w-full object-cover"
      />
      <div className="absolute bottom-10 left-10 max-w-2xl text-white">
        <p className="font-[16px]">Now Playing</p>
        <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
        <div className="flex items-center gap-2 pb-4 text-sm text-yellow-500 font-bold">
          <span>★</span>
          <span>{movie.vote_average?.toFixed(1)}</span>
        </div>
        <p> {movie.overview} </p>
        <button className="mt-8 rounded-lg bg-white px-8 py-3 font-bold text-black transition-transform hover:scale-105 active:scale-95">
          ▶ Watch Trailer
        </button>
      </div>
    </div>
  );
}

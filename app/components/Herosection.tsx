/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import axios from "axios";

const API_KEY = "024dbea23ede015af364eba879a8b264"; //tmdb API key
const BASE_URL = "https://api.themoviedb.org/3";

export default function Herosection({ movies }: { movies: any[] }) {
  //states
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [videoKey, setVideoKey] = useState<string | null>(null); // yt trailer key

  // if data is not avaible return null pzda
  if (!movies || movies.length === 0) return null;

  // its obvius
  const currentMovie = movies[index];

  // backdrop path
  const backdropUrl = currentMovie?.backdrop_path
    ? `https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`
    : "";

  const nextSlide = () => setIndex((prev) => (prev + 1) % movies.length);

  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + movies.length) % movies.length);

  const handleWatchTrailer = () => {
    axios
      .get(`${BASE_URL}/movie/${currentMovie.id}/videos`, {
        params: { api_key: API_KEY },
      })
      .then((res) => {
        // Trailer
        const trailer = res.data.results.find(
          (v: any) => v.type === "Trailer" && v.site === "YouTube",
        );
        if (trailer) {
          setVideoKey(trailer.key);
          setIsOpen(true);
        } else {
          alert("We dont have a trailer for this bitch ass movie");
        }
      })
      .catch(() => console.error("Failed to fetch trailer"));
  };

  return (
    <div className="relative w-full h-150 overflow-hidden rounded-xl bg-black">
      {/* BG  */}
      <img
        src={backdropUrl}
        alt={currentMovie?.title}
        className="w-full h-full object-cover opacity-60 transition-all duration-500"
      />

      <div className="absolute inset-0 flex flex-col justify-end p-10 bg-linear-to-t from-black/80 to-transparent">
        <h1 className="text-4xl font-bold text-white mb-2">
          {currentMovie?.title}
        </h1>
        <p className="text-yellow-400 font-bold mb-4">
          ★ {currentMovie?.vote_average?.toFixed(1)}
        </p>
        <p className="text-gray-200 max-w-xl line-clamp-3 mb-6">
          {currentMovie?.overview}
        </p>

        <button
          onClick={handleWatchTrailer}
          className="w-fit px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition"
        >
          ▶ Watch Trailer
        </button>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl p-2"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl p-2"
      >
        ❯
      </button>

      {isOpen && videoKey && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-10 right-0 text-white font-bold"
            >
              Close ✕
            </button>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
              allow="autoplay"
              allowFullScreen
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}

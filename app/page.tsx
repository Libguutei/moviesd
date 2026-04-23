"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { MovieCard } from "./components/MovieCards";
import Herosection from "./components/Herosection";
import Upcoming from "./components/Upcoming";
import Popular from "./components/Popular";
import Top from "./components/Top";
import Nav from "./components/Nav";
import Genre from "./components/Genre";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=024dbea23ede015af364eba879a8b264`,
      )
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <div className="p-20 text-center font-bold">bitching...</div>;

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Genre
        genreIds={
          movies.slice(0, 20).flatMap((movie: any) => movie.genre_ids) || []
        }
      />
      <Nav />
      <main className="mx-auto max-w-6xl px-6 py-4 space-y-10">
        <Herosection movie={movies[0]} />
        <div>
          <Upcoming movies={movies.slice(0, 20)} />{" "}
        </div>
        <div>
          <Popular movies={movies.slice(0, 20)} />
        </div>
        <div>
          <Top movies={movies.slice(0, 20)} />
        </div>
      </main>
    </div>
  );
}

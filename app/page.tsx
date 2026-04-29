"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Herosection from "./components/Herosection";
import Upcoming from "./components/Upcoming";
import Popular from "./components/Popular";
import Top from "./components/Top";
import Nav from "./components/Nav";
import Genre from "./components/Genre";
import Adult from "./components/Adult";
import Footer from "./components/Footer";

export default function Home() {
  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(10);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const API_KEY = "024dbea23ede015af364eba879a8b264";
    const BASE_URL = "https://api.themoviedb.org/3";

    const fetchAllMovies = async () => {
      try {
        const [trending, popular, upcoming, topRated] = await Promise.all([
          axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`),
          axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`),
          axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`),
          axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`),
        ]);

        const combined = [
          ...trending.data.results,
          ...popular.data.results,
          ...upcoming.data.results,
          ...topRated.data.results,
        ];

        const uniqueMovies = combined.filter(
          (movie, index, self) =>
            index === self.findIndex((m) => m.id === movie.id),
        );

        setMovies(uniqueMovies);
        setLoading(false);
      } catch (err) {
        console.error("API Error:", err);
        setLoading(false);
      }
    };

    fetchAllMovies();
  }, []);

  if (loading)
    return <div className="p-20 text-center font-bold">bitching...</div>;

  return (
    <div className="min-h-screen bg-white">
      <Nav
        onGenreToggle={() => setIsGenreOpen(!isGenreOpen)}
        search={search}
        setSearch={setSearch}
        movies={movies}
      />
      <main className="mx-auto max-w-1xl px-6 py-4 space-y-10">
        {isGenreOpen && (
          <div className="absolute top-0 left-0 z-50 justify-center">
            <Genre className="absolute z-1 left-82 top-14 bg-gray-100 display-none" />
          </div>
        )}

        <Herosection movies={movies.slice(0, 5)} />

        <div>
          <Adult movies={movies} />
          <Upcoming movies={movies} />
        </div>

        <div>
          <Popular movies={movies.slice(0, 10)} />
        </div>

        <div>
          <Top movies={movies.slice(0, 30)} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

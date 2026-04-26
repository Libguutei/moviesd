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
import Adult from "./components/Adult";
import { skip } from "node:test";
import { get } from "https";

export default function Home() {
  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
 const [ search , setSearch ] = useState("");
 const [searchResults, setSearchResults] = useState([]);

 useEffect(() => {

  if (movies.length === 0) setLoading(true); 

  if (search.trim() === "") {
    axios
      .get(`https://api.themoviedb.org/3/trending/movie/week?api_key=024dbea23ede015af364eba879a8b264`)
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      });
  } else {
    axios
      .get(`https://api.themoviedb.org/3/search/movie`, {
        params: { api_key: "024dbea23ede015af364eba879a8b264", query: search }
      })
      .then((res) => {
        setMovies(res.data.results);
      
      });
  }
}, [search]);
  if (loading)
    return <div className="p-20 text-center font-bold">bitching...</div>;

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* <Genre
        genreIds={
          movies.slice(0, 20).flatMap((movie: any) => movie.genre_ids) || []
        }
      /> */}
    <Nav 
    onGenreToggle={() => setIsGenreOpen(!isGenreOpen)} 
    search={search}        
    setSearch={setSearch} 
    movies={movies}        
  />
   <main className="mx-auto max-w-7xl px-6 py-4 space-y-10"> 
  
  {isGenreOpen && (
    <div className="relative z-50"> 
       <Genre className="absolute top-0 left-94 bg-white shadow-xl rounded-lg p-4" />
    </div>
  )}

  <Herosection movies={movies.slice(0, 10)} />

  <div className="space-y-10">
    <Adult movies={movies.slice(0, 10)} />
    <Upcoming movies={movies.slice(0,10)} />
    <Popular movies={movies.slice(0, 10)} />
    <Top movies={movies.slice(0, 10)} />
  </div>
</main>
    </div>
  );
}

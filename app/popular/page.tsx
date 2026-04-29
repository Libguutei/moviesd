"use client";
import React, { useEffect, useState } from "react";
import Popular from "../components/Popular";
import Link from "next/link";
import { Movie } from "../types";
import axios from "axios";
import Nav from "../components/Nav";

export default function PopularPage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const renderPages = () => {
    let numbers = [];

    for (let i = page - 2; i <= page + 2; i++) {
      if (i >= 1 && i <= totalPages) {
        numbers.push(
          <button
            key={i}
            onClick={() => setPage(i)}
            className={page === i ? "active-style" : "normal-style"}
          >
            {i}
          </button>,
        );
      }
    }
    return numbers;
  };
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=024dbea23ede015af364eba879a8b264&page=" +
          page,
      )
      .then((res) => {
        setMovies(res.data.results);
        setTotalPages(res.data.total_pages);
      })
      .catch((err) => console.log(err));
  }, [page]);
  return (
    <Link href="/">
      <div>
        <Nav />
      </div>
      <div className="pt-[91px]">
        <Popular movies={movies.slice(0, 10)} />
        <div className="flex gap-2">
          <button onClick={() => setPage((p) => p - 1)} disabled={page === 1}>
            Prev
          </button>

          {renderPages()}

          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </Link>
  );
}

import Nav from "@/app/components/Nav";
import React from "react";

export default async function MovieDetail({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=024dbea23ede015af364eba879a8b264&append_to_response=videos,credits,similar`,
  );
  const movie = await res.json();

  return (
    <div className="bg-black min-h-screen text-white">
      <Nav />

      <main className="max-w-6xl mx-auto p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <span className="text-xl">
            ⭐ {movie.vote_average?.toFixed(1)}/10
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <img
            className="w-[300px] h-[450px] rounded-lg object-cover"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />

          <div className="flex-1 bg-zinc-900 rounded-lg overflow-hidden relative min-h-[300px]">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              className="w-full h-full object-cover opacity-50 absolute inset-0"
              alt="backdrop"
            />

            <div className="relative z-10 p-10 flex items-center justify-center h-full">
              <p className="text-zinc-400 italic">
                TRAILER HIINE MARTCIHGV IBOL:
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <p className="text-zinc-400">
            {movie.genres?.map((g: any) => g.name).join(", ")} •{" "}
            {movie.release_date}
          </p>
          <p className="text-lg leading-relaxed">{movie.overview}</p>

          <div className="pt-6 border-t border-zinc-800">
            <h3 className="text-xl font-bold mb-2">Cast</h3>
            <p className="text-zinc-300">
              {movie.credits?.cast
                ?.slice(0, 5)
                .map((a: any) => a.name)
                .join(", ")}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

import Link from "next/link";

export const MovieCard = ({ movie }: { movie: any }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <Link href={`/product/${movie.id}`} className="block">
      <div className="group cursor-pointer space-y-3">
        <div className="aspect-2/3 overflow-hidden rounded-xl bg-zinc-900">
          <img
            src={
              movie.poster_path
                ? posterUrl
                : "https://via.placeholder.com/500x750?text=No+Image"
            }
            alt={movie.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div>
          <div className="flex items-center gap-1 text-sm text-yellow-500 font-bold">
            <span>★</span>
            <span>{movie.vote_average?.toFixed(1)}</span>
          </div>
          <h3 className="line-clamp-1 font-semibold text-zinc-900 dark:text-zinc-900">
            {movie.title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

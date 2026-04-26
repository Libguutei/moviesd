const SearchResult = ({ movies, search }: { movies: any[], search: string }) => {

  if (movies.length === 0) return null;

  return (
    <div className='absolute top-full left-0 mt-2 w-[577px] max-h-[600px] overflow-y-auto rounded-lg bg-white dark:bg-zinc-900 shadow-2xl border border-gray-100 z-[999]'>
     
      <div className="p-2">
        {movies.slice(0, 5).map((movie) => ( 
          <div key={movie.id} className='flex items-center gap-4 p-3 hover:bg-gray-50 dark:hover:bg-zinc-800 cursor-pointer rounded-md border-b border-gray-50 last:border-0'>
            
        {/* poster */}
            <div className='w-[60px] h-[80px] bg-gray-200 rounded overflow-hidden flex-shrink-0'>
              {movie.poster_path && (
                <img 
                  src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`} 
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* description */}
            <div className='flex-1'>
              <h1 className="font-semibold text-sm line-clamp-1">{movie.title}</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-yellow-500 text-xs">★ {movie.vote_average.toFixed(1)}</span>
                <span className="text-gray-400 text-xs">{movie.release_date?.split('-')[0]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-100 bg-gray-50 dark:bg-zinc-900/50">
        <p className="text-sm font-medium text-center text-gray-600 hover:text-indigo-600 cursor-pointer">
          See all results for "{search}"
        </p>
      </div>
      
    </div>
  )
}
export default SearchResult;